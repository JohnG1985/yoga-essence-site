import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { AboutKarine } from '@/components/home/AboutKarine';
import { Philosophy } from '@/components/home/Philosophy';
import { Classes } from '@/components/home/Classes';
import { Contact } from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <AboutKarine />
        <Philosophy />
        <Classes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
