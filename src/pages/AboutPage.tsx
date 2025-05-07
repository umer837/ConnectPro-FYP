
import { User, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Team members data
const teamMembers = [
  {
    name: "Ahmad Khan",
    role: "Founder & CEO",
    bio: "Ahmad founded ConnectPro with a vision to make service booking easier in Peshawar.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "Fatima Ali",
    role: "Operations Manager",
    bio: "Fatima oversees all operations and ensures service quality standards are met.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    name: "Usman Shah",
    role: "Technology Lead",
    bio: "Usman leads our tech team and is responsible for platform development.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    name: "Sarah Khan",
    role: "Customer Relations",
    bio: "Sarah ensures our customers and service providers have a seamless experience.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  }
];

// Core values data
const coreValues = [
  {
    icon: <Shield className="h-8 w-8 text-connectpro-primary" />,
    title: "Trust",
    description: "We build trust through verified service providers and transparent communication."
  },
  {
    icon: <Award className="h-8 w-8 text-connectpro-primary" />,
    title: "Quality",
    description: "We are committed to connecting customers with high-quality service providers."
  },
  {
    icon: <User className="h-8 w-8 text-connectpro-primary" />,
    title: "Community",
    description: "We support our local Peshawar community by promoting local businesses."
  },
  {
    icon: <Clock className="h-8 w-8 text-connectpro-primary" />,
    title: "Reliability",
    description: "We ensure timely responses and reliable service delivery."
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-connectpro-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About ConnectPro</h1>
          <p className="text-lg max-w-2xl mx-auto text-connectpro-light">
            Learn about our mission to connect service providers with customers in Peshawar
            and how we're making a difference in the local community.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ConnectPro was founded in 2023 with a simple mission: to bridge the gap between 
                  quality service providers and customers in Peshawar.
                </p>
                <p>
                  We noticed that despite having many talented photographers, event planners, 
                  videographers, and caterers in the city, there was no easy way for customers to 
                  find and connect with them. Service providers also struggled to reach potential 
                  customers beyond their immediate network.
                </p>
                <p>
                  That's why we created ConnectPro - a platform that makes it simple for customers 
                  to discover, evaluate, and book services while giving local businesses a digital 
                  presence to showcase their offerings.
                </p>
                <p>
                  Today, we're proud to be Peshawar's leading service marketplace, helping thousands 
                  of customers find the perfect service providers for their needs while supporting 
                  local businesses in growing their customer base.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-800">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Peshawar city"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at ConnectPro, from platform development to customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center card-hover">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team works tirelessly to connect customers with the best service providers in Peshawar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-60 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-connectpro-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-connectpro-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-connectpro-light">Service Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <div className="text-connectpro-light">Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-connectpro-light">Bookings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-connectpro-light">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Join ConnectPro?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking for services or offering them, ConnectPro is the perfect platform to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup?type=customer">
              <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
                Sign Up as Customer
              </Button>
            </Link>
            <Link to="/signup?type=provider">
              <Button variant="outline" className="border-connectpro-primary text-connectpro-primary hover:bg-connectpro-light">
                Join as Provider
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
