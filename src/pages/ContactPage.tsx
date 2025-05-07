
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Send, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you! Your message has been submitted.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div className="bg-connectpro-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto text-connectpro-light">
            Have questions or feedback? We'd love to hear from you. Reach out to our team using the contact information below.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h2 className="text-2xl font-semibold mb-6 text-connectpro-primary">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-connectpro-light flex items-center justify-center text-connectpro-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@connectpro.com</p>
                    <p className="mt-1 text-gray-600">support@connectpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-connectpro-light flex items-center justify-center text-connectpro-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+92 91 123 4567</p>
                    <p className="mt-1 text-gray-600">+92 300 1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-connectpro-light flex items-center justify-center text-connectpro-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Address</h3>
                    <p className="mt-1 text-gray-600">
                      Office #5, 2nd Floor<br />
                      Deans Trade Center<br />
                      Saddar Road, Peshawar
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-connectpro-light flex items-center justify-center text-connectpro-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    placeholder="Type your message here..."
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90 flex items-center justify-center"
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Location</h2>
            <div className="h-96 bg-gray-200 rounded-lg">
              {/* Here you would integrate Google Maps or OpenStreetMap */}
              <div className="h-full flex items-center justify-center bg-gray-200 text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-medium">Map Location</p>
                  <p>Deans Trade Center, Saddar Road, Peshawar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
