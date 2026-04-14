import { useEffect, useRef } from 'react';

interface TwoGisMapProps {
  center: [number, number];
  zoom?: number;
  popupContent?: string;
}

declare global {
  interface Window {
    DG: any;
  }
}

export function TwoGisMap({ center, zoom = 16, popupContent }: TwoGisMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Function to initialize the map
    const initializeMap = () => {
      if (!mapContainerRef.current || !window.DG) return;

      // Clean up existing map instance
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      window.DG.then(() => {
        try {
          const map = window.DG.map(mapContainerRef.current, {
            center: center,
            zoom: zoom,
            fullscreenControl: false,
            zoomControl: true,
            scrollWheelZoom: true
          });

          window.DG.marker(center)
            .addTo(map)
            .bindPopup(popupContent || 'Наш объект')
            .openPopup();

          mapInstanceRef.current = map;
        } catch (e) {
          console.error("Error initializing 2GIS map:", e);
        }
      });
    };

    // Check if script is already loaded
    if (window.DG) {
      initializeMap();
    } else {
      // Load the script
      const script = document.createElement('script');
      script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          // Ignore removal errors
        }
        mapInstanceRef.current = null;
      }
    };
  }, [center[0], center[1], zoom, popupContent]);

  return <div ref={mapContainerRef} className="w-full h-full min-h-[400px]" />;
}
