import { motion } from 'framer-motion';
import { Sun, Moon, Heart, Leaf } from 'lucide-react';

const classes = [
  {
    title: "Yoga Doux",
    description: "Une pratique lente et restauratrice pour apaiser le système nerveux et relâcher les tensions profondes.",
    icon: Leaf,
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Hatha Flow",
    description: "Un enchaînement fluide de postures pour renforcer le corps tout en cultivant la présence du souffle.",
    icon: Sun,
    color: "bg-orange-100 text-orange-700"
  },
  {
    title: "Méditation Guidée",
    description: "Des moments de silence et d'introspection pour clarté mentale et connexion émotionnelle.",
    icon: Moon,
    color: "bg-indigo-100 text-indigo-700"
  },
  {
    title: "Accompagnement Privé",
    description: "Des séances sur mesure adaptées à vos besoins spécifiques et à votre rythme de vie.",
    icon: Heart,
    color: "bg-rose-100 text-rose-700"
  }
];

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Nos Pratiques</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des séances conçues pour tous les niveaux, favorisant l'écoute de soi et l'harmonie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border/50 group"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${cls.color} group-hover:scale-110 transition-transform duration-300`}>
                <cls.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{cls.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cls.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
