
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send the form data to a server
    // For now, we'll just show a success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-vipe-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Get in touch with our team to see how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vipe-purple"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vipe-purple"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vipe-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vipe-purple"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="bg-vipe-purple hover:bg-vipe-mid-purple text-white w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-vipe-light-purple/30 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-vipe-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <p className="text-gray-600 mt-1">info@vipeweb.com</p>
                    <p className="text-gray-600">support@vipeweb.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-vipe-light-purple/30 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-vipe-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-vipe-light-purple/30 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-vipe-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Visit Us</h4>
                    <p className="text-gray-600 mt-1">123 Tech Avenue</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                    <a 
                      key={social} 
                      href={`#${social}`} 
                      className="h-10 w-10 bg-vipe-light-purple/30 rounded-full flex items-center justify-center hover:bg-vipe-purple hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">{social.charAt(0).toUpperCase() + social.slice(1)}</span>
                      {/* We'd add icons here */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
