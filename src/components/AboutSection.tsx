
import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Vipe Web</h2>
            <div className="w-24 h-1 bg-vipe-purple mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Vipe Web is a full-service digital agency helping businesses establish a powerful online presence. With our team of expert designers, developers, and marketers, we deliver cutting-edge digital solutions that drive results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded on the principles of creativity, technical excellence, and client satisfaction, we've helped businesses of all sizes achieve their digital goals and stand out in an increasingly competitive landscape.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Experienced Team', 'Custom Solutions', 'Results-Driven', 'Client-Focused', 'Innovative Approach', 'Ongoing Support'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-6 w-6 bg-vipe-light-purple/30 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-vipe-purple" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center rounded-lg shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-vipe-purple rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-vipe-light-purple rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
