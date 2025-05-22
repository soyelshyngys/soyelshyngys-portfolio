
import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Toggle } from "@/components/ui/toggle";
import { motion, AnimatePresence } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === "en";

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "ru" : "en");
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-6 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Toggle
          pressed={!isEnglish}
          onPressedChange={toggleLanguage}
          className="h-12 w-12 rounded-full bg-[#FAF6E6] backdrop-blur-sm hover:bg-[#f0ebd5] text-black shadow-lg border border-border/10"
          aria-label="Toggle language"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={language}
              initial={{ y: 10, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 360 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <Globe className="h-6 w-6" />
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">{isEnglish ? "Switch to Russian" : "Switch to English"}</span>
        </Toggle>
      </motion.div>
    </motion.div>
  );
}

export default LanguageToggle;
