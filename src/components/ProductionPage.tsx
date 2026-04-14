import { Factory, Package, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ProductionPageProps {
  onOpenContactModal?: () => void;
}

export function ProductionPage({ onOpenContactModal }: ProductionPageProps = {}) {
  const productions = [
    {
      id: "pgs",
      title: "Добыча ПГС",
      subtitle: "Песчано-гравийная смесь",
      icon: Factory,
      description:
        "Собственный карьер с современным оборудованием обеспечивает постоянное наличие качественного сырья для всех направлений.",
      features: [
        "Собственный карьер в Уральской области",
        "Контроль качества на каждом этапе",
        "Объём добычи до 500 000 м³/год",
        "Доставка собственным автопарком",
      ],
      specs: [
        { label: "Фракция", value: "5-20 мм, 20-40 мм" },
        { label: "Морозостойкость", value: "F200" },
        { label: "Прочность", value: "М800" },
        { label: "Радиоактивность", value: "1 класс" },
      ],
      image: "https://images.unsplash.com/photo-1759494373228-f2b9f5d0dc2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFycnklMjBtaW5pbmclMjBzaXRlfGVufDF8fHx8MTc2MTE1MzA1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "gbi",
      title: "Производство ЖБИ",
      subtitle: "Железобетонные изделия",
      icon: Package,
      description:
        "Современный завод полного цикла производит широкий спектр железобетонных изделий для жилищного и промышленного строительства.",
      features: [
        "Производственная площадь 8 000 м²",
        "Автоматизированные линии",
        "Сертификация ISO 9001",
        "Изделия по ГОСТ и индивидуальным проектам",
      ],
      specs: [
        { label: "Производительность", value: "До 50 000 м³/год" },
        { label: "Класс бетона", value: "B15 - B40" },
        { label: "Ассортимент", value: "200+ наименований" },
        { label: "Срок изготовления", value: "От 3 дней" },
      ],
      image: "https://images.unsplash.com/photo-1594723298992-e335146152cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMHByb2R1Y3Rpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc2MTE1MzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "baukraft",
      title: "Сухие смеси Baukraft",
      subtitle: "Строительные смеси",
      icon: Truck,
      description:
        "Собственное производство качественных сухих строительных смесей под брендом Baukraft для профессионального и частного строительства.",
      features: [
        "Полный ассортимент строительных смесей",
        "Контроль качества на всех этапах",
        "Упаковка от 5 кг до 1 тонны",
        "Доступные цены производителя",
      ],
      specs: [
        { label: "Ассортимент", value: "25+ видов смесей" },
        { label: "Производство", value: "До 10 000 тонн/год" },
        { label: "Качество", value: "ГОСТ 31357-2007" },
        { label: "Доставка", value: "По всему Казахстану" },
      ],
      image: "https://images.unsplash.com/photo-1759310347407-b0dbfeb8745d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzYxMTUzMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const products = {
    gbi: [
      "Фундаментные блоки (ФБС)",
      "Плиты перекрытия",
      "Лестничные марши и площадки",
      "Дорожные плиты",
      "Бордюрный камень",
      "Тротуарная плитка",
      "Колодезные кольца",
      "Сваи забивные",
    ],
    baukraft: [
      "Цементно-песчаная смесь",
      "Штукатурка гипсовая и цементная",
      "Шпаклёвка финишная и стартовая",
      "Клей для плитки",
      "Самовыравнивающиеся полы",
      "Кладочный раствор",
      "Монтажная смесь",
      "Фасадная штукатурка",
    ],
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZEQjkxMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <span className="text-accent text-sm font-medium tracking-wide">Производство</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Собственные производства —
              <br />
              гарантия качества
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light max-w-3xl">
              Три современных производственных площадки обеспечивают полный цикл строительства:
              от добычи сырья до готовых строительных материалов.
            </p>
          </div>
        </div>
      </section>

      {/* Productions Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-32">
            {productions.map((production, index) => {
              const Icon = production.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={production.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/10 rounded-full mb-6">
                      <Icon className="h-5 w-5 text-accent" />
                      <span className="text-accent text-sm font-medium">{production.subtitle}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                      {production.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {production.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {production.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-secondary/50 rounded-2xl p-6">
                      <h4 className="font-semibold text-primary mb-4">Технические характеристики</h4>
                      <div className="space-y-3">
                        {production.specs.map((spec, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{spec.label}</span>
                            <span className="text-sm font-medium text-primary">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={production.image}
                        alt={production.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Ассортимент</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
              Наша продукция
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор строительных материалов и изделий для любых задач
            </p>
          </div>

          <Tabs defaultValue="gbi" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-secondary/50 p-1 rounded-full">
              <TabsTrigger value="gbi" className="rounded-full">ЖБИ изделия</TabsTrigger>
              <TabsTrigger value="baukraft" className="rounded-full">Смеси Baukraft</TabsTrigger>
            </TabsList>

            <TabsContent value="gbi">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.gbi.map((product, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-medium text-primary">{product}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="baukraft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.baukraft.map((product, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-accent" />
                      </div>
                      <span className="font-medium text-primary">{product}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Нужны строительные материалы?
            </h2>
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Свяжитесь с нами для консультации и расчёта стоимости. Предоставляем прайс-листы и
              техническую документацию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl transition-all duration-200 rounded-full px-8"
                onClick={onOpenContactModal}
              >
                Запросить прайс
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm rounded-full px-8"
                onClick={onOpenContactModal}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}