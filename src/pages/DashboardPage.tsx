
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  User, Settings, Bell, LogOut, Home, Calendar, FileText, 
  MessageSquare, CreditCard, Star, Plus, Check, X, ArrowRight
} from "lucide-react";

// Sample booking data
const customerBookings = [
  {
    id: 1,
    service: "Wedding Photography",
    provider: "Asad Khan Photography",
    date: "2023-06-15",
    status: "confirmed",
    price: "25,000 PKR"
  },
  {
    id: 2,
    service: "Birthday Event Planning",
    provider: "Events By Fatima",
    date: "2023-07-22",
    status: "pending",
    price: "35,000 PKR"
  },
  {
    id: 3,
    service: "Corporate Video",
    provider: "Peshawar Film Studios",
    date: "2023-05-10",
    status: "completed",
    price: "45,000 PKR"
  }
];

const providerRequests = [
  {
    id: 1,
    service: "Wedding Photography",
    customer: "Ali Ahmad",
    date: "2023-06-20",
    status: "pending",
    message: "Looking for a photographer for my wedding ceremony. Package details please."
  },
  {
    id: 2,
    service: "Event Photography",
    customer: "Samina Khan",
    date: "2023-07-05",
    status: "pending",
    message: "Need photography for a corporate event at Pearl Continental Hotel."
  },
  {
    id: 3,
    service: "Product Photography",
    customer: "Tariq Shah",
    date: "2023-07-12",
    status: "pending",
    message: "Require professional product photography for my online store."
  }
];

const DashboardPage = () => {
  const { userType } = useParams<{ userType: string }>();
  const [activeTab, setActiveTab] = useState("overview");
  const [userName, setUserName] = useState("");
  
  // This would typically come from authentication
  useEffect(() => {
    if (userType === "provider") {
      setUserName("Asad Khan");
    } else {
      setUserName("Ali Ahmad");
    }
  }, [userType]);
  
  const isProvider = userType === "provider";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            {isProvider ? "Service Provider Dashboard" : "Customer Dashboard"}
          </h1>
          <p className="text-gray-600">
            Welcome back, {userName}! Manage your {isProvider ? "services and bookings" : "bookings and requests"}.
          </p>
        </div>
        
        {/* Dashboard Layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-connectpro-primary text-white flex items-center justify-center text-xl font-bold">
                  {userName.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-lg">{userName}</h3>
                  <p className="text-gray-500 text-sm">{isProvider ? "Service Provider" : "Customer"}</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === "overview"
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Home className="h-5 w-5 mr-3" />
                  <span>Overview</span>
                </button>
                
                <button
                  onClick={() => setActiveTab(isProvider ? "requests" : "bookings")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === (isProvider ? "requests" : "bookings")
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>{isProvider ? "Booking Requests" : "My Bookings"}</span>
                </button>
                
                {isProvider && (
                  <button
                    onClick={() => setActiveTab("services")}
                    className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                      activeTab === "services"
                        ? "bg-connectpro-light text-connectpro-primary font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <FileText className="h-5 w-5 mr-3" />
                    <span>My Services</span>
                  </button>
                )}
                
                <button
                  onClick={() => setActiveTab("messages")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === "messages"
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span>Messages</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("payments")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === "payments"
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  <span>Payments</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === "profile"
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  <span>Profile</span>
                </button>
                
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                    activeTab === "settings"
                      ? "bg-connectpro-light text-connectpro-primary font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  <span>Settings</span>
                </button>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link to="/" className="w-full flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  <LogOut className="h-5 w-5 mr-3" />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-connectpro-light p-4 rounded-lg">
                      <div className="text-connectpro-primary text-sm font-medium mb-1">
                        {isProvider ? "Total Bookings" : "Total Services Booked"}
                      </div>
                      <div className="text-2xl font-bold">{isProvider ? "24" : "7"}</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-600 text-sm font-medium mb-1">
                        {isProvider ? "Pending Requests" : "Pending Bookings"}
                      </div>
                      <div className="text-2xl font-bold">{isProvider ? "3" : "1"}</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-green-600 text-sm font-medium mb-1">
                        {isProvider ? "Completed Jobs" : "Completed Bookings"}
                      </div>
                      <div className="text-2xl font-bold">{isProvider ? "21" : "5"}</div>
                    </div>
                  </div>
                  
                  {/* Recent Activity */}
                  <div>
                    <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
                    <div className="space-y-3">
                      {isProvider ? (
                        <>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Bell className="h-5 w-5 text-blue-500 mr-2" />
                                <span>New booking request from Samina Khan</span>
                              </div>
                              <span className="text-sm text-gray-500">Today</span>
                            </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Check className="h-5 w-5 text-green-500 mr-2" />
                                <span>Payment received for Wedding Photography</span>
                              </div>
                              <span className="text-sm text-gray-500">Yesterday</span>
                            </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                                <span>New 5-star review from Ali Ahmad</span>
                              </div>
                              <span className="text-sm text-gray-500">2 days ago</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Check className="h-5 w-5 text-green-500 mr-2" />
                                <span>Booking confirmed by Asad Khan Photography</span>
                              </div>
                              <span className="text-sm text-gray-500">Today</span>
                            </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <MessageSquare className="h-5 w-5 text-blue-500 mr-2" />
                                <span>New message from Events By Fatima</span>
                              </div>
                              <span className="text-sm text-gray-500">Yesterday</span>
                            </div>
                          </div>
                          <div className="p-3 border border-gray-200 rounded-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <CreditCard className="h-5 w-5 text-purple-500 mr-2" />
                                <span>Payment successful for Corporate Video</span>
                              </div>
                              <span className="text-sm text-gray-500">3 days ago</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Recommended Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    {isProvider ? "Tips for Service Providers" : "Recommended Services"}
                  </h2>
                  
                  {isProvider ? (
                    <div className="space-y-4">
                      <div className="p-4 border border-connectpro-light rounded-md bg-connectpro-light bg-opacity-20">
                        <h3 className="font-medium text-connectpro-primary mb-2">Complete Your Profile</h3>
                        <p className="text-gray-700 mb-3">
                          Providers with complete profiles get up to 75% more booking requests. 
                          Add photos, detailed service descriptions, and pricing information.
                        </p>
                        <Button size="sm" variant="outline" className="text-connectpro-primary border-connectpro-primary">
                          Update Profile
                        </Button>
                      </div>
                      
                      <div className="p-4 border border-connectpro-light rounded-md bg-connectpro-light bg-opacity-20">
                        <h3 className="font-medium text-connectpro-primary mb-2">Respond Quickly</h3>
                        <p className="text-gray-700 mb-3">
                          Fast response times lead to higher booking rates. Aim to respond to inquiries 
                          within 2 hours for the best results.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-connectpro-light rounded-md bg-connectpro-light bg-opacity-20">
                        <h3 className="font-medium text-connectpro-primary mb-2">Ask for Reviews</h3>
                        <p className="text-gray-700 mb-3">
                          After completing a service, kindly ask your customers to leave a review. 
                          Positive reviews significantly boost your visibility.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="h-32 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d" 
                            alt="Photography service" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">Shah Photography</h3>
                          <div className="flex items-center text-yellow-500 mb-2">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-gray-600 text-sm ml-1">(24)</span>
                          </div>
                          <Button size="sm" className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="h-32 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622" 
                            alt="Event planning service" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">Grand Event Managers</h3>
                          <div className="flex items-center text-yellow-500 mb-2">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-gray-600 text-sm ml-1">(36)</span>
                          </div>
                          <Button size="sm" className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md overflow-hidden">
                        <div className="h-32 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1555244162-803834f70033" 
                            alt="Catering service" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium mb-1">Taste of Peshawar</h3>
                          <div className="flex items-center text-yellow-500 mb-2">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-gray-600 text-sm ml-1">(39)</span>
                          </div>
                          <Button size="sm" className="w-full bg-connectpro-primary hover:bg-connectpro-primary/90">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Customer Bookings / Provider Requests */}
            {activeTab === (isProvider ? "requests" : "bookings") && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {isProvider ? "Booking Requests" : "My Bookings"}
                </h2>
                
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                  />
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {isProvider ? "Customer" : "Service"}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {isProvider ? "Service" : "Provider"}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {isProvider ? "Message" : "Price"}
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {(isProvider ? providerRequests : customerBookings).map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {isProvider ? item.customer : item.service}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {isProvider ? item.service : item.provider}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{item.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${item.status === 'confirmed' ? 'bg-green-100 text-green-800' : 
                              item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-blue-100 text-blue-800'}`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {isProvider ? (
                                <span className="inline-block max-w-xs truncate" title={item.message}>
                                  {item.message.substring(0, 20)}...
                                </span>
                              ) : (
                                item.price
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {isProvider ? (
                              <div className="flex justify-end space-x-2">
                                <button className="text-green-600 hover:text-green-900">
                                  <Check size={18} />
                                </button>
                                <button className="text-red-600 hover:text-red-900">
                                  <X size={18} />
                                </button>
                                <button className="text-blue-600 hover:text-blue-900">
                                  <MessageSquare size={18} />
                                </button>
                              </div>
                            ) : (
                              <Link to="#" className="text-connectpro-primary hover:text-connectpro-primary/90">
                                View
                              </Link>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {isProvider && (
                  <div className="mt-6 flex justify-end">
                    <Link to="#viewall" className="text-connectpro-primary hover:text-connectpro-primary/90 flex items-center">
                      <span>View All Requests</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Provider Services */}
            {isProvider && activeTab === "services" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">My Services</h2>
                  <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
                    <Plus className="mr-2 h-4 w-4" /> Add New Service
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                        alt="Wedding Photography" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">Wedding Photography</h3>
                      <p className="text-gray-600 mb-4">
                        Complete wedding photography service including pre-wedding shoot, 
                        ceremony coverage, and reception.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">25,000 PKR</span>
                        <div>
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="h-48 bg-gray-200">
                      <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552" 
                        alt="Corporate Photography" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium mb-2">Corporate Photography</h3>
                      <p className="text-gray-600 mb-4">
                        Professional photography services for corporate events, 
                        headshots, and product launches.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">15,000 PKR</span>
                        <div>
                          <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Messages Tab */}
            {activeTab === "messages" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Messages</h2>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <MessageSquare className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">Your messages will appear here.</p>
                  <p className="text-gray-500 text-sm mt-2">No messages yet.</p>
                </div>
              </div>
            )}
            
            {/* Payments Tab */}
            {activeTab === "payments" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Payments</h2>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                  <CreditCard className="h-10 w-10 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">Your payment history will appear here.</p>
                  <p className="text-gray-500 text-sm mt-2">No payment records yet.</p>
                </div>
              </div>
            )}
            
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Profile</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={userName}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      defaultValue={isProvider ? "asadkhan@example.com" : "aliahmad@example.com"}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      defaultValue="+92 300 1234567"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                    />
                  </div>
                  
                  {isProvider && (
                    <>
                      <div>
                        <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          defaultValue="Asad Khan Photography"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Address
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          rows={3}
                          defaultValue="Deans Trade Center, Shop #12, Saddar Road, Peshawar"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-connectpro-primary focus:border-connectpro-primary"
                        />
                      </div>
                    </>
                  )}
                  
                  <div>
                    <Button className="bg-connectpro-primary hover:bg-connectpro-primary/90">
                      Update Profile
                    </Button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Change Password</h4>
                          <p className="text-sm text-gray-500">Update your account password</p>
                        </div>
                        <Button variant="outline" className="hover:text-connectpro-primary hover:border-connectpro-primary">
                          Change
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-500">Manage your email preferences</p>
                        </div>
                        <Button variant="outline" className="hover:text-connectpro-primary hover:border-connectpro-primary">
                          Configure
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                        <div>
                          <h4 className="font-medium">Privacy Settings</h4>
                          <p className="text-sm text-gray-500">Control your data and privacy</p>
                        </div>
                        <Button variant="outline" className="hover:text-connectpro-primary hover:border-connectpro-primary">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {isProvider && (
                    <div>
                      <h3 className="text-lg font-medium mb-4">Service Provider Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                          <div>
                            <h4 className="font-medium">Service Categories</h4>
                            <p className="text-sm text-gray-500">Update your service categories</p>
                          </div>
                          <Button variant="outline" className="hover:text-connectpro-primary hover:border-connectpro-primary">
                            Edit
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-md">
                          <div>
                            <h4 className="font-medium">Availability Calendar</h4>
                            <p className="text-sm text-gray-500">Set your availability for bookings</p>
                          </div>
                          <Button variant="outline" className="hover:text-connectpro-primary hover:border-connectpro-primary">
                            Configure
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
