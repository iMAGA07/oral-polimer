import { MapPin, Calendar, Home, CheckCircle2, ArrowRight, Building2, Users, Shield, TrendingUp, Award, Sparkles, FileText, ExternalLink, X, ChevronUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { PdfEmbedViewer } from "./PdfEmbedViewer";

// Import project images from special offer page
import karavanImage from 'figma:asset/5d25a5f42f0d9704fd3463e929ec894b7774b53f.png';
import omegaImage from 'figma:asset/df615f608c315b399b125ae1af49bccfb214b94c.png';
import zachagansk1Image from 'figma:asset/38fc71108ec7a69648b9064550207d74b396fc54.png';
import zachagansk2Image from 'figma:asset/009c26f0a94b22f482a546ebb80b2b453d4a6cd7.png';

interface ResidentialPageProps {
  onNavigate: (section: string, projectId?: string) => void;
  onOpenContactModal?: () => void;
}

// Separate Map Component to handle lifecycle
function MapViewer({ coordinates }: { coordinates: [number, number] }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Check if DG is available
    const DG = (window as any).DG;
    
    if (DG && mapContainerRef.current && !mapInstanceRef.current) {
      DG.then(() => {
        // Double check if component is still mounted and map not created
        if (!mapContainerRef.current || mapInstanceRef.current) return;

        mapInstanceRef.current = DG.map(mapContainerRef.current, {
          center: coordinates,
          zoom: 16,
          fullscreenControl: false
        });

        DG.marker(coordinates).addTo(mapInstanceRef.current);
      });
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [coordinates]);

  return <div ref={mapContainerRef} className="w-full h-full" />;
}

export function ResidentialPage({ onNavigate, onOpenContactModal }: ResidentialPageProps) {
  const [filter, setFilter] = useState<string>("all");
  const [mapProject, setMapProject] = useState<any | null>(null);
  const [pdfProject, setPdfProject] = useState<any | null>(null);

  // Load 2GIS script
  useEffect(() => {
    if (!document.getElementById('2gis-api')) {
      const script = document.createElement('script');
      script.id = '2gis-api';
      script.src = 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const projects = [
    {
      id: "karavan",
      name: "ЖК Караван",
      location: "г. Уральск, мкр. Караван",
      status: "Объект сдан",
      image: karavanImage,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Современный жилой комплекс в развитом микрорайоне Караван с развитой инфраструктурой, закрытой территорией и детскими площадками",
      floors: "9 этажей",
      features: ["Объект сдан", "Доступны гаражи", "Детские площадки", "Парковка"],
      stats: [
        { label: "Площадь", value: "43-83 м²" },
        { label: "Цена", value: "от 12 млн ₸" },
        { label: "Этажей", value: "9" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/zheltoksan2.pdf",
      // Coordinates for Karavan (Lat, Lon)
      coordinates: [51.237015, 51.404681] as [number, number]
    },
    {
      id: "omega",
      name: "ЖК Омега",
      location: "г. Уральск, мкр. Омега",
      status: "Объект сдан",
      image: omegaImage,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Комфортный жилой комплекс в микрорайоне Омега с современными планировками, зелёными дворами и удобной транспортной доступностью",
      floors: "5 этажей",
      features: ["Объект сдан", "Современные планировки", "Зелёные дворы", "Парковка"],
      stats: [
        { label: "Площадь", value: "49-81 м²" },
        { label: "Цена", value: "от 13 млн ₸" },
        { label: "Этажей", value: "5" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/omega.pdf",
      coordinates: [51.235952, 51.366173] as [number, number]
    },
    {
      id: "zachagansk-1",
      name: "ЖК Зачаганск #1",
      location: "г. Уральск, ул. Жумалиева 48",
      status: "Объект сдан",
      image: zachagansk1Image,
      apartments: "1-3 комн.",
      deadline: "Объект сдан",
      description: "Качественный жилой комплекс в микрорайоне Зачаганск с продуманными планировками, благоустроенной территорией и развитой инфраструктурй",
      floors: "9 этажей",
      features: ["Объект сдан", "Блаоусроенная территория", "Детские площадки", "Парковка"],
      stats: [
        { label: "Площадь", value: "27-85 м²" },
        { label: "Цена", value: "от 7 млн ₸" },
        { label: "Этажей", value: "9" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/zach1.pdf",
      coordinates: [51.171538, 51.296323] as [number, number]
    },
    {
      id: "zachagansk-2",
      name: "ЖК Зачаганск #2",
      location: "г. Уральск, ул. Жангир хана 78",
      status: "В продаже",
      image: zachagansk2Image,
      apartments: "1-3 комн.",
      deadline: "Сдача в 2026",
      description: "Новый жилой комплекс в микрорайоне Зачаганск с современными решениями, закрытой территорией и всей необходимой инфраструктурой для комфортной жизни",
      floors: "9 этажей",
      features: ["Строится", "Современные решения", "Парковка"],
      stats: [
        { label: "Площадь", value: "50-83 м²" },
        { label: "Цена", value: "от 13 млн ₸" },
        { label: "Этажей", value: "9" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/zach2.pdf",
      coordinates: [51.172281, 51.297062] as [number, number]
    },
    {
      id: "zrelova",
      name: "ЖК Зрелова",
      location: "г. Уральск, ул. Зрелова 19",
      status: "Строится",
      image: null,
      apartments: "1-3 комн.",
      deadline: "2 квартал 2027 г.",
      description: "Новый жилой комплекс с современными решениями и продуманными планировками для комфортной жизни. 5-этажный дом с 95 квартирами.",
      floors: "5 этажей",
      features: ["Строится", "Современные планировки", "95 квартир", "Сдача 2027"],
      stats: [
        { label: "Площадь", value: "Уточняется" },
        { label: "Цена", value: "Уточняется" },
        { label: "Этажей", value: "5" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/zrelova9.pdf",
      coordinates: [51.230000, 51.380000] as [number, number]
    },
    {
      id: "tukaya",
      name: "ЖК Тукая",
      location: "г. Уральск, ул. Тукая 77",
      status: "Строится",
      image: null,
      apartments: "1-3 комн.",
      deadline: "2 квартал 2027 г.",
      description: "Современный жилой комплекс с качественными материалами и удобными планировками. 5-этажный дом с 85 квартирами.",
      floors: "5 этажей",
      features: ["Строится", "85 квартир", "Качественные материалы", "Сдача 2027"],
      stats: [
        { label: "Площадь", value: "Уточняется" },
        { label: "Цена", value: "Уточняется" },
        { label: "Этажей", value: "5" },
      ],
      pdfUrl: "https://hbnjbwzukwhtkiqdfdtr.supabase.co/storage/v1/object/public/planirovki/tukaya77.pdf",
      coordinates: [51.228000, 51.385000] as [number, number]
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Качественные материалы",
      description: "Строим на собственных материалах с полным контролем качества",
    },
    {
      icon: TrendingUp,
      title: "Гибкая ипотека",
      description: "Сотрудничесво с ведущими банками Казахстана",
    },
    {
      icon: Award,
      title: "Прозрачность",
      description: "Отчёты о ходе строительства, чистая документация",
    },
    {
      icon: Sparkles,
      title: "Современные планировки",
      description: "Продуманные решения для комфортной жизни",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.status === filter);

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1706380469118-1e5c57701a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzYxMTU1MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Жилые комплексы"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30 shadow-lg">
                <span className="text-accent font-semibold text-sm tracking-wide">Жилые комплексы</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Комфортное жильё в Уральске от застройщика
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-white/90 leading-relaxed font-light mb-10 max-w-2xl">
                Строим современные жилые комплексы на собственных качественных материалах. 
                Гарантируем надёжность, комфорт и доступные цены.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
                  onClick={() => {
                    const projectsSection = document.getElementById('projects-section');
                    projectsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Смотреть проекты
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
                  onClick={() => onOpenContactModal?.()}
                >
                  Связаться с нами
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-border/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up" delay={0}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">920+</div>
                <p className="text-sm text-muted-foreground">Квартир в продаже</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">6</div>
                <p className="text-sm text-muted-foreground">Жилых комплексов</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Контроль качества</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">25%</div>
                <p className="text-sm text-muted-foreground">Экономия средств</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-b from-white to-secondary/20 sticky top-20 z-40 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={`rounded-full transition-all duration-300 shadow-md ${ 
                  filter === "all" 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "hover:bg-secondary hover:scale-105"
                }`}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Все проекты
              </Button>
              <Button
                variant={filter === "В продаже" ? "default" : "outline"}
                onClick={() => setFilter("В продаже")}
                className={`rounded-full transition-all duration-300 shadow-md ${
                  filter === "В продаже" 
                    ? "bg-accent text-accent-foreground shadow-lg scale-105" 
                    : "hover:bg-secondary hover:scale-105"
                }`}
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                В продаже
              </Button>
              <Button
                variant={filter === "Скоро" ? "default" : "outline"}
                onClick={() => setFilter("Скоро")}
                className={`rounded-full transition-all duration-300 shadow-md ${
                  filter === "Скоро" 
                    ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                    : "hover:bg-secondary hover:scale-105"
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Скоро в продаже
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects - Alternating Layout */}
      <section id="projects-section" className="py-24 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 78, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 59, 78, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white border-2 border-accent/20 rounded-full mb-6 shadow-lg">
              <span className="text-accent font-semibold text-sm tracking-wide">Наши проекты</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Жилые комплексы в Уральске
            </h2>
            <div className="relative w-24 h-1 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 rounded-full blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-primary/60 rounded-full blur-sm scale-125" />
              <div className="relative w-full h-full bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
          </AnimatedSection>

          <div className="space-y-32 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={project.id}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section */}
                  <AnimatedSection
                    animation={isEven ? "slide-right" : "slide-left"}
                    className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                      onClick={() => setPdfProject(project)}
                    >
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
                        </>
                      ) : (
                        /* Placeholder for upcoming projects */
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70 flex flex-col items-center justify-center gap-4">
                          {/* Decorative grid pattern */}
                          <div
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                              backgroundSize: "32px 32px",
                            }}
                          />
                          {/* Animated rings */}
                          <div className="relative flex items-center justify-center">
                            <div className="absolute w-28 h-28 rounded-full border-2 border-accent/20 animate-ping" style={{ animationDuration: "3s" }} />
                            <div className="absolute w-20 h-20 rounded-full border border-accent/30" />
                            <div className="w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                              <Building2 className="w-8 h-8 text-accent" />
                            </div>
                          </div>
                          <p className="relative text-white/90 text-sm font-medium tracking-wide">
                            Фотографии скоро будут загружены
                          </p>
                        </div>
                      )}
                      
                      {/* Status Badge */}
                      <div className="absolute top-6 left-6 z-10">
                        <span
                          className={`px-4 py-2 rounded-full font-semibold backdrop-blur-md border shadow-lg transform group-hover:scale-105 transition-transform duration-300 ${
                            project.status === "Строится"
                              ? "bg-amber-500/90 text-white border-amber-400"
                              : project.status === "Объект сдан"
                              ? "bg-green-600/90 text-white border-green-500"
                              : "bg-accent/90 text-accent-foreground border-accent"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-6 ${isEven ? "-right-6" : "-left-6"} w-32 h-32 bg-accent/10 rounded-full blur-2xl`} />
                    <div className={`absolute -bottom-6 ${isEven ? "-left-6" : "-right-6"} w-40 h-40 bg-primary/10 rounded-full blur-3xl`} />
                  </AnimatedSection>

                  {/* Content Section */}
                  <AnimatedSection
                    animation={isEven ? "slide-left" : "slide-right"}
                    className={!isEven ? "lg:col-start-1 lg:row-start-1" : ""}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                          {project.name}
                        </h3>
                        <div className="flex items-start gap-3 text-muted-foreground mb-6">
                          <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                          <span className="text-lg">{project.location}</span>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Extended Info Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {/* Existing Stats */}
                        <Card className="border border-border/50 shadow-sm">
                          <CardContent className="p-2 py-3">
                            <div className="text-center">
                              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Квартиры</p>
                              <p className="font-semibold text-primary text-sm">{project.apartments}</p>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border border-border/50 shadow-sm">
                          <CardContent className="p-2 py-3">
                            <div className="text-center">
                              <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Срок сдачи</p>
                              <p className="font-semibold text-accent text-sm">{project.deadline}</p>
                            </div>
                          </CardContent>
                        </Card>

                        {/* Additional Stats from removed overlay */}
                        {project.stats.map((stat, idx) => (
                          <Card key={idx} className="border border-border/50 shadow-sm">
                            <CardContent className="p-2 py-3">
                              <div className="text-center">
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                                <p className="font-semibold text-primary text-sm">{stat.value}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Button
                          size="lg"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8 w-full sm:w-auto"
                          onClick={() => setPdfProject(project)}
                        >
                          Посмотреть планировки
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 rounded-full px-8 w-full sm:w-auto flex items-center justify-center"
                          onClick={() => setMapProject(project)}
                        >
                          На карте
                          <MapPin className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white to-secondary/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23183B4E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Преимущества</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл производства и собственные материалы — гарантия качества и доступных цен
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="group text-center border-2 border-border hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <CardContent className="p-6 relative">
                      <div className="relative">
                        {/* Background Circle Animation */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                        
                        <div className="relative w-16 h-16 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {benefit.description}
                      </p>

                      {/* Bottom Accent Glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                        <div className="absolute bottom-0 left-0 h-full w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-accent/80 via-accent to-primary/80 blur-[1px]" />
                        <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out bg-gradient-to-r from-accent/40 via-accent/60 to-primary/40 blur-sm" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Temporarily hidden */}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Не нашли подходящий вариант?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Свяжитесь с нами, и мы подберём квартиру по вашим требованиям
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
                onClick={() => onOpenContactModal?.()}
              >
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
                onClick={() => onNavigate("about")}
              >
                О компании
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Map Dialog */}
      <Dialog open={!!mapProject} onOpenChange={(open) => !open && setMapProject(null)}>
        <DialogContent className="max-w-4xl w-[90vw] h-[80vh] p-0 overflow-hidden bg-background rounded-2xl border-none shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>Расположение: {mapProject?.name}</DialogTitle>
            <DialogDescription>Карта с расположением объекта {mapProject?.name}</DialogDescription>
          </DialogHeader>

          {/* Close Button */}
          <button 
            onClick={() => setMapProject(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-all duration-200 backdrop-blur-sm shadow-lg"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="w-full h-full">
            {mapProject && (
              <MapViewer 
                coordinates={mapProject.coordinates} 
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* PDF Popup Modal */}
      {pdfProject && (
        <div
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6"
          onClick={() => setPdfProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-6xl flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: "min(90vh, 860px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between gap-4 px-5 py-3.5 bg-gray-900 border-b border-white/10">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-base truncate">
                    {pdfProject.name}
                  </p>
                  <p className="text-white/40 text-xs hidden sm:block">Планировки квартир</p>
                </div>
              </div>
              <button
                onClick={() => setPdfProject(null)}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* PDF Viewer — fills remaining height */}
            <div className="flex-1 min-h-0">
              <PdfEmbedViewer pdfUrl={pdfProject.pdfUrl} className="h-full" />
            </div>

            {/* Download Button */}
            <div className="flex-shrink-0 flex justify-center px-5 py-4 bg-gray-900 border-t border-white/10">
              <button
                onClick={() => {
                  fetch(pdfProject.pdfUrl)
                    .then(r => r.blob())
                    .then(b => {
                      const a = document.createElement('a');
                      a.href = URL.createObjectURL(b);
                      a.download = `${pdfProject.name}_планировка.pdf`;
                      a.click();
                      URL.revokeObjectURL(a.href);
                    });
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#555'}
                onMouseOut={(e) => e.currentTarget.style.background = '#333'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 28px',
                  background: '#333',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: '-apple-system,BlinkMacSystemFont,sans-serif',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background .2s',
                  cursor: 'pointer'
                }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Скачать планировку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}