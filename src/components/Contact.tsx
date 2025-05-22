
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/hooks/useLanguage";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      
      // Add the form fields
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      
      // Add the Web3Forms access key
      formData.append('access_key', '9d416d77-07da-43f8-ba00-291e846f6d3f');
      
      // Add optional fields
      formData.append('from_name', 'Portfolio Contact Form');
      formData.append('replyto', data.email);
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: language === 'en' ? "Message Sent Successfully!" : "Сообщение успешно отправлено!",
          description: language === 'en' 
            ? "Thanks for reaching out. I'll get back to you soon." 
            : "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
          variant: "default"
        });
        
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: language === 'en' ? "Failed to send message" : "Не удалось отправить сообщение",
        description: language === 'en'
          ? "Please try again or contact me directly via email."
          : "Пожалуйста, попробуйте еще раз или свяжитесь со мной напрямую по электронной почте.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form field labels and placeholders
  const formText = {
    name: { label: language === 'en' ? 'Name' : 'Имя', placeholder: language === 'en' ? 'Your Name' : 'Ваше Имя' },
    email: { label: language === 'en' ? 'Email' : 'Email', placeholder: language === 'en' ? 'Your Email' : 'Ваш Email' },
    subject: { label: language === 'en' ? 'Subject' : 'Тема', placeholder: language === 'en' ? 'Subject' : 'Тема сообщения' },
    message: { label: language === 'en' ? 'Message' : 'Сообщение', placeholder: language === 'en' ? 'Your Message' : 'Ваше сообщение' }
  };

  return (
    <section id="contact">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">
            {language === 'en' ? 'Get In Touch' : 'Свяжитесь Со Мной'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Have a project in mind or want to discuss potential opportunities? I\'d love to hear from you.'
              : 'Есть проект или хотите обсудить потенциальные возможности? Буду рад услышать от вас.'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {language === 'en' ? 'Contact Information' : 'Контактная Информация'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Feel free to reach out through the form or via my social media platforms.'
                  : 'Не стесняйтесь обращаться через форму или через мои платформы социальных сетей.'}
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:shyngys.baizhan@nu.edu.kz" 
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="font-medium">shyngys.baizhan@nu.edu.kz</span>
              </a>
              <a 
                href="https://github.com/soyelshyngys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">github.com/soyelshyngys</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/shyngys-baizhan-70a899220/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">linkedin.com/in/shyngys-baizhan-70a899220</span>
              </a>
            </div>
            
            <div className="p-6 bg-secondary/30 rounded-lg border border-border/50">
              <h4 className="font-bold mb-2">
                {language === 'en' ? 'Location' : 'Местоположение'}
              </h4>
              <p>{language === 'en' ? 'Astana, Kazakhstan' : 'Астана, Казахстан'}</p>
              <p className="text-muted-foreground mt-2">
                {language === 'en'
                  ? 'Ready for remote work and open to relocation'
                  : 'Готов к удаленной работе и открыт к релокации'}
              </p>
            </div>
          </div>
          
          <Card className="border border-border/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="tracking-tight">
                {language === 'en' ? 'Send Me a Message' : 'Отправить Мне Сообщение'}
              </CardTitle>
              <CardDescription>
                {language === 'en'
                  ? 'I\'ll get back to you as soon as possible.'
                  : 'Я свяжусь с вами как можно скорее.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formText.name.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={formText.name.placeholder} className="font-medium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formText.email.label}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={formText.email.placeholder} className="font-medium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formText.subject.label}</FormLabel>
                        <FormControl>
                          <Input placeholder={formText.subject.placeholder} className="font-medium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{formText.message.label}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={formText.message.placeholder} className="min-h-[120px] font-medium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-full uppercase font-bold tracking-tight bg-[#FAF6E6] text-black hover:bg-[#f0ebd5] dark:text-black"
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (<>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {language === 'en' ? "Sending..." : "Отправка..."}
                        </>) 
                      : (language === 'en' ? "Send Message" : "Отправить Сообщение")}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
