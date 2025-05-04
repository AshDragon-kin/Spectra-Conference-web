
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="bg-[#F6F9FB] px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 p-12 rounded-md text-center">
              <h1 className="text-5xl font-bold text-gray-800 mb-4">
                Conference 2025
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Innovate, Connect, Celebrate
              </p>
              <Link to="/register">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-md">
                  Register Now
                </Button>
              </Link>
            </div>
            
            {/* Countdown */}
            <CountdownTimer />
            
            <div className="text-center mt-6">
              <Link to="/register">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-md">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Keynote Speakers Section */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Keynote Speakers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* We would typically map through speaker data here */}
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600">CEO, Tech Innovations</p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-gray-300 mb-4"></div>
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600">CTO, Future Labs</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/speakers">
                <Button variant="outline" className="border-gray-300">
                  View All Speakers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
