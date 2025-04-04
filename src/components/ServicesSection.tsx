
import { 
  Globe, 
  Code, 
  BarChart3, 
  Smartphone, 
  Search, 
  MonitorSmartphone 
} from 'lucide-react';

const services = [
  {
    title: "Website Development",
    description: "Custom, responsive websites tailored to your brand with cutting-edge design and functionality.",
    icon: Globe
  },
  {
    title: "Software Development",
    description: "Custom software solutions that automate processes and solve complex business challenges.",
    icon: Code
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that engage your audience and build brand loyalty.",
    icon: Smartphone
  },
  {
    title: "Search Engine Optimization",
    description: "Data-driven SEO strategies that improve your visibility and drive organic traffic.",
    icon: Search
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive analytics and reporting to track performance and ROI across all channels.",
    icon: BarChart3
  },
  {
    title: "Responsive Design",
    description: "Mobile-first designs that provide seamless user experiences across all devices.",
    icon: MonitorSmartphone
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-vipe-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the online world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-14 w-14 bg-vipe-light-purple/30 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-vipe-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
