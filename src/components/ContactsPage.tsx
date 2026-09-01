import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { phones, realtyPhone, productionPhone, generalPhone } from "../utils/contacts";

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

export function ContactsPage() {
  const formContainerRef = useRef<HTMLDivElement>(null);

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

  // Load Bitrix24 form script
  useEffect(() => {
    // Create script element with Bitrix24 form code
    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/9/5fdjvz');
    script.setAttribute('data-skip-moving', 'true');
    script.text = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.kz/b28425816/crm/form/loader_9.js');`;
    
    // Append script to the form container
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      // Cleanup: remove Bitrix24 elements
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      items: phones.map((phone) => ({
        label: phone.label,
        value: phone.display,
        href: phone.href,
        whatsapp: phone.whatsapp,
      })),
    },
    {
      icon: Mail,
      title: "Email",
      items: [
        { label: "Общие вопросы", value: "info@oral-polimer.kz" },
        { label: "Продажи", value: "info@oral-polimer.kz" },
        { label: "HR", value: "info@oral-polimer.kz" },
      ],
    },
    {
      icon: MapPin,
      title: "Адрес",
      items: [
        { label: "Главный офис", value: "г. Уральск, Тюленина 47/1" },
        { label: "Офис продаж", value: "г. Уральск, Тюленина 47/1" },
      ],
    },
    {
      icon: Clock,
      title: "Режим работы",
      items: [
        { label: "Пн-Пт", value: "9:00 - 18:00" },
        { label: "Сб", value: "10:00 - 15:00" },
        { label: "Вс", value: "Выходной" },
      ],
    },
  ];

  const offices = [
    {
      name: "Главный офис и производство",
      address: "г. Уральск, Тюленина 47/1",
      phone: generalPhone,
      email: "info@oral-polimer.kz",
      hours: "Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00",
    },
    {
      name: "Офис продаж квартир",
      address: "г. Уральск, Тюленина 47/1",
      phone: realtyPhone,
      email: "info@oral-polimer.kz",
      hours: "Пн-Вс: 10:00 - 20:00",
    },
    {
      name: "Завод ЖБИ",
      address: "г. Уральск, Тюленина 47/1",
      phone: productionPhone,
      email: "info@oral-polimer.kz",
      hours: "Пн-Пт: 8:00 - 17:00",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZEQjkxMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <span className="text-accent text-sm font-medium tracking-wide">Контакты</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Свяжитесь с нами
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              Мы всегда рады ответить на ваши вопросы и обсудить возможности сотрудничества
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-primary mb-4">{contact.title}</h3>
                    <div className="space-y-3">
                      {contact.items.map((item: any, idx: number) => (
                        <div key={idx}>
                          <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-foreground">{item.value}</p>
                          )}
                          {item.whatsapp && (
                            <a
                              href={item.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                            >
                              <MessageCircle className="h-3.5 w-3.5" />
                              Написать в WhatsApp
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                  <span className="text-accent text-sm font-medium">Напишите нам</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                  Оставьте заявку
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Заполните форму, и наш специалист свяжется с вами в ближайшее время
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {/* Bitrix24 Form Widget */}
                  <div id="bitrix24-form-container" ref={formContainerRef}></div>
                </CardContent>
              </Card>
            </div>

            {/* Offices & Social */}
            <div className="space-y-6">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                  <span className="text-accent text-sm font-medium">Наши офисы</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                  Где нас найти
                </h2>
              </div>

              {offices.map((office, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">{office.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                        <a
                          href={office.phone.href}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {office.phone.display}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <a
                          href={office.phone.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          Написать в WhatsApp
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{office.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Media */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/90">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/oralpolimer/"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                    >
                      <MessageCircle className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Как добраться</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Мы на карте
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <MapViewer coordinates={[51.246979, 51.402567]} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Suggestion */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-3xl mx-auto border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Не нашли ответ на вопрос?</h3>
              <p className="text-muted-foreground mb-8">
                Позвоните нам, и мы с радостью проконсультируем вас по любым вопросам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 rounded-full px-8"
                >
                  <a href={generalPhone.href}>
                    <Phone className="mr-2 h-5 w-5" />
                    {generalPhone.display}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full px-8 border-primary/20 hover:bg-secondary"
                >
                  <a href={generalPhone.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Написать в WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}