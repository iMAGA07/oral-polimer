import { Truck, Clock, Shield, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

export function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [days, setDays] = useState("1");

  const equipment = [
    {
      category: "Экскаваторы",
      items: [
        { name: "Экскаватор гусеничный 20-25 тонн", price: "35000", image: "https://images.unsplash.com/photo-1665152998573-9ddafb89278f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBleGNhdmF0b3J8ZW58MXx8fHwxNzYxMDcwOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
        { name: "Мини-экскаватор до 5 тонн", price: "18000" },
        { name: "Экскаватор-погрузчик", price: "25000" },
      ],
    },
    {
      category: "Бульдозеры",
      items: [
        { name: "Бульдозер Т-170", price: "40000" },
        { name: "Бульдозер Shantui SD-16", price: "38000" },
      ],
    },
    {
      category: "Грузовики",
      items: [
        { name: "Самосвал КАМАЗ 15 тонн", price: "28000" },
        { name: "Самосвал 25 тонн", price: "35000" },
        { name: "Бортовой грузовик 10 тонн", price: "20000" },
      ],
    },
    {
      category: "Спецтехника",
      items: [
        { name: "Автокран 25 тонн", price: "45000" },
        { name: "Погрузчик фронтальный", price: "30000" },
        { name: "Каток дорожный", price: "25000" },
        { name: "Автобетоносмеситель 7 м³", price: "22000" },
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Техника в отличном состоянии",
      description: "Регулярное техническое обслуживание и проверка перед каждой сдачей",
    },
    {
      icon: Clock,
      title: "Гибкие условия аренды",
      description: "От нескольких часов до долгосрочных контрактов на выгодных условиях",
    },
    {
      icon: Truck,
      title: "Доставка на объект",
      description: "Организуем доставку техники к месту работы в оговоренные сроки",
    },
  ];

  const calculatePrice = () => {
    const selected = equipment
      .flatMap((cat) => cat.items)
      .find((item) => item.name === selectedEquipment);
    
    if (!selected) return 0;
    return Number(selected.price) * Number(days);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1665152998573-9ddafb89278f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBleGNhdmF0b3J8ZW58MXx8fHwxNzYxMDcwOTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <span className="text-accent text-sm font-medium tracking-wide">Аренда спецтехники</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Спецтехника и оборудование в лизинг на выгодных условиях
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed font-light">
              Более 30 единиц современной строительной техники для любых задач.
              Гибкие тарифы и профессиональное обслуживание.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-200 rounded-full px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Заказать технику
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
              >
                Посмотреть прайс
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Каталог техники</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Доступная техника
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Все цены указаны за сутки аренды. При долгосрочной аренде предоставляются скидки.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {equipment.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-primary mb-8">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card
                      key={itemIndex}
                      className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group"
                    >
                      {item.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-primary mb-4 min-h-[48px]">{item.name}</h4>
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">от</p>
                            <p className="text-2xl font-bold text-accent">
                              {Number(item.price).toLocaleString()} ₸
                            </p>
                            <p className="text-xs text-muted-foreground">за сутки</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90 rounded-full"
                          >
                            Заказать
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    Калькулятор аренды
                  </h3>
                  <p className="text-muted-foreground">
                    Рассчитайте примерную стоимость аренды техники
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="equipment" className="text-base">Выберите технику</Label>
                    <Select value={selectedEquipment} onValueChange={setSelectedEquipment}>
                      <SelectTrigger id="equipment" className="mt-2 h-12 rounded-xl">
                        <SelectValue placeholder="Выберите из списка" />
                      </SelectTrigger>
                      <SelectContent>
                        {equipment.map((category) => (
                          <div key={category.category}>
                            <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                              {category.category}
                            </div>
                            {category.items.map((item) => (
                              <SelectItem key={item.name} value={item.name}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="days" className="text-base">Срок аренды</Label>
                    <Select value={days} onValueChange={setDays}>
                      <SelectTrigger id="days" className="mt-2 h-12 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 день</SelectItem>
                        <SelectItem value="3">3 дня</SelectItem>
                        <SelectItem value="7">7 дней</SelectItem>
                        <SelectItem value="14">14 дней</SelectItem>
                        <SelectItem value="30">30 дней</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedEquipment && (
                    <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                      <CardContent className="p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Ориентировочная стоимость</p>
                        <p className="text-4xl font-bold text-accent mb-2">
                          {calculatePrice().toLocaleString()} ₸
                        </p>
                        <p className="text-sm text-muted-foreground">
                          за {days} {Number(days) === 1 ? "день" : "дней"}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <Button
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-full"
                    disabled={!selectedEquipment}
                  >
                    Оформить заявку
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Итоговая стоимость рассчитывается индивидуально и зависит от условий аренды
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Нужна консультация?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Свяжитесь с нами, и мы поможем подобрать оптимальную технику для вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-200 rounded-full px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
              >
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}