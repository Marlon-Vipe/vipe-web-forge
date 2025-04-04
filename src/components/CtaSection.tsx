
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-vipe-deep-blue opacity-95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and let's discuss how we can help your business grow online.
          </p>
          <Button className="bg-vipe-purple hover:bg-vipe-mid-purple text-white text-lg px-8 py-6">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
