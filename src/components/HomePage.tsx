import { Building2, Factory, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { useState, useEffect } from "react";

// Import project images from special offer page
import karavanImage from 'figma:asset/5d25a5f42f0d9704fd3463e929ec894b7774b53f.png';
import omegaImage from 'figma:asset/df615f608c315b399b125ae1af49bccfb214b94c.png';
import zachagansk1Image from 'figma:asset/38fc71108ec7a69648b9064550207d74b396fc54.png';
import zachagansk2Image from 'figma:asset/009c26f0a94b22f482a546ebb80b2b453d4a6cd7.png';

interface HomePageProps {
  onNavigate: (section: string, projectId?: string) => void;
  onOpenContactModal?: () => void;
}

export function HomePage({ onNavigate, onOpenContactModal }: HomePageProps) {


  const services = [
    {
      icon: Factory,
      title: "Добыча ПГС",
      description: "Собственный карьер с контролем качества",
    },
    {
      icon: Building2,
      title: "Железобетонные изделия",
      description: "Современный завод ЖБИ полного цикла",
    },
    {
      icon: Factory,
      title: "Сухие смеси Baukraft",
      description: "Производство строительных смесей",
    },
    {
      icon: Home,
      title: "Жилые комплексы",
      description: "Строительство качественного жилья",
    },
  ];

  const projects = [
    {
      id: "karavan",
      name: "ЖК Караван",
      location: "г. Уральск, мкр. Караван",
      area: "43-83 м²",
      deadline: "Объект сдан",
      price: "от 12 млн ₸",
      priceAfterVAT: "от 12 млн ₸",
      status: "Объект сдан",
      statusColor: "bg-green-600",
      image: karavanImage,
    },
    {
      id: "omega",
      name: "ЖК Омега",
      location: "г. Уральск, мкр. Омега",
      area: "49-81 м²",
      deadline: "Объект сдан",
      price: "от 13 млн ₸",
      priceAfterVAT: "от 13 млн ₸",
      status: "Объект сдан",
      statusColor: "bg-green-600",
      image: omegaImage,
    },
    {
      id: "zachagansk-1",
      name: "ЖК Зачаганск #1",
      location: "г. Уральск, ул. Жумалиева 48",
      area: "27-85 м²",
      deadline: "Объект сдан",
      price: "от 7 млн ₸",
      priceAfterVAT: "от 7 млн ₸",
      status: "Объект сдан",
      statusColor: "bg-green-600",
      image: zachagansk1Image,
    },
    {
      id: "zachagansk-2",
      name: "ЖК Зачаганск #2",
      location: "г. Уральск, ул. Жангир хана 78",
      area: "50-83 м²",
      deadline: "Сдача в 2026",
      price: "от 13 млн ₸",
      priceAfterVAT: "от 13 млн ₸",
      status: "Сдача в 2026 г.",
      statusColor: "bg-red-600",
      image: zachagansk2Image,
    },
    {
      id: "zrelova",
      name: "ЖК Зрелова",
      location: "г. Уральск, ул. Зрелова 19",
      area: "Скоро будет указано",
      deadline: "2 квартал 2027 г.",
      price: null,
      priceAfterVAT: null,
      status: "Строится",
      statusColor: "bg-amber-500",
      image: null,
    },
    {
      id: "tukaya",
      name: "ЖК Тукая",
      location: "г. Уральск, ул. Тукая 77",
      area: "Скоро будет указано",
      deadline: "2 квартал 2027 г.",
      price: null,
      priceAfterVAT: null,
      status: "Строится",
      statusColor: "bg-amber-500",
      image: null,
    },
  ];

  const stats = [
    { value: "45+", label: "Построенных объектов" },
    { value: "15", label: "Лет на рынке" },
    { value: "3", label: "Производственные площадки" },
    { value: "30+", label: "Единиц спецтехники" },
  ];

  const benefits = [
    "Полный контроль качества на каждом этапе",
    "Собственные производства материалов",
    "Сроки сдачи гарантированы",
    "Прозрачные цены без переплат",
  ];

  return (
    <div className="relative">
      {/* Hero Section - ОСТАВЛЯЕМ КАК ЕСТЬ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1569764102256-f7ff0673bd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBjaXR5JTIwYnVpbGRpbmdzJTIwZHJvbmV8ZW58MXx8fHwxNzYxMTUyNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <span className="text-accent text-sm font-medium tracking-wide">
                Надёжный застройщик с 2010 года
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Орал Полимер
              <br />
              <span className="text-accent">Полный цикл</span> строительства
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-light">
              От карьера до ключей. Вертикально интегрированная строительная компания в г. Уральск.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-200 rounded-full px-8 text-base"
                onClick={() => onNavigate("residential")}
              >
                Посмотреть квартиры
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8 text-base"
                onClick={() => onNavigate("production")}
              >
                Производство
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>



      {/* About Section with Visual Split */}
      <section className="py-24 bg-gradient-to-b from-white via-secondary/10 to-white relative overflow-hidden">
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 78, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 59, 78, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Content */}
            <AnimatedSection animation="slide-right">
              <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                <span className="text-accent text-sm font-medium">О компании</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary tracking-tight leading-tight">
                Вертикально интегрированная компания
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Собственный карьер, завод железобетонных изделий, производство сухих смесей Baukraft 
                и возведение жилых домов. Всё — в одном цикле под контролем единой команды.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <AnimatedSection animation="fade-up" delay={100}>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">2010</div>
                    <p className="text-xs text-muted-foreground">Год основания</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                    <p className="text-xs text-muted-foreground">Сотрудников</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">45+</div>
                    <p className="text-xs text-muted-foreground">Объектов</p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={400 + index * 100}
                  >
                    <div className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground leading-snug">{benefit}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Right Side - Visual */}
            <AnimatedSection animation="slide-left" className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1642602592225-0b1e650561a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGFlcmlhbHxlbnwxfHx8fDE3NjExNTQyMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Производство"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                </div>

                {/* Floating Card */}
                <AnimatedSection animation="fade-up" delay={600}>
                  <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs border border-border/50">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                        <Factory className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">Полный цикл</p>
                        <p className="text-xs text-muted-foreground">производства</p>
                      </div>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden relative">
                      <div className="absolute inset-0 w-3/4 bg-gradient-to-r from-accent/60 to-primary/60 rounded-full blur-sm" />
                      <div className="relative h-full w-3/4 bg-gradient-to-r from-accent to-primary rounded-full" />
                    </div>
                  </div>
                </AnimatedSection>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section with Accent Background */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-primary/5 via-primary/3 to-white">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        
        {/* Diagonal Accent Stripes */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-br from-accent to-transparent rotate-12 transform" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-tl from-primary to-transparent -rotate-12 transform" />
        </div>
        
        {/* Concrete Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23183B4E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white border-2 border-accent/20 rounded-full mb-6 shadow-lg">
              <span className="text-accent font-semibold text-sm tracking-wide">Направления</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Наши направления деятельности
            </h2>
            <div className="relative w-24 h-1 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 rounded-full blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-primary/60 rounded-full blur-sm scale-125" />
              <div className="relative w-full h-full bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-border hover:border-accent/30 hover:-translate-y-3 bg-white h-full">
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-accent/3 group-hover:to-transparent transition-all duration-500" />
                    
                    {/* Top Accent Glow */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-accent/80 via-accent to-primary/80 blur-[1px]" />
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent/40 via-accent/60 to-primary/40 blur-sm" />
                    </div>
                    
                    <CardContent className="p-8 relative">
                      <div className="relative">
                        {/* Animated Background Circle */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                        
                        <div className="relative w-16 h-16 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* Corner Decoration */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent/10 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
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

      {/* Projects Section with Enhanced Cards */}
      <section className="py-24 bg-white relative">
        {/* Decorative Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                  <span className="text-accent text-sm font-medium">Жилые комплексы</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
                  Наши проекты в Уральске
                </h2>
              </div>
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 rounded-full border-primary/20 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 group"
                onClick={() => onNavigate("residential")}
              >
                Все проекты
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation="fade-up"
                delay={index * 150}
              >
                <Card
                  className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full"
                  onClick={() => onNavigate("residential", project.id)}
                >
                  <div className="relative h-72 overflow-hidden">
                    {project.image ? (
                      <>
                        {/* Image with Parallax Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                          />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0 group-hover:from-black/90 transition-all duration-500" />
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
                        <p className="relative text-white/70 text-sm font-medium tracking-widest uppercase">
                          Скоро
                        </p>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border ${
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
                  
                  <CardContent className="p-6 relative">
                    {/* Accent Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <h3 className="text-xl font-semibold mb-2 text-primary group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.location === "Скоро будет указано" ? (
                        <span className="italic text-muted-foreground/70">Адрес скоро будет указан</span>
                      ) : (
                        project.location
                      )}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Площадь:</span>
                        <span className={`font-medium ${project.area === "Скоро будет указано" ? "text-muted-foreground/70 italic text-xs" : "text-foreground"}`}>
                          {project.area === "Скоро будет указано" ? "Скоро будет указано" : project.area}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Сдача:</span>
                        <span className="font-medium text-accent">{project.deadline}</span>
                      </div>
                      <div className="pt-3 border-t border-border/50">
                        <div className="flex items-baseline justify-between">
                          <span className="text-sm text-muted-foreground">Цена:</span>
                          {project.price ? (
                            <span className="text-lg font-bold text-foreground">{project.price}</span>
                          ) : (
                            <span className="text-xs italic text-muted-foreground/70">Скоро будет указано</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12 md:hidden">
            <Button
              variant="outline"
              className="rounded-full border-primary/20 group"
              onClick={() => onNavigate("residential")}
            >
              Все проекты
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section with Pattern */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        {/* Animated Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z' stroke='%23FDB913' stroke-opacity='1'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Свяжитесь с нами для консультации по покупке квартиры, строительным материалам или партнёрству
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-200 rounded-full px-8 group"
                onClick={() => onOpenContactModal && onOpenContactModal()}
              >
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
                onClick={() => onNavigate("residential")}
              >
                Выбрать квартиру
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}