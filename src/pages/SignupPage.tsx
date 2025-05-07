
import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Mail, Lock, Eye, EyeOff, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignupPage = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "customer";
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: userType === "provider" ? "" : undefined,
    serviceType: userType === "provider" ? "" : undefined,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const togglePasswordVisibility = (field: string) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // For demo purposes, simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: `Your ${userType} account has been created successfully.`,
      });
      
      // Redirect to login
      navigate(`/login?type=${userType}`);
    }, 1500);
  };
  
  const serviceTypes = ["Photography", "Event Planning", "Videography", "Catering", "Other"];
  
  const isFormValid = 
    formData.fullName && 
    formData.email && 
    formData.phone && 
    formData.password && 
    formData.confirmPassword && 
    (userType !== "provider" || (formData.address && formData.serviceType));
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {userType === "provider" ? "Service Provider Registration" : "Customer Registration"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {userType === "provider" 
            ? "Create your service provider account" 
            : "Join ConnectPro as a customer"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-6 space-x-6">
            <Link
              to="/signup?type=customer"
              className={`px-4 py-2 rounded-md ${
                userType === "customer" 
                  ? "bg-connectpro-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Customer
            </Link>
            <Link
              to="/signup?type=provider"
              className={`px-4 py-2 rounded-md ${
                userType === "provider" 
                  ? "bg-connectpro-primary text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Service Provider
            </Link>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {userType === "provider" && (
              <>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  >
                    <option value="">Select your service type</option>
                    {serviceTypes.map((type) => (
                      <option key={type} value={type.toLowerCase()}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Business Address (Peshawar)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                      placeholder="Enter your business address in Peshawar"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  placeholder="Create a password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('password')}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  placeholder="Confirm your password"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility('confirm')}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-connectpro-primary focus:ring-connectpro-primary border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the{" "}
                <a href="#" className="text-connectpro-primary hover:text-connectpro-primary/90">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div>
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90 flex items-center justify-center"
              >
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to={`/login?type=${userType}`}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-connectpro-primary"
              >
                Login instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
