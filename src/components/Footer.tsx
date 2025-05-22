
import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
  const socialIcons = [
    { 
      Icon: Github, 
      href: "https://github.com/soyelshyngys",
      label: "GitHub" 
    },
    { 
      Icon: Linkedin, 
      href: "https://linkedin.com/in/shyngys-baizhan",
      label: "LinkedIn" 
    },
    { 
      Icon: Mail, 
      href: "mailto:shyngys.baizhan@nu.edu.kz",
      label: "Email" 
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <footer className="bg-secondary/30 py-12">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            variants={itemVariants}
          >
            <p className="text-lg font-bold font-heading uppercase tracking-tight">Shyngys Baizhan</p>
            <p className="text-muted-foreground">
              {language === 'en' ? 'Software Engineer' : 'Инженер-программист'}
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            variants={containerVariants}
          >
            {socialIcons.map(({ Icon, href, label }, index) => (
              <motion.a 
                key={index}
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg flex items-center gap-2 bg-[#FAF6E6] text-black border border-border/10 transition-all duration-300 relative group overflow-hidden"
                aria-label={label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5 relative z-10" />
                <span className="font-medium hidden sm:inline relative z-10">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm"
          variants={itemVariants}
        >
          <p>
            © {currentYear} Shyngys Baizhan. 
            {language === 'en' ? ' All rights reserved.' : ' Все права защищены.'}
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
