import { motion } from "motion/react";
import { Check, Home, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#183B4E] via-[#183B4E] to-[#0f2830] relative overflow-hidden py-12 md:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#FDB913]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#FDB913]/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-10rem)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center w-full"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mb-6 md:mb-8 inline-block"
          >
            <div className="relative">
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-[#FDB913]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Success Circle */}
              <div className="w-32 h-32 bg-gradient-to-br from-[#FDB913] to-[#f5a400] rounded-full flex items-center justify-center shadow-2xl shadow-[#FDB913]/50">
                <Check className="w-16 h-16 text-[#183B4E]" strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6"
          >
            Спасибо за заявку!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-white/80 mb-4"
          >
            Ваша заявка успешно отправлена
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-white/20"
          >
            <p className="text-base md:text-lg text-white/90 mb-4">
              Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей и ответов на все ваши вопросы.
            </p>
            
            <div className="flex items-center justify-center gap-3 text-[#FDB913] flex-wrap">
              <Phone className="w-5 h-5" />
              <p className="text-base md:text-lg">
                Обычно мы перезваниваем в течение <span className="font-bold">15 минут</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center items-center mb-8 md:mb-0"
          >
            <Button
              onClick={() => window.location.hash = 'home'}
              className="bg-[#FDB913] hover:bg-[#f5a400] text-[#183B4E] px-8 md:px-12 py-5 md:py-6 text-base md:text-lg group w-full max-w-md"
              size="lg"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform rotate-180" />
              Вернуться на главную
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20"
          >
            <p className="text-white/60 text-sm mb-2">
              Есть срочный вопрос?
            </p>
            <a
              href="tel:+77757077700"
              className="text-[#FDB913] hover:text-[#f5a400] text-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +7 (775) 707-77-00
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FDB913] to-transparent" />
    </div>
  );
}