import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ResidentialPage } from "./components/ResidentialPage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ProductionPage } from "./components/ProductionPage";
import { EquipmentPage } from "./components/EquipmentPage";
import { TeamPage } from "./components/TeamPage";
import { ContactsPage } from "./components/ContactsPage";
import { ThankYouPage } from "./components/ThankYouPage";
import { AdminSubmissions } from "./components/AdminSubmissions";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsOfUsePage } from "./components/TermsOfUsePage";
import { ContactFormModal } from "./components/ContactFormModal";
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "./components/ui/button";
import { generalPhone } from "./utils/contacts";

export default function App() {
  // Initialize from URL query parameter or hash
  const getInitialSection = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    if (pageParam) {
      console.log("Initial page from query:", pageParam);
      return pageParam;
    }
    const hash = window.location.hash.slice(1);
    console.log("Initial hash:", hash);
    return hash || "home";
  };
  
  const [currentSection, setCurrentSection] = useState(getInitialSection);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [showCallButton, setShowCallButton] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Meta Pixel initialization
  useEffect(() => {
    // Check if Facebook Pixel is already initialized
    if ((window as any).fbq && (window as any)._fbq_initialized) {
      console.log('Meta Pixel already initialized, skipping...');
      return;
    }

    // Initialize Facebook Pixel
    (function(f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    
    // Mark as initialized to prevent duplicate initialization
    (window as any)._fbq_initialized = true;
    (window as any).fbq('init', '1873109250755475');
    (window as any).fbq('track', 'PageView');
  }, []);

  // Ensure robots meta tag allows indexing
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'index, follow');
  }, []);

  // Handle URL hash changes for navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      console.log("Hash changed to:", hash);
      setCurrentSection(hash);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowCallButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string, id?: string) => {
    setCurrentSection(section);
    setProjectId(id || null);
    
    // Update URL hash, but clear it for home
    if (section === "home") {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    } else {
      window.location.hash = section;
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentSection) {
      case "home":
        return <HomePage onNavigate={handleNavigate} onOpenContactModal={() => setIsContactModalOpen(true)} />;
      case "about":
        return <AboutPage onOpenContactModal={() => setIsContactModalOpen(true)} />;
      case "residential":
        return <ResidentialPage onNavigate={handleNavigate} onOpenContactModal={() => setIsContactModalOpen(true)} />;
      case "project-detail":
        return projectId ? (
          <ProjectDetailPage projectId={projectId} onNavigate={handleNavigate} onOpenContactModal={() => setIsContactModalOpen(true)} />
        ) : (
          <ResidentialPage onNavigate={handleNavigate} onOpenContactModal={() => setIsContactModalOpen(true)} />
        );
      case "production":
        return <ProductionPage onOpenContactModal={() => setIsContactModalOpen(true)} />;
      case "equipment":
        return <EquipmentPage />;
      case "team":
        return <TeamPage />;
      case "contacts":
        return <ContactsPage />;
      case "thank-you":
        return <ThankYouPage />;
      case "admin-submissions":
        return <AdminSubmissions />;
      case "privacy-policy":
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case "terms-of-use":
        return <TermsOfUsePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenContactModal={() => setIsContactModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {currentSection !== "thank-you" && (
        <Header currentSection={currentSection} onNavigate={handleNavigate} />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>

      {currentSection !== "thank-you" && <Footer onNavigate={handleNavigate} />}

      {/* Floating Action Buttons */}
      <div
        className={`fixed bottom-8 right-8 z-50 flex flex-col gap-3 transition-all duration-300 ${
          showCallButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }`}
      >
        {/* Message Button */}
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-primary text-white hover:bg-primary/90 hover:scale-110 transition-all duration-200"
          onClick={() => setIsContactModalOpen(true)}
          title="Связаться с нами"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
        
        {/* Call Button */}
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 transition-all duration-200"
          onClick={() => window.location.href = generalPhone.href}
          title="Позвонить нам"
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}