
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Digital Presence with <span className="text-vipe-light-purple">Vipe Web</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8">
            We build stunning websites, boost your social media presence, optimize your SEO, and develop custom software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-vipe-purple hover:bg-vipe-mid-purple text-white text-lg px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
