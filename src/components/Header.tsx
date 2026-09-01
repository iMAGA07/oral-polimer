import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Frame1 from "../imports/Frame1";
import { Button } from "./ui/button";
import { phones, generalPhone } from "../utils/contacts";

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function Header({ currentSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Главная" },
    { id: "about", label: "О компании" },
    { id: "residential", label: "Жилые комплексы" },
    { id: "production", label: "Производство" },
    { id: "equipment", label: "Спецтехника" },
    { id: "team", label: "Команда" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentSection !== "home"
          ? "bg-white/95 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled || currentSection !== "home" ? "h-16" : "h-20"
        }`}>
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-14 h-11">
              <Frame1 isWhite={currentSection === "home" && !scrolled} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative group py-2 ${
                  currentSection === item.id
                    ? "text-accent"
                    : scrolled || currentSection !== "home"
                    ? "text-muted-foreground hover:text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                  <span
                    className={`absolute bottom-0 left-0 h-full transition-all duration-500 ease-out ${
                      currentSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    } bg-accent/80 blur-[0.5px]`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] transition-all duration-500 ease-out ${
                      currentSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                    } bg-accent/40 blur-sm`}
                  />
                </span>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Телефоны по направлениям: общий номер виден сразу, остальные — в списке */}
            <div className="relative group">
              <div
                className={`flex items-center gap-1.5 text-sm font-medium transition-all cursor-pointer ${
                  scrolled || currentSection !== "home" ? "text-primary" : "text-white"
                } group-hover:text-accent`}
              >
                <a href={generalPhone.href} className="whitespace-nowrap">
                  {generalPhone.display}
                </a>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </div>

              <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible transition-all duration-200">
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-border/60 p-2">
                  {phones.map((phone) => (
                    <a
                      key={phone.id}
                      href={phone.href}
                      className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors duration-200"
                    >
                      <span className="block text-[11px] uppercase tracking-wide text-muted-foreground mb-0.5">
                        {phone.label}
                      </span>
                      <span className="block text-primary font-semibold">{phone.display}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{phone.hint}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <Button
              size="sm"
              onClick={() => (window.location.href = generalPhone.href)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl hover:scale-105 transition-all duration-200 rounded-full px-6"
            >
              <Phone className="mr-2 h-4 w-4" />
              Звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled || currentSection !== "home" ? "text-primary" : "text-white"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 transition-all duration-200 rounded-lg ${
                    currentSection === item.id
                      ? "text-primary bg-accent/10 font-medium"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 mt-2 border-t border-border">
                <div className="space-y-3 mb-4">
                  {phones.map((phone) => (
                    <a key={phone.id} href={phone.href} className="block">
                      <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">
                        {phone.label}
                      </span>
                      <span className="block text-primary font-medium">{phone.display}</span>
                    </a>
                  ))}
                </div>
                <Button
                  onClick={() => (window.location.href = generalPhone.href)}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Позвонить
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}