import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-snug mb-8">
            « Vivre le quotidien en connexion avec soi, un souffle à la fois. »
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Chez Entre Soi et Moi, nous croyons que le bien-être ne devrait pas être une parenthèse exceptionnelle, mais la trame de fond de votre vie. C'est l'art d'habiter pleinement chaque instant.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
