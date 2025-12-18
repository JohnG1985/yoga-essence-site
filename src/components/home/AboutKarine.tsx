import { motion } from 'framer-motion';

const karinePortrait = '/attached_assets/generated_images/Karine.jpg';
const abstractShape = '/attached_assets/generated_images/abstract_soft_watercolor_organic_shapes.png';

export function AboutKarine() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src={abstractShape} alt="" className="w-full h-full object-cover object-left" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto">
              <img
                src={karinePortrait}
                alt="Karine McIntyre"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 border-2 border-primary/30 rounded-2xl -z-0 hidden md:block" />
          </motion.div>

          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-primary font-medium uppercase tracking-widest mb-2">Votre guide</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
                Bonjour, je suis <span className="text-primary">Karine McIntyre</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Bienvenue dans l'univers d'Entre Soi et Moi. Mon parcours m'a appris que le yoga n'est pas seulement une pratique physique, mais un véritable art de vivre qui nous permet de tisser des liens profonds entre notre corps, notre esprit et notre quotidien.
                </p>
                <p>
                  Avec douceur et bienveillance, je vous accompagne pour retrouver cet espace de calme intérieur, souvent oublié dans le tumulte de nos journées.
                </p>
                <p>
                  Mon approche est simple : connecter le « jour après jour » à ce qui nous anime vraiment. Chaque séance est une invitation à revenir à soi, sans jugement, simplement pour être.
                </p>
              </div>

              <div className="mt-10">
                <img src={abstractShape} className="h-24 opacity-80 mix-blend-multiply" alt="Signature visual" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
