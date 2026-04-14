import { Mail, Linkedin, Award, Users, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function TeamPage() {
  const team = [
    {
      name: "Нурлан Каримов",
      position: "Генеральный директор",
      description:
        "Более 20 лет опыта в строительной отрасли. Руководит развитием компании с момента основания.",
      image: "https://images.unsplash.com/photo-1679508057079-f1bf069350ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTE1MzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "info@oral-polimer.kz",
    },
    {
      name: "Айгуль Жумабаева",
      position: "Директор по строительству",
      description:
        "Инженер-строитель с опытом работы более 15 лет. Отвечает за реализацию жилых комплексов.",
      image: "https://images.unsplash.com/photo-1541888915364-aaeed51d238b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjExMjI2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "info@oral-polimer.kz",
    },
    {
      name: "Данияр Оспанов",
      position: "Директор по производству",
      description:
        "Управляет всеми производственными площадками компании. Специалист по оптимизации процессов.",
      image: "https://images.unsplash.com/photo-1679508057079-f1bf069350ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTE1MzA1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "info@oral-polimer.kz",
    },
  ];

  const departments = [
    {
      icon: Users,
      name: "Отдел продаж",
      description: "Консультации по покупке квартир, подбор вариантов, помощь с ипотекой",
      count: "12 специалистов",
    },
    {
      icon: Briefcase,
      name: "Проектный отдел",
      description: "Архитекторы и инженеры, разрабатывающие современные жилые комплексы",
      count: "18 специалистов",
    },
    {
      icon: Award,
      name: "Отдел качества",
      description: "Контроль качества материалов и соблюдения технологий строительства",
      count: "8 специалистов",
    },
    {
      icon: GraduationCap,
      name: "Производство",
      description: "Квалифицированные рабочие на карьере, заводе ЖБИ и производстве смесей",
      count: "200+ сотрудников",
    },
  ];

  const values = [
    "Профессионализм и компетентность",
    "Ответственность перед клиентами",
    "Постоянное развитие и обучение",
    "Командная работа",
    "Инновационный подход",
    "Честность и прозрачность",
  ];

  const benefits = [
    "Конкурентная заработная плата",
    "Официальное трудоустройство",
    "Медицинское страхование",
    "Корпоративное обучение",
    "Возможность карьерного роста",
    "Стабильная и развивающаяся компания",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZEQjkxMyIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm rounded-full mb-8 border border-accent/30">
              <span className="text-accent text-sm font-medium tracking-wide">Команда</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Профессионалы, создающие качество
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              Более 500 опытных специалистов работают для того, чтобы каждый проект Орал Полимер
              отвечал самым высоким стандартам.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Руководство</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Наша команда лидеров
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((person, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-bold text-white mb-1">{person.name}</h3>
                    <p className="text-sm text-accent">{person.position}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {person.description}
                  </p>
                  <a
                    href={`mailto:${person.email}`}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {person.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
              <span className="text-accent text-sm font-medium">Структура</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Наши отдеы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-primary">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {dept.description}
                        </p>
                        <span className="text-xs font-medium text-accent">{dept.count}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                <span className="text-accent text-sm font-medium">Ценности</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Что объединяет нашу команду
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Мы верим в профессионализм, честность и постоянное развитие. Каждый член команды
                разделяет наши ценности и работает для общего успеха.
              </p>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888915364-aaeed51d238b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjExMjI2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Команда"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-6">
                <span className="text-accent text-sm font-medium">Карьера</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
                Присоединяйтесь к нашей команде
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы всегда ищем талантливых профессионалов, готовых развиваться вместе с нами
              </p>
            </div>

            <Card className="border-0 shadow-xl mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-primary mb-6">Что мы предлагаем</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Отправить резюме
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                info@oral-polimer.kz
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}