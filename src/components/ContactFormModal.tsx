import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Load Bitrix24 form script when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement('script');
    script.setAttribute('data-b24-form', 'inline/9/5fdjvz');
    script.setAttribute('data-skip-moving', 'true');
    script.text = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.kz/b28425816/crm/form/loader_9.js');`;
    
    if (formContainerRef.current) {
      formContainerRef.current.appendChild(script);
    }

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden pointer-events-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#183B4E] to-[#2a5366] px-6 py-5 flex items-center justify-between sticky top-0 z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    Свяжитесь с нами
                  </h2>
                  <p className="text-white/80 text-sm">
                    Заполните форму и мы свяжемся с вами в течение 15 минут
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Закрыть"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form Container */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                <div 
                  ref={formContainerRef}
                  className="bitrix-form-container [&_iframe]:w-full [&_iframe]:min-h-[400px]"
                />
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent" />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}