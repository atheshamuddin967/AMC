import 
 { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(infoRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from(formRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_4yjwtwp',
        'template_4gch29t',
        formData,
        'YXqZiEvWxxodN9_ZH'
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        () => {
          setStatus('❌ Failed to send. Please try again later.');
        }
      );
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-slate-900 text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Let's build something amazing together</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={infoRef}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <span>Jarir Road Malaz Riyadh KSA</span>
              </div>
                <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span>+966 511070317</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span>+966 541844200 (WhatsApp Only)</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <span>info@sscsa.co</span>
              </div>
            </div>
          </div>

          <div ref={formRef}>
            <div className="space-y-4">
             <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-slate-800 border-slate-700 text-white"
                required
                maxLength={50}
              />
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-slate-800 border-slate-700 text-white"
                required
                maxLength={100}

              />
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-slate-800 border-slate-700 text-white"
                required
                maxLength={100}
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="bg-slate-800 border-slate-700 text-white"
                required
                maxLength={500}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Send Message
              </Button>
              {status && <p className="text-center text-sm mt-2">{status}</p>}
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};