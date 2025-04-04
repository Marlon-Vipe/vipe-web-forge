
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-vipe-deep-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-6">Vipe Web</h3>
            <p className="text-gray-300 mb-6">
              We create cutting-edge digital solutions that help businesses stand out in the digital landscape. From stunning websites to effective marketing strategies, we've got you covered.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">SEO</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Vipe Web. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <button 
              onClick={scrollToTop} 
              className="h-10 w-10 bg-vipe-purple/20 rounded-full flex items-center justify-center hover:bg-vipe-purple transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
