
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Vipe Web</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-vipe-purple transition-colors duration-300">Services</a>
            <a href="#about" className="text-gray-700 hover:text-vipe-purple transition-colors duration-300">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-vipe-purple transition-colors duration-300">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-vipe-purple transition-colors duration-300">Contact</a>
            <Button className="bg-vipe-purple hover:bg-vipe-mid-purple text-white">Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-vipe-purple py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-vipe-purple py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-700 hover:text-vipe-purple py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-vipe-purple py-2 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-vipe-purple hover:bg-vipe-mid-purple text-white w-full mt-2">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
