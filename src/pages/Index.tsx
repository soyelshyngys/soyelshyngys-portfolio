
import React, { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { LanguageProvider } from '@/hooks/useLanguage';
import { AnimatePresence } from 'framer-motion';

const Index = () => {
  // Smooth scroll effect
  useEffect(() => {
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleScrollToAnchor);
    
    return () => {
      document.removeEventListener('click', handleScrollToAnchor);
    };
  }, []);
  
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-background to-background/95">
          <AnimatePresence>
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <Projects />
              <TechStack />
              <Experience />
              <Skills />
              <Contact />
            </main>
            <Footer />
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </AnimatePresence>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
