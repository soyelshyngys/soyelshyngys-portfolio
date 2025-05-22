
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toggle } from '@/components/ui/toggle';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }
  
  const isLight = theme === 'light';
  
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Toggle
          pressed={theme === 'dark'}
          onPressedChange={() => setTheme(isLight ? 'dark' : 'light')}
          className="h-12 w-12 rounded-full bg-[#FAF6E6] backdrop-blur-sm hover:bg-[#f0ebd5] text-black shadow-lg border border-border/10"
          aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ y: 10, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: 360 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {isLight ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
          <span className="sr-only">{isLight ? 'Switch to dark mode' : 'Switch to light mode'}</span>
        </Toggle>
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
