import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { X, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

interface MapDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    location: string;
    coordinates: [number, number]; // [lat, lng]
    mapLink?: string; // Link to open in 2GIS/Maps app
  } | null;
}

declare global {
  interface Window {
    DG: any;
  }
}

export function MapDialog({ isOpen, onClose, project }: MapDialogProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!isOpen || !project) return;

    // Function to initialize map
    const initMap = () => {
      if (!mapContainerRef.current || !window.DG) return;

      // If map instance already exists, remove it to avoid duplicates/memory leaks
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      window.DG.then(() => {
        // Double check container exists
        if (!mapContainerRef.current) return;

        mapInstanceRef.current = window.DG.map(mapContainerRef.current, {
          center: project.coordinates,
          zoom: 16,
          scrollWheelZoom: false,
          fullscreenControl: false
        });

        const popupContent = `
          <div style="font-family: sans-serif; padding: 5px;">
            <b style="font-size: 14px; display: block; margin-bottom: 4px;">${project.name}</b>
            <span style="font-size: 12px; color: #666;">${project.location}</span>
          </div>
        `;

        window.DG.marker(project.coordinates)
          .addTo(mapInstanceRef.current)
          .bindPopup(popupContent)
          .openPopup();
      });
    };

    // Load 2GIS script if not already loaded
    if (!window.DG) {
      const script = document.createElement("script");
      script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      // Small timeout to ensure DOM is ready inside Dialog
      setTimeout(initMap, 100);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [isOpen, project]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl">
        <DialogHeader className="p-4 bg-white border-b flex flex-row items-center justify-between space-y-0 relative z-10">
          <div className="flex items-center gap-4">
            <DialogTitle className="text-xl font-bold">{project?.name}</DialogTitle>
            {project?.mapLink && (
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex h-8 gap-2 text-xs"
                onClick={() => window.open(project.mapLink, '_blank')}
              >
                Открыть в 2GIS <ExternalLink className="h-3 w-3" />
              </Button>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 bg-secondary/10 hover:bg-secondary/20 transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </DialogHeader>
        
        <div className="relative w-full h-[60vh] min-h-[400px]">
          <div 
            ref={mapContainerRef} 
            className="absolute inset-0 w-full h-full bg-secondary/5"
          />
          {/* Mobile floating button */}
          {project?.mapLink && (
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:hidden z-[1000]">
               <Button 
                className="shadow-lg rounded-full"
                onClick={() => window.open(project.mapLink, '_blank')}
              >
                Открыть в 2GIS
              </Button>
             </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}