
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const Navbar = () => {
  const { language } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl font-heading font-bold uppercase tracking-tight flex items-center gap-2 bg-[#FAF6E6] text-black px-2 py-1 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/uploads/2788b22b-2874-4f55-b637-4ce73f53591e.png"
            alt="Logo"
            className="h-6 w-6 object-contain" 
          />
          <span>SoyelShyngys</span>
        </motion.a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["about", "projects", "experience", "skills"].map((section, index) => (
              <motion.li 
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a 
                  href={`#${section}`} 
                  className="uppercase font-bold tracking-tight hover:text-primary/80 transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {language === 'en' ? 
                    section.charAt(0).toUpperCase() + section.slice(1) : 
                    section === 'about' ? 'О мне' :
                    section === 'projects' ? 'Проекты' :
                    section === 'experience' ? 'Опыт' : 'Навыки'}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact">
            <Button 
              className="rounded-full font-bold uppercase tracking-tight bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] transition-colors"
            >
              {language === 'en' ? 'Contact Me' : 'Связаться'}
            </Button>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
