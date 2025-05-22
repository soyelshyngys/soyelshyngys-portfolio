
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { sendContactMessage } from '@/integrations/supabase/client';
import { useLanguage } from '@/hooks/useLanguage';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email.',
  }),
  subject: z.string().min(3, {
    message: 'Subject must be at least 3 characters.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactMessage(
        data.name,
        data.email,
        data.message,
        data.subject
      );

      if (result.error) {
        throw new Error(result.error.message || 'Failed to send message');
      }

      toast({
        title: language === 'en' ? 'Message sent successfully!' : 'Сообщение успешно отправлено!',
        description: language === 'en' 
          ? "Thank you for contacting me. I'll get back to you soon."
          : "Спасибо за обращение. Я свяжусь с вами в ближайшее время.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: language === 'en' ? 'Something went wrong' : 'Что-то пошло не так',
        description: language === 'en'
          ? 'Please try again later or contact me directly via email.'
          : 'Пожалуйста, попробуйте позже или свяжитесь со мной напрямую по электронной почте.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {language === 'en' ? 'Name' : 'Имя'}
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={language === 'en' ? 'Your name' : 'Ваше имя'} 
                    {...field} 
                    className="bg-[#FAF6E6]/50 dark:bg-secondary/20 backdrop-blur-sm"
                  />
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
                <FormLabel>
                  {language === 'en' ? 'Email' : 'Электронная почта'}
                </FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder={language === 'en' ? 'Your email' : 'Ваша электронная почта'} 
                    {...field} 
                    className="bg-[#FAF6E6]/50 dark:bg-secondary/20 backdrop-blur-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {language === 'en' ? 'Subject' : 'Тема'}
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder={language === 'en' ? 'Subject of your message' : 'Тема вашего сообщения'} 
                  {...field} 
                  className="bg-[#FAF6E6]/50 dark:bg-secondary/20 backdrop-blur-sm"
                />
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
              <FormLabel>
                {language === 'en' ? 'Message' : 'Сообщение'}
              </FormLabel>
              <FormControl>
                <Textarea 
                  placeholder={language === 'en' ? 'Your message...' : 'Ваше сообщение...'} 
                  rows={6} 
                  {...field} 
                  className="resize-none bg-[#FAF6E6]/50 dark:bg-secondary/20 backdrop-blur-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full md:w-auto bg-[#FAF6E6] text-black hover:bg-[#f0ebd5]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {language === 'en' ? 'Sending...' : 'Отправка...'}
            </>
          ) : (
            language === 'en' ? 'Send Message' : 'Отправить сообщение'
          )}
        </Button>
      </form>
    </Form>
  );
}
