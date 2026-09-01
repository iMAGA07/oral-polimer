import { Shield, Lock, Eye, FileText, CheckCircle2, ArrowLeft } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";

interface PrivacyPolicyPageProps {
  onNavigate: (section: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#183B4E] to-[#2a5366] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Button
            variant="ghost"
            onClick={() => onNavigate("home")}
            className="mb-8 text-white hover:text-accent hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            На главную
          </Button>
          
          <AnimatedSection className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Политика конфиденциальности
                </h1>
                <p className="text-white/80 text-lg">
                  Дата вступления в силу: 16 февраля 2026 года
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                {/* Введение */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    1. Общие положения
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Настоящая Политика конфиденциальности персональных данных (далее – Политика) действует в отношении всей информации, которую ТОО "Орал Полимер" (БИН: указывается при регистрации), расположенное по адресу: Республика Казахстан, Западно-Казахстанская область, г. Уральск, может получить о Пользователе во время использования сайта oralpolimer.kz.
                    </p>
                    <p>
                      Использование сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями Пользователь должен воздержаться от использования данного сайта.
                    </p>
                  </div>
                </div>

                {/* Собираемая информация */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-accent" />
                    2. Персональная информация, которую мы собираем
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-semibold text-primary">
                      2.1. Личные данные пользователя
                    </p>
                    <p>
                      При заполнении форм на сайте, Пользователь предоставляет следующую персональную информацию:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Фамилия, имя, отчество</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Контактный телефон</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Адрес электронной почты (e-mail)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Информация о компании (для юридических лиц)</span>
                      </li>
                    </ul>
                    
                    <p className="font-semibold text-primary mt-6">
                      2.2. Автоматически собираемая информация
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>IP-адрес</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Информация из cookies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Информация о браузере и операционной системе</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Время доступа и адреса страниц</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Цели сбора */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <Lock className="w-6 h-6 text-accent" />
                    3. Цели обработки персональных данных
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ТОО "Орал Полимер" обрабатывает персональные данные Пользователя в следующих целях:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Связь с Пользователем для консультаций и предоставления информации об услугах</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Подготовка коммерческих предложений и прайс-листов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Заключение договоров на строительство и поставку материалов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Информирование о новых проектах и специальных предложениях</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Улучшение качес��ва обслуживания и функциональности сайта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Проведение статистических и маркетинговых исследований</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Защита данных */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    4. Защита персональных данных
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ТОО "Орал Полимер" принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
                    </p>
                    <p>
                      Компания не передает персональные данные третьим лицам, за исключением случаев, прямо предусмотренных законодательством Республики Казахстан.
                    </p>
                  </div>
                </div>

                {/* Права пользователя */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    5. Права Пользователя
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Пользователь имеет право:</p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Получать информацию, касающуюся обработки его персональных данных</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Требовать уточнения, блокирования или удаления его персональных данных</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Отозвать согласие на обработку персональных данных</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Обжаловать действия или бездействие в уполномоченный орган по защите прав субъектов персональных данных</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Срок хранения */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    6. Срок хранения данных
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Персональные данные Пользователя хранятся в течение срока, необходимого для достижения целей их обработки, но не менее срока, установленного законодательством Республики Казахстан. После завершения обработки персональные данные уничтожаются.
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    7. Использование файлов Cookie
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Сайт использует файлы cookie для улучшения работы сайта и предоставления более персонализированного опыта. Пользователь может настроить свой браузер для отказа от файлов cookie, однако это может повлиять на функциональность сайта.
                    </p>
                  </div>
                </div>

                {/* Изменения */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    8. Изенения в Политике конфиденциальности
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ТОО "Орал Полимер" оставляет за собой право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения на сайте.
                    </p>
                  </div>
                </div>

                {/* Контакты */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border-2 border-primary/10">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    9. Контактная информация
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      По всем вопросам, касающимся обработки персональных данных, Вы можете связаться с нами:
                    </p>
                    <div className="space-y-2">
                      <p className="font-semibold text-primary">ТОО "Орал Полимер"</p>
                      <p>Адрес: Республика Казахстан, Западно-Казахстанская область, г. Уральск</p>
                      <p>Телефон: <a href="tel:+77757077700" className="text-accent hover:underline">+7 (775) 707-77-00</a></p>
                      <p>WhatsApp: <a href="https://wa.me/77055012010" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">+7 (705) 501-20-10</a></p>
                      <p>Instagram: <a href="https://www.instagram.com/oralpolimer/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">@oralpolimer</a></p>
                    </div>
                  </div>
                </div>

                {/* Согласие */}
                <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Важно:</strong> Используя данный сайт и предоставляя свои персональные данные, Вы подтверждаете, что ознакомились с настоящей Политикой конфиденциальности и согласны с условиями обработки Ваших персональных данных в соответствии с законодательством Республики Казахстан (Закон РК "О персональных данных и их защите" от 21 мая 2013 года № 94-V).
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}