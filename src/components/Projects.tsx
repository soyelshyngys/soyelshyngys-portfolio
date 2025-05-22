
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform for Temporun.kz",
    titleRu: "E-Commerce Платформа для Temporun.kz",
    description: "An online shop for running shoes with comprehensive product catalog, secure payment processing, and user account management features.",
    descriptionRu: "Интернет-магазин беговой обуви с полным каталогом товаров, безопасной обработкой платежей и функциями управления учетными записями пользователей.",
    image: "/uploads/IMG_1574.JPG",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/soyelshyngys",
    demo: "https://temporun.kz"
  },
  {
    id: 2,
    title: "Studex Marketplace",
    titleRu: "Маркетплейс Studex",
    description: "Kazakhstan's first student-exclusive marketplace for selling second-hand items, featuring user authentication, item listings, and messaging.",
    descriptionRu: "Первый в Казахстане маркетплейс для студентов для продажи товаров, с системой аутентификации пользователей, листингами товаров и обменом сообщениями.",
    image: "/uploads/studex-logo02.png",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com/soyelshyngys",
    demo: "https://studex.kz"
  },
  {
    id: 3,
    title: "Task Management App",
    titleRu: "Приложение для Управления Задачами",
    description: "A mobile productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    descriptionRu: "Мобильное приложение для продуктивности, управления задачами, проектами и совместной работы в команде с обновлениями в реальном времени.",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com/soyelshyngys",
    demo: "https://github.com/soyelshyngys"
  },
  {
    id: 4,
    title: "Portfolio Website",
    titleRu: "Сайт-Портфолио",
    description: "A responsive portfolio website built with modern web technologies and animations showcasing my projects and skills.",
    descriptionRu: "Адаптивный сайт-портфолио, созданный с использованием современных веб-технологий и анимаций, демонстрирующий мои проекты и навыки.",
    image: "/uploads/Шынгыс 21.0579850.jpg",
    tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/soyelshyngys/soyelshyngys-portfolio",
    demo: "https://shyngys.dev"
  }
];

const Projects = () => {
  const { language } = useLanguage();
  
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            {language === 'en' ? 'My Projects' : 'Мои Проекты'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Here are some of my recent projects. Each project reflects my approach to problem-solving and attention to detail.'
              : 'Вот некоторые из моих недавних проектов. Каждый проект отражает мой подход к решению проблем и внимание к деталям.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden bg-secondary">
                <img src={project.image} alt={language === 'en' ? project.title : project.titleRu} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="font-bold tracking-tight">
                  {language === 'en' ? project.title : project.titleRu}
                </CardTitle>
                <CardDescription>
                  {language === 'en' ? project.description : project.descriptionRu}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="font-medium">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild className="rounded-full font-bold uppercase tracking-tight">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> {language === 'en' ? 'Code' : 'Код'}
                  </a>
                </Button>
                <Button size="sm" asChild className="rounded-full font-bold uppercase tracking-tight">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {language === 'en' ? 'Demo' : 'Демо'}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild className="rounded-full font-bold uppercase tracking-tight">
            <a href="https://github.com/soyelshyngys" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> 
              {language === 'en' 
                ? 'View More on GitHub' 
                : 'Посмотреть больше на GitHub'}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
