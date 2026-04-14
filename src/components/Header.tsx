import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import Frame1 from "../imports/Frame1";
import { Button } from "./ui/button";

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
            <a
              href="tel:+77055012010"
              className={`text-sm font-medium transition-all hover:text-accent ${
                scrolled || currentSection !== "home" ? "text-primary" : "text-white"
              }`}
            >
              +7 (705) 501-20-10
            </a>
            <Button
              size="sm"
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
                <a
                  href="tel:+77055012010"
                  className="block text-primary font-medium mb-3"
                >
                  +7 (705) 501-20-10
                </a>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Заказать звонок
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}