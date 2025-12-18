import { motion } from 'framer-motion';
import heroImage from '@assets/generated_images/woman_practicing_yoga_in_a_sunlit_room_with_plants.png';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Yoga Serenity" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-medium tracking-widest uppercase mb-4 block"
          >
            Yoga & Bien-être
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Entre Soi <br/>
            <span className="text-primary italic">et Moi</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-lg"
          >
            Reconnectez votre quotidien à votre essence profonde. Un espace de respiration guidé par Karine McIntyre.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#classes" 
              className="px-8 py-4 bg-primary text-white rounded-full font-medium text-center shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1"
            >
              Découvrir les cours
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white text-foreground border border-input rounded-full font-medium text-center hover:bg-secondary/20 transition-all"
            >
              En savoir plus
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
