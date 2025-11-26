import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Images } from '@/assets/images';

export const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },

  ];

  return (
    <footer className="bg-background2 text-white py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          {/* Logo & Tagline */}
          <div>
            <img
              src={Images.logo}
              alt="Solution Source Logo"
              className="h-24 mx-auto md:mx-0 mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Building the Future, Powering Sustainability.
              We deliver innovative, efficient, and reliable energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin size={18} className="text-primary mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=123+Green+Energy+Street,+Kentucky,+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Jarir Road Malaz Riyadh KSA
                </a>
              </li>

              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+966541844200"
                  className="hover:text-white transition-colors"
                >
                  +966 541844200  </a>
              </li>
        <li className="flex items-center gap-3 justify-center md:justify-start">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+966511070317"
                  className="hover:text-white transition-colors"
                >
                  +966 511070317  </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:info@sscsa.co"
                  className="hover:text-white transition-colors"
                >
                  info@sscsa.co  </a>
              </li>

            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-primary mb-4 text-lg">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 pt-6 text-center text-gray-300 text-sm">
          <p>&copy; 2025 Solution Sourrce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
