import { Building2, Users, Award, TrendingUp, CheckCircle2, Target, Shield, Zap, Factory, Warehouse, Home, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";

interface AboutPageProps {
  onOpenContactModal?: () => void;
}

export function AboutPage({ onOpenContactModal }: AboutPageProps = {}) {
  const stats = [
    { value: "2010", label: "Год основания", icon: Building2 },
    { value: "15", label: "Лет на рынке", icon: TrendingUp },
    { value: "45+", label: "Построенных объектов", icon: Award },
    { value: "500+", label: "Сотрудников", icon: Users },
  ];

  const values = [
    {
      icon: Shield,
      title: "Надёжность",
      description: "Собственные производства гарантируют качество материалов и соблюдение сроков",
    },
    {
      icon: Target,
      title: "Прозрачность",
      description: "Чистая документация, прозрачное ценообразование и открытые процессы",
    },
    {
      icon: Zap,
      title: "Инновации",
      description: "Совремеые техологии производства и строительства",
    },
  ];

  const milestones = [
    {
      year: "2010",
      title: "Основание компании",
      description: "Начало деятельности с добычи песчано-гравийной смеси",
    },
    {
      year: "2013",
      title: "Завод ЖБИ",
      description: "Открытие собственного завода железобетонных изделий",
    },
    {
      year: "2016",
      title: "Производство Baukraft",
      description: "Запуск производства сухих строительных смесей",
    },
    {
      year: "2018",
      title: "Первый жилой комплекс",
      description: "Начало строительства многоквартирных домов",
    },
    {
      year: "2026",
      title: "Лидер региона",
      description: "Крупнейший застройщик Западно-Казахстанской области",
    },
  ];

  const advantages = [
    "Полный контроль качества на каждом этапе",
    "Отсутствие посредников — экономия до 25%",
    "Собственная спецтехника и произвдства",
    "Опытная команда специалистов",
    "Сроки сдачи объектов гарантированы",
    "Прозрачная работа с документами",
  ];

  const divisions = [
    {
      icon: Factory,
      title: "Добыча ПГС",
      image: "https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFycnklMjBtaW5pbmclMjBzaXRlfGVufDF8fHx8MTc2MTE1MzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Собственный карьер обеспечивает качественным сырьем",
    },
    {
      icon: Warehouse,
      title: "Производство ЖБИ",
      image: "https://images.unsplash.com/photo-1758269445774-61a540a290a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjExMzcwODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Современный завод с полным циклом производства",
    },
    {
      icon: Home,
      title: "Строительство",
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MTA1NjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Возведение качественных жилых комплексов",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Visual Elements */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
        {/* Animated Background Pattern */}
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
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30 shadow-lg">
                <span className="text-accent font-semibold text-sm tracking-wide">О компании</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                С 2010 года поддерживаем строительную отрасль Западного Казахстана
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-white/90 leading-relaxed font-light mb-10">
                Вертикально интегрированная компания полного цикла: от добычи сырья до возведения
                комфортного жилья. Работаем для развития региона и благополучия жителей.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
                onClick={onOpenContactModal}
              >
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/20 relative">
        {/* Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <Card className="group text-center border-2 border-border hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <CardContent className="p-8 relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {stat.value}
                      </div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      
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

      {/* Main Content Split with Image */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Grid Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 78, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 59, 78, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <AnimatedSection animation="slide-right">
              <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                <span className="text-accent text-sm font-medium">Наше преимущество</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                Вертикальная интеграция — залог качества
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы контролируем весь производственный цикл: от карьера по добыче ПГС до сдачи ключей
                новосёлам. Это позволяет нам гарантировать качество, соблюдать сроки и предлагать
                справедливые цены.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Собственные производства, квалифицированная команда и современное оборудование — всё
                это делает нас надёжным партнёром как для частных покупателей, так и для крупного бизнеса.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {advantages.map((advantage, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/60 to-secondary/30 hover:from-secondary hover:to-secondary/60 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{advantage}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <p className="text-xs text-muted-foreground">Контроль качества</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">25%</div>
                  <p className="text-xs text-muted-foreground">Экономия средств</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">0</div>
                  <p className="text-xs text-muted-foreground">Посредников</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" className="relative">
              <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjExNDI3MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Команда Орал Полимер"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                
                {/* Floating Info Card */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-lg">500+ специалистов</p>
                        <p className="text-sm text-muted-foreground">Опытная комана професоналов</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Divisions Section with Image Cards */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-white relative overflow-hidden">
        {/* Decorative Background */}
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
            <div className="inline-block px-4 py-2 bg-white border-2 border-accent/20 rounded-full mb-6 shadow-lg">
              <span className="text-accent font-semibold text-sm tracking-wide">Наши направления</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Полный цикл производства
            </h2>
            <div className="relative w-24 h-1 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/80 to-primary/80 rounded-full blur-[1px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/60 to-primary/60 rounded-full blur-sm scale-125" />
              <div className="relative w-full h-full bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={division.image}
                        alt={division.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>

                    <CardContent className="p-6 relative">
                      {/* Corner Decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {division.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {division.description}
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

      {/* Values Section with Enhanced Design */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Наши ценности</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Принципы работы
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 150}
                >
                  <Card className="group border-2 border-border hover:border-accent/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white h-full relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <CardContent className="p-8 text-center relative">
                      <div className="relative">
                        {/* Background Circle Animation */}
                        <div className="absolute -inset-8 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                        
                        <div className="relative w-20 h-20 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                          <Icon className="h-10 w-10 text-accent" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {value.description}
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

      {/* Timeline Section with Modern Design */}
      <section className="py-24 bg-gradient-to-b from-secondary/40 via-secondary/20 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 59, 78, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 59, 78, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">История</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Наш путь к успеху
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-0">
            {milestones.map((milestone, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="flex gap-8 items-start group relative">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-28 text-right">
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-accent to-accent/80 rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      <span className="text-xl font-bold text-white">{milestone.year}</span>
                    </div>
                  </div>
                  
                  {/* Timeline Line */}
                  <div className="flex-shrink-0 w-px h-full bg-gradient-to-b from-accent via-primary to-accent relative">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full shadow-lg group-hover:scale-150 transition-transform duration-300">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 pb-16 last:pb-0">
                    <Card className="border-2 border-border hover:border-accent/30 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Pattern */}
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
              Станьте частью нашей истории
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Присоединяйтесь к тысячам довольных клиентов, которые выбрали Орал Полимер
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-8"
                onClick={onOpenContactModal}
              >
                Связаться с нами
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
              >
                Наши проекты
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}