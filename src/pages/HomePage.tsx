
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Camera, Calendar, Video, Utensils } from "lucide-react";

const serviceTypes = [
  { 
    title: "Photography",
    icon: <Camera className="h-8 w-8 text-connectpro-primary" />,
    description: "Professional photographers for all your events and sessions."
  },
  { 
    title: "Event Planning",
    icon: <Calendar className="h-8 w-8 text-connectpro-primary" />,
    description: "Expert event planners to make your occasions memorable."
  },
  { 
    title: "Videography",
    icon: <Video className="h-8 w-8 text-connectpro-primary" />,
    description: "Capture your moments with our skilled videographers."
  },
  { 
    title: "Catering",
    icon: <Utensils className="h-8 w-8 text-connectpro-primary" />,
    description: "Delicious food services for all types of gatherings."
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Customer",
    content: "ConnectPro made finding a photographer for our wedding so easy! Highly recommend their platform."
  },
  {
    name: "Fatima Ali",
    role: "Event Planner",
    content: "As a service provider, ConnectPro has helped me reach more clients in Peshawar. The platform is user-friendly and professional."
  },
  {
    name: "Tariq Shah",
    role: "Customer",
    content: "Quick responses and quality service providers. Will definitely use ConnectPro again for future events."
  }
];

// Featured locations
const locations = [
  "Saddar Road, Peshawar",
  "University Road, Peshawar",
  "Hayatabad, Peshawar",
  "Tehkal, Peshawar",
  "Gulbahar, Peshawar",
  "Warsak Road, Peshawar"
];

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect with Top Service Providers in Peshawar</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Find photographers, event planners, videographers, and caterers for your next event with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup?type=customer">
                  <Button size="lg" className="bg-white text-connectpro-primary hover:bg-gray-100">
                    Find Services
                  </Button>
                </Link>
                <Link to="/signup?type=provider">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Join as Provider
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-connectpro-primary text-xl font-semibold mb-4">Quick Search</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-1">Service Type</label>
                    <select 
                      id="service" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="photography">Photography</option>
                      <option value="event-planning">Event Planning</option>
                      <option value="videography">Videography</option>
                      <option value="catering">Catering</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-700 mb-1">Area in Peshawar</label>
                    <select 
                      id="location" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    >
                      <option value="">Select an area</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <Button className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90">
                    <Search className="mr-2 h-4 w-4" /> Search Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with a wide range of professional service providers in Peshawar to make your events and projects successful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTypes.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-md text-center card-hover"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to={`/services/${service.title.toLowerCase()}`}>
                  <Button variant="outline" className="w-full hover:text-connectpro-primary hover:border-connectpro-primary">
                    View Providers
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How ConnectPro Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple steps to connect with the perfect service provider for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-connectpro-light flex items-center justify-center mx-auto mb-6">
                <span className="text-connectpro-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Search Services</h3>
              <p className="text-gray-600">
                Browse through our extensive list of verified service providers in Peshawar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-connectpro-light flex items-center justify-center mx-auto mb-6">
                <span className="text-connectpro-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Contact Provider</h3>
              <p className="text-gray-600">
                Reach out directly to service providers that match your requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-connectpro-light flex items-center justify-center mx-auto mb-6">
                <span className="text-connectpro-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Book & Enjoy</h3>
              <p className="text-gray-600">
                Confirm your booking and enjoy professional services for your event.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from customers and service providers who have used ConnectPro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-connectpro-primary text-white flex items-center justify-center">
                    <span className="font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="py-16 bg-connectpro-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ConnectPro today - whether you're looking for services or offering them in Peshawar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup?type=customer">
              <Button size="lg" className="bg-white text-connectpro-primary hover:bg-gray-100">
                Sign Up as Customer
              </Button>
            </Link>
            <Link to="/signup?type=provider">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
                Join as Service Provider
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
