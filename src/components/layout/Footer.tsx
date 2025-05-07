
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-connectpro-primary">ConnectPro</h3>
            <p className="text-gray-600 mb-4">
              Connecting service providers with customers in Peshawar for a seamless experience.
            </p>
          </div>
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-connectpro-primary">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-connectpro-primary">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-connectpro-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-connectpro-primary">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-700">For Service Providers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?type=provider" className="text-gray-600 hover:text-connectpro-primary">Join as Provider</Link>
              </li>
              <li>
                <Link to="/login?type=provider" className="text-gray-600 hover:text-connectpro-primary">Provider Login</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-connectpro-primary">How It Works</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-bold mb-4 text-gray-700">For Customers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup?type=customer" className="text-gray-600 hover:text-connectpro-primary">Sign Up</Link>
              </li>
              <li>
                <Link to="/login?type=customer" className="text-gray-600 hover:text-connectpro-primary">Customer Login</Link>
              </li>
              <li>
                <Link to="/book-service" className="text-gray-600 hover:text-connectpro-primary">Book a Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} ConnectPro Web. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-500 text-sm hover:text-connectpro-primary">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-connectpro-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
