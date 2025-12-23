import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary/10 pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-primary">Entre SoietMoi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Un espace dédié à la connexion intérieure, où le yoga devient un pont entre le quotidien et l'essentiel.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Karine McIntyre</li>
              <li>Rive-Sud de Montréal</li>
              <li><a href="mailto:karinemcintyre@gmail.com" className="hover:text-primary transition-colors">karinemcintyre@gmail.com</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Liens Rapides</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">À Propos</a></li>
              <li><a href="#classes" className="hover:text-primary transition-colors">Nos Cours</a></li>
              <li><a href="#philosophy" className="hover:text-primary transition-colors">Philosophie</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Prendre rendez-vous</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Entre SoietMoi. Tous droits réservés.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/17MnvEpSGL/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visiter la page Facebook"
              className="text-primary/80 hover:text-primary transition-all duration-200 ease-in-out hover:scale-105 hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden
              >
                <path d="M13.5 9.5H16a.5.5 0 0 0 .5-.5V6.5A.5.5 0 0 0 16 6h-2.5c-1.657 0-3 1.343-3 3v1H9a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h1.5V19a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 13.5 19v-5.5H16a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2.5v-1c0-.552.448-1 1-1Z" />
              </svg>
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300"
              aria-label="Retour en haut"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
