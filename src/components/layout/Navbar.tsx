import { useState, useEffect, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À Propos', href: '#about' },
    { name: 'Philosophie', href: '#philosophy' },
    { name: 'Cours', href: '#classes' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (event: MouseEvent<HTMLElement>, id: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);

    const performScroll = () => scrollToSection(id);

    if (isMobileMenuOpen) {
      requestAnimationFrame(() => {
        requestAnimationFrame(performScroll);
      });
    } else {
      performScroll();
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-serif font-bold text-primary tracking-wide"
        >
          Entre Soi et Moi
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Réserver
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border absolute w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-primary font-medium text-lg block py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-primary text-primary-foreground w-full py-3 rounded-md font-medium mt-4"
              >
                Réserver une séance
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
