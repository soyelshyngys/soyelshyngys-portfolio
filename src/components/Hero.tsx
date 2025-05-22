
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === 'en' ? (
              <>Hi, I'm <motion.span 
                className="text-primary animate-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >SHYNGYS BAIZHAN</motion.span></>
            ) : (
              <>Привет, я <motion.span 
                className="text-primary animate-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >ШЫҢҒЫС БАЙЖАН</motion.span></>
            )}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {language === 'en' ? (
              'Senior ELCE Student @ NU | Full-Stack SaaS Enthusiast | I am a fourth-year electrical and computer engineering student at Nazarbayev University, passionate about exploring the realms of coding, machine learning, and building robust applications.'
            ) : (
              'Студент ELCE @ НУ | Full-Stack SaaS Энтузиаст | Я студент четвертого курса электротехники и компьютерной инженерии в Назарбаев Университете, увлеченный исследованием области кодирования, машинного обучения и созданием надежных приложений.'
            )}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="rounded-full bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] font-bold text-lg px-6 py-2 transition-all duration-300" 
                asChild
              >
                <a href="#projects">
                  {language === 'en' ? 'VIEW MY WORK' : 'ПОСМОТРЕТЬ РАБОТЫ'} <ArrowRight className="ml-2 h-4 w-4 animate-bounce" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="rounded-full font-bold text-lg px-6 py-2 hover:underline transition-all duration-300" 
                asChild
              >
                <a href="#contact">{language === 'en' ? 'CONTACT ME' : 'СВЯЗАТЬСЯ СО МНОЙ'}</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="h-full w-full rounded-full overflow-hidden">
              <img 
                src="/uploads/e20eabcc-51ef-43d2-ab23-4529ebfff405.png"
                alt="Shyngys Baizhan" 
                className="object-cover w-full h-full object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
