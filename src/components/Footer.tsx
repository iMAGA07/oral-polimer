import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { phones } from "../utils/contacts";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Вертикально интегрированная строительная компания полного цикла в г. Уральск
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/oralpolimer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Компания</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#residential"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Жилые комплексы
                </a>
              </li>
              <li>
                <a
                  href="#production"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Производство
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Команда
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#residential"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Продажа квартир
                </a>
              </li>
              <li>
                <a
                  href="#production"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Строительные материалы
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Аренда спецтехники
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  Стать партнёром
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts & Newsletter */}
          <div>
            <h4 className="font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/70">
                  г. Уральск, Тюленина 47/1
                </span>
              </li>
              {phones.map((phone) => (
                <li key={phone.id} className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-primary-foreground/50">
                      {phone.label}
                    </span>
                    <a
                      href={phone.href}
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                    >
                      {phone.display}
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@oral-polimer.kz"
                  className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  info@oral-polimer.kz
                </a>
              </li>
            </ul>
            
            <div>
              <p className="text-sm mb-3 text-primary-foreground/70">Подписаться на новости</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-white placeholder:text-primary-foreground/50 rounded-full"
                />
                <Button
                  size="icon"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full flex-shrink-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2026 Орал Полимер. Все права защищены.</p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate?.("privacy-policy")}
                className="hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => onNavigate?.("terms-of-use")}
                className="hover:text-accent transition-colors duration-200 cursor-pointer"
              >
                Условия использования
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}