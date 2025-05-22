
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { motion, Variants } from "framer-motion";
import { ChevronDown, Briefcase, Award, Clock, CalendarDays } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Research Assistant Contract",
    roleRu: "Контракт Научного Ассистента",
    company: "High Frequency Measurement and Characterization Laboratory, Nazarbayev University",
    period: "Sep 2024 - Jan 2025",
    periodRu: "Сен 2024 - Янв 2025",
    description: "Conducted hyperparameter optimization using Bayesian optimization for S-parameter estimation. Implemented SVR modeling for RF device parameters and developed multi-model evaluation systems.",
    descriptionRu: "Выполнял оптимизацию гиперпараметров с использованием метода Байесовской оптимизации для оценки S-параметров. Реализовал SVR моделирование для параметров ВЧ устройств и разработал системы оценки нескольких моделей.",
    skills: ["Python", "Machine Learning", "RF Engineering", "Data Preprocessing"],
    colorClass: "bg-[#FAF6E6] dark:bg-secondary/40"
  },
  {
    id: 2,
    role: "Machine Learning Research Assistant",
    roleRu: "Научный Ассистент по Машинному Обучению",
    company: "DataScience Lab, Nazarbayev University",
    period: "June 2024 - Nov 2024",
    periodRu: "Июнь 2024 - Нояб 2024",
    description: "Conducted deep learning research focused on biomedical image segmentation using advanced models. Developed pipelines for data preprocessing and published findings with a focus on reproducibility.",
    descriptionRu: "Проводил исследования глубокого обучения, ориентированные на сегментацию биомедицинских изображений с использованием продвинутых моделей. Разрабатывал конвейеры для предварительной обработки данных и публиковал результаты с акцентом на воспроизводимость.",
    skills: ["Deep Learning", "Image Segmentation", "Python", "Research"],
    colorClass: "bg-secondary/40 dark:bg-[#2A2A2A]"
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    roleRu: "Стажер по Программной Инженерии",
    company: "Ghalam LLP",
    period: "June 2024 - July 2024",
    periodRu: "Июнь 2024 - Июль 2024",
    description: "Spearheaded the design and development of a satellite subsystem health monitoring solution. Integrated real-time telemetry data with Grafana for interactive dashboards and analytics.",
    descriptionRu: "Возглавил разработку и дизайн решения для мониторинга работоспособности подсистем спутника. Интегрировал данные телеметрии в реальном времени с Grafana для интерактивных дашбордов и аналитики.",
    skills: ["Database Design", "Grafana", "System Integration", "Telemetry"],
    colorClass: "bg-[#FAF6E6] dark:bg-secondary/40"
  },
  {
    id: 4,
    role: "Data Analyst Intern",
    roleRu: "Стажер по Анализу Данных",
    company: "Astana Financial Services Authority",
    period: "Jul 2022 - Aug 2022",
    periodRu: "Июль 2022 - Авг 2022",
    description: "Designed data transformation scripts for 60+ tables, optimizing data processing for Power BI desktop. Created templates that automatically demonstrate financial measurements including Capital and Liquidity Ratios.",
    descriptionRu: "Разработал скрипты преобразования данных для более чем 60 таблиц, оптимизируя обработку данных для Power BI. Создал шаблоны, которые автоматически демонстрируют финансовые показатели, включая показатели капитала и ликвидности.",
    skills: ["Power BI", "Data Analysis", "Financial Analysis", "MS Excel"],
    colorClass: "bg-secondary/40 dark:bg-[#2A2A2A]"
  },
  {
    id: 5,
    role: "Java Backend Development Bootcamp",
    roleRu: "Буткемп по Java Backend Разработке",
    company: "Runtime and Nfactorial Educational Programming Centers",
    period: "Jan 2022 - May 2023",
    periodRu: "Янв 2022 - Май 2023",
    description: "Built and deployed robust RESTful APIs using Spring Boot with authentication mechanisms. Implemented a Java JPA/JPQL Tree Hierarchy Management System and created user-friendly interfaces.",
    descriptionRu: "Создал и развернул надежные RESTful API с использованием Spring Boot с механизмами аутентификации. Реализовал систему управления древовидной иерархией на Java JPA/JPQL и создал удобные интерфейсы.",
    skills: ["Java", "Spring Boot", "RESTful APIs", "Databases", "Microservices"],
    colorClass: "bg-[#FAF6E6] dark:bg-secondary/40"
  },
  {
    id: 6,
    role: "Officer Lieutenant 2-year Military Training Program",
    roleRu: "Двухлетняя программа военной подготовки офицеров-лейтенантов",
    company: "Nazarbayev University and Astana IT University",
    period: "Aug 2022 - July 2024",
    periodRu: "Авг 2022 - Июль 2024",
    description: "Completed a two-year military training program, developing leadership, operational planning, and team coordination skills through rigorous field exercises.",
    descriptionRu: "Завершил двухлетнюю программу военной подготовки, развивая лидерские навыки, навыки оперативного планирования и командной координации через интенсивные полевые учения.",
    skills: ["Leadership", "Strategic Planning", "Team Coordination", "Problem Solving"],
    colorClass: "bg-secondary/40 dark:bg-[#2A2A2A]"
  }
];

const Experience = () => {
  const { language } = useLanguage();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };
  
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const handleItemClick = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };
  
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            {language === 'en' ? 'Work Experience' : 'Опыт Работы'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'My professional journey in software development and research, along with the valuable experience I\'ve gained along the way.'
              : 'Мой профессиональный путь в разработке программного обеспечения и исследованиях, а также ценный опыт, который я получил.'}
          </p>
          <div className="mt-4 bg-primary/5 p-3 rounded-lg max-w-max mx-auto border border-primary/10">
            <p className="text-sm font-medium text-primary dark:text-primary flex items-center gap-2">
              <ChevronDown className="h-4 w-4 animate-bounce" />
              {language === 'en' ? 'Click on cards to see details' : 'Нажмите на карточки для деталей'}
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              variants={item}
              className={`group rounded-lg border border-border/50 transition-all duration-500 hover:border-primary/30 ${exp.colorClass} backdrop-blur-sm overflow-hidden cursor-pointer`}
              onClick={() => handleItemClick(exp.id)}
              whileHover={{ 
                boxShadow: "0 10px 30px -15px rgba(var(--primary), 0.15)",
                y: -5
              }}
            >
              <div className="p-5 flex justify-between items-start gap-4">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl tracking-tight group-hover:text-primary transition-colors duration-300">
                      {language === 'en' ? exp.role : exp.roleRu}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" className="flex items-center gap-1 bg-background/50 backdrop-blur-sm text-foreground">
                    <CalendarDays className="h-3 w-3" />
                    <span className="text-xs">{language === 'en' ? exp.period : exp.periodRu}</span>
                  </Badge>
                  <motion.div 
                    animate={{ 
                      rotate: expandedItem === exp.id ? 180 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </div>
              </div>
                
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedItem === exp.id ? "auto" : 0,
                  opacity: expandedItem === exp.id ? 1 : 0
                }}
                transition={{ 
                  height: { 
                    duration: 0.4, 
                    ease: [0.04, 0.62, 0.23, 0.98] 
                  },
                  opacity: { duration: 0.3 }
                }}
                className="px-5 pb-5 pt-0 border-t border-border/50 overflow-hidden"
              >
                <div className="mt-4">
                  <p className="mb-4 text-foreground">{language === 'en' ? exp.description : exp.descriptionRu}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          delay: idx * 0.05,
                          duration: 0.3,
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="font-medium hover:scale-105 transition-transform"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
