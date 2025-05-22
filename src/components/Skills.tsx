
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useLanguage } from "@/hooks/useLanguage";
import { Check } from "lucide-react";

const skillsData = {
  frontend: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Java", "Spring Boot", "GraphQL", "RESTful APIs", "Microservices"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  devops: ["Git", "Docker", "CI/CD", "Kubernetes", "AWS", "Kafka"],
  datascience: ["Python", "NumPy", "Pandas", "scikit-learn", "TensorFlow", "PyTorch", "Power BI"],
  other: ["Agile/Scrum", "Technical Writing", "Research", "Problem Solving", "Leadership", "Team Coordination"]
};

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1
    }
  })
};

const skillVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.2
    }
  }),
  hover: { 
    scale: 1.05, 
    backgroundColor: "#FAF6E6",
    color: "#000000",
    borderColor: "rgba(0,0,0,0.1)",
    transition: { duration: 0.2 }
  }
};

const Skills = () => {
  const { language } = useLanguage();
  
  // Categories translations
  const categories = {
    frontend: { en: "Frontend Development", ru: "Фронтенд Разработка" },
    backend: { en: "Backend Development", ru: "Бэкенд Разработка" },
    databases: { en: "Databases", ru: "Базы Данных" },
    devops: { en: "DevOps & Deployment", ru: "DevOps и Развертывание" },
    datascience: { en: "Data Science & ML", ru: "Наука о Данных и МЛ" },
    other: { en: "Other Skills", ru: "Другие Навыки" }
  };

  const sectionCategories = Object.entries(skillsData).map(([key, value], index) => ({
    key,
    title: language === 'en' ? categories[key as keyof typeof categories].en : categories[key as keyof typeof categories].ru,
    skills: value,
    index
  }));

  return (
    <section id="skills" className="bg-secondary/30 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {language === 'en' ? 'Skills & Technologies' : 'Навыки и Технологии'}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {language === 'en' 
              ? 'The tools, languages, and technologies I use to bring ideas to life.'
              : 'Инструменты, языки и технологии, которые я использую для воплощения идей в жизнь.'}
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionCategories.map((category) => (
            <motion.div
              key={category.key}
              custom={category.index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <SkillCard 
                title={category.title} 
                skills={category.skills} 
                index={category.index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills, index }: { title: string, skills: string[], index: number }) => (
  <Card className="border border-border/50 transition-all duration-300 hover:shadow-md hover:border-primary/30 h-full overflow-hidden hover:translate-y-[-5px]">
    <CardContent className="pt-6">
      <motion.h3 
        className="text-xl font-bold mb-4 tracking-tight uppercase flex items-center"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="inline-block w-6 h-6 rounded-full bg-primary/10 text-primary mr-2 flex items-center justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.2 + index * 0.05 
          }}
          viewport={{ once: true }}
        >
          <Check className="w-4 h-4" />
        </motion.span>
        {title}
      </motion.h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span 
            key={i}
            className="px-3 py-1 bg-background rounded-full text-sm border border-border/50 font-medium uppercase transition-all duration-200"
            custom={i}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
            variants={skillVariants}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default Skills;
