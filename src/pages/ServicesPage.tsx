
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Calendar, Video, Utensils, Search, MapPin, Star, MessageSquare, User } from "lucide-react";

// Sample data for service providers
const serviceProviders = [
  {
    id: 1,
    name: "Asad Khan Photography",
    type: "photography",
    rating: 4.8,
    reviews: 32,
    area: "Saddar Road",
    address: "Deans Trade Center, Shop #12, Saddar Road, Peshawar",
    description: "Professional photographer specializing in weddings and corporate events.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 2,
    name: "Events By Fatima",
    type: "event-planning",
    rating: 4.9,
    reviews: 45,
    area: "University Road",
    address: "Fawad Plaza, University Road, Opp. Gul Haji Plaza",
    description: "Full-service event planning and decoration services for all occasions.",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 3,
    name: "Peshawar Film Studios",
    type: "videography",
    rating: 4.6,
    reviews: 28,
    area: "Saddar Baza",
    address: "Shop #5, Deans Plaza, Sadar Baza Peshawar",
    description: "Expert videography team for weddings, documentaries and corporate videos.",
    image: "https://images.unsplash.com/photo-1539723848320-b3c7ae53681c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 4,
    name: "Taste of Peshawar",
    type: "catering",
    rating: 4.7,
    reviews: 39,
    area: "University Road",
    address: "Near University of Peshawar, University Road",
    description: "Authentic Peshawari food catering for all types of events.",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 5,
    name: "Shah Photography",
    type: "photography",
    rating: 4.5,
    reviews: 24,
    area: "Hayatabad",
    address: "Phase 3, Hayatabad, Peshawar",
    description: "Capturing life's special moments with a creative touch.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 6,
    name: "Grand Event Managers",
    type: "event-planning",
    rating: 4.8,
    reviews: 36,
    area: "Tehkal",
    address: "Main Tehkal Road, Peshawar",
    description: "Complete event management services from planning to execution.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
];

// Service type icons mapping
const serviceTypeIcons: Record<string, JSX.Element> = {
  photography: <Camera className="h-5 w-5" />,
  'event-planning': <Calendar className="h-5 w-5" />,
  videography: <Video className="h-5 w-5" />,
  catering: <Utensils className="h-5 w-5" />,
};

const ServicesPage = () => {
  const [filters, setFilters] = useState({
    serviceType: '',
    area: '',
    search: '',
  });

  const areas = ['Saddar Road', 'University Road', 'Hayatabad', 'Tehkal', 'Gulbahar', 'Saddar Baza'];
  const serviceTypes = ['Photography', 'Event Planning', 'Videography', 'Catering'];

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter providers based on selected filters
  const filteredProviders = serviceProviders.filter((provider) => {
    const matchesServiceType = filters.serviceType ? provider.type === filters.serviceType.toLowerCase().replace(' ', '-') : true;
    const matchesArea = filters.area ? provider.area === filters.area : true;
    const matchesSearch = filters.search
      ? provider.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        provider.description.toLowerCase().includes(filters.search.toLowerCase())
      : true;
    return matchesServiceType && matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-connectpro-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Find Service Providers in Peshawar</h1>
          <p className="text-lg max-w-2xl mx-auto text-connectpro-light">
            Browse our curated list of top service providers in Peshawar. 
            Filter by type, area, and more to find the perfect match for your needs.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={filters.serviceType}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
              >
                <option value="">All Services</option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                Area
              </label>
              <select
                id="area"
                name="area"
                value={filters.area}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
              >
                <option value="">All Areas</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  name="search"
                  type="text"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Search by name or description"
                  className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {filteredProviders.length} Service Providers {filters.serviceType && `in ${filters.serviceType}`} {filters.area && `at ${filters.area}`}
          </h2>
          <p className="text-gray-600">Find and connect with the best service providers in Peshawar</p>
        </div>

        {/* Service Provider Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <div key={provider.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-connectpro-light text-connectpro-primary px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    {serviceTypeIcons[provider.type]}
                    <span className="ml-1 capitalize">{provider.type.replace('-', ' ')}</span>
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium ml-1">{provider.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
                
                <div className="flex items-start mb-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <span className="ml-2 text-gray-600 text-sm">{provider.address}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{provider.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{provider.reviews} reviews</span>
                  </div>
                  <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Service Providers Found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any service providers matching your filters. Try adjusting your search criteria.
            </p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-connectpro-light rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-connectpro-primary mb-4">Are you a service provider in Peshawar?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our platform to connect with potential customers and grow your business. Register now as a service provider.
          </p>
          <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
            <User className="mr-2 h-4 w-4" /> Register as Provider
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
