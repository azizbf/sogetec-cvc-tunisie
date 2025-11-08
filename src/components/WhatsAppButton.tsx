import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "21612345678"; // Replace with actual Sogetec WhatsApp number
  const message = encodeURIComponent("Bonjour, je souhaite obtenir plus d'informations sur vos services CVC.");
  const shouldReduceMotion = useReducedMotion();
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={shouldReduceMotion ? { duration: 0.3 } : { 
        duration: 0.5,
        delay: 1.5,
        type: "spring",
        stiffness: 200
      }}
    >
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-20"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.2, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-20"
            animate={{
              scale: [1, 1.8, 1.8],
              opacity: [0.2, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeOut"
            }}
          />
        </>
      )}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={handleClick}
          size="lg"
          className="relative rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 bg-[#25D366] hover:bg-[#20BD5A]"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 10, 0] }}
            transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
