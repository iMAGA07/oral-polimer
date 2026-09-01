import { Scale, FileText, AlertTriangle, CheckCircle2, ArrowLeft, Building2, UserCheck } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "./ui/button";

interface TermsOfUsePageProps {
  onNavigate: (section: string) => void;
}

export function TermsOfUsePage({ onNavigate }: TermsOfUsePageProps) {
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
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Условия использования сайта
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
                    1. Общие условия
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Настоящие Условия использования (далее — Условия) регулируют порядок использования сайта oralpolimer.kz (далее — Сайт), принадлежащего ТОО "Орал Полимер" (БИН: указывается при регистрации), расположенному по адресу: Республика Казахстан, Западно-Казахстанская область, г. Уральск.
                    </p>
                    <p>
                      Используя данный Сайт, Вы (далее — Пользователь) подтверждаете, что:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Ознакомились с настоящими Условиями и полностью согласны с ними</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Обладаете полной правоспособностью для принятия настоящих Условий</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Обязуетесь соблюдать все положения настоящих Условий</span>
                      </li>
                    </ul>
                    <p className="font-semibold text-primary">
                      Если Вы не согласны с настоящими Условиями, пожалуйста, прекратите использование Сайта.
                    </p>
                  </div>
                </div>

                {/* О компании */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-accent" />
                    2. Информация о владельце сайта
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="bg-primary/5 rounded-xl p-6">
                      <p className="font-semibold text-primary mb-3">ТОО "Орал Полимер"</p>
                      <div className="space-y-2 text-sm">
                        <p>Организационно-правовая форма: Товарищество с ограниченной ответственностью</p>
                        <p>БИН: (указывается при регистрации)</p>
                        <p>Юридический адрес: Республика Казахстан, Западно-Казахстанская область, г. Уральск</p>
                        <p>Основной вид деятельности: Строительство жилых и нежилых зданий, производство строительных материалов</p>
                        <p>Телефон: <a href="tel:+77757077700" className="text-accent hover:underline">+7 (775) 707-77-00</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Назначение сайта */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    3. Назначение и содержание Сайта
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-semibold text-primary">
                      3.1. Назначение Сайта
                    </p>
                    <p>
                      Сайт предназначен для предоставления информации о деятельности ТОО "Орал Полимер", включая:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Информацию о реализуемых жилых комплексах и строительных проектах</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Сведения о производимой продукции (ПГС, бетон, железобетонные изделия)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Контактные данные для связи и консультаций</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Возможность оставить заявку на консультацию или получение коммерческого предложения</span>
                      </li>
                    </ul>

                    <p className="font-semibold text-primary mt-6">
                      3.2. Характер информации
                    </p>
                    <p>
                      Вся информация на Сайте носит справочно-информационный характер и не является публичной офертой в соответствии со статьей 395 Гражданского кодекса Республики Казахстан. Для получения подробной информации о стоимости, условиях и характеристиках объектов необходимо связаться с представителями компании.
                    </p>
                  </div>
                </div>

                {/* Права и обязанности */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <UserCheck className="w-6 h-6 text-accent" />
                    4. Права и обязанности Пользователя
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-semibold text-primary">
                      4.1. Пользователь имеет право:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Просматривать информацию, размещенную на Сайте</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Отправлять запросы через контактные формы для получения консультаций</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Запрашивать коммерческие предложения и прайс-листы</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Связываться с компанией по указанным контактам</span>
                      </li>
                    </ul>

                    <p className="font-semibold text-primary mt-6">
                      4.2. Пользователь обязуется:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Предоставлять достоверную информацию о себе в контактных формах</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Не использовать Сайт в противоправных целях</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Не предпринимать действий, которые могут нарушить работу Сайта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Соблюдать законодательство Республики Казахстан</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Не копировать, не распространять и не модифицировать контент Сайта без письменного разрешения правообладателя</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Интеллектуальная собственность */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    5. Интеллектуальная собственность
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Все материалы Сайта (включая, но не ограничиваясь: текст, графические изображения, фотографии, дизайн, логотипы, товарные знаки) являются объектами интеллектуальной собственности и охраняются законодательством Республики Казахстан об интеллектуальной собственности.
                    </p>
                    <p>
                      Использование материалов Сайта возможно только с письменного разрешения правообладателя — ТОО "Орал Полимер". Несанкционированное использование материалов может повлечь за собой ответственность в соответствии с законодательством Республики Казахстан.
                    </p>
                  </div>
                </div>

                {/* Ограничение ответственности */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-accent" />
                    6. Ограничение ответственности
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="font-semibold text-primary">
                      6.1. Информация на Сайте
                    </p>
                    <p>
                      ТОО "Орал Полимер" прилагает все усилия для обеспечения точности и актуальности информации, размещенной на Сайте. Однако компания не несет ответственности за:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Возможные неточности, опечатки или устаревшую информацию</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Решения, принятые Пользователем на основе информации с Сайта</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>Временные технические сбои в работе Сайта</span>
                      </li>
                    </ul>

                    <p className="font-semibold text-primary mt-6">
                      6.2. Внешние ссылки
                    </p>
                    <p>
                      Сайт может содержать ссылки на внешние ресурсы (Instagram, WhatsApp, 2GIS и др.). ТОО "Орал Полимер" не несет ответственности за содержание и работу этих ресурсов.
                    </p>

                    <p className="font-semibold text-primary mt-6">
                      6.3. Форс-мажор
                    </p>
                    <p>
                      Компания не несет ответственности за неисполнение обязательств, вызванных обстоятельствами непреодолимой силы (форс-мажор), включая, но не ограничиваясь: стихийные бедствия, военные действия, изменения законодательства, решения государственных органов, технические сбои в сетях передачи данных.
                    </p>
                  </div>
                </div>

                {/* Конфиденциальность */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    7. Конфиденциальность и защита данных
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Порядок обработки персональных данных Пользователей регулируется Политикой конфиденциальности, которая является неотъемлемой частью настоящих Условий. Используя Сайт, Пользователь соглашается с условиями обработки его персональных данных в соответствии с Политикой конфиденциальности и законодательством Республики Казахстан.
                    </p>
                  </div>
                </div>

                {/* Изменения условий */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    8. Изменение Условий ис��ользования
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ТОО "Орал Полимер" оставляет за собой право в любое время изменять или дополнять настоящие Условия без предварительного уведомления Пользователей. Новая редакция Условий вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией.
                    </p>
                    <p>
                      Пользователь обязуется самостоятельно проверять Условия на предмет изменений. Продолжение использования Сайта после внесения изменений означает согласие Пользователя с новой редакцией Условий.
                    </p>
                  </div>
                </div>

                {/* Применимое право */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    9. Применимое право и разрешение споров
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Настоящие Условия регулируются и толкуются в соответствии с законодательством Республики Казахстан.
                    </p>
                    <p>
                      Все споры и разногласия, возникающие в связи с использованием Сайта, подлежат разрешению путем переговоров. В случае невозможности разрешения спора путем переговоров, спор подлежит рассмотрению в судебном порядке по месту нахождения ТОО "Орал Полимер" в соответствии с законодательством Республики Казахстан.
                    </p>
                  </div>
                </div>

                {/* Прочие условия */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    10. Прочие условия
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Если какое-либо из положений настоящих Условий будет признано недействительным или не имеющим юридической силы, это не влечет недействительности остальных положений.
                    </p>
                    <p>
                      Бездействие со стороны ТОО "Орал Полимер" в случае нарушения Пользователем положений Условий не лишает компанию права предпринять соответствующие действия позднее.
                    </p>
                  </div>
                </div>

                {/* Контакты */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border-2 border-primary/10">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    11. Контактная информация
                  </h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      По всем вопросам, касающимся настоящих Условий использования, Вы можете связаться с нами:
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
                    <strong className="text-primary">Важно:</strong> Используя данный Сайт, Вы подтверждаете, что прочитали, поняли и согласны соблюдать настоящие Условия использования. Если Вы не согласны с какими-либо положениями настоящих Условий, пожалуйста, прекратите использование Сайта.
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