import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Images } from "@/assets/images";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<any>("home");

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
        { name: "PROJects", href: "#projects" },  
    { name: "PROCESS", href: "#process" },
    { name: "CONTACT", href: "#contact" },
  ];

  // Detect scroll and highlight only defined sections
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.querySelector(link.href));
      let current = null;

      sections.forEach((section:any) => {
        if (section) {
          const sectionTop = section.offsetTop - 130;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            current = section.id;
          }
        }
      });

      // If not inside any tracked section, deactivate all
      setActiveSection(current || null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// Smooth scroll
const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href) as HTMLElement | null;
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  }
};


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <img
              src={Images.logo}
              alt="AMC Logo"
              style={{ height: "70px", width: "auto" }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative px-3 py-2 rounded-md font-semibold tracking-wide uppercase transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-primary text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-white after:rounded-full"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`font-semibold uppercase tracking-wide px-3 py-2 rounded-md transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "bg-primary text-white"
                      : "text-white hover:text-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
