
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F9FB]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/">
          <Button className="bg-blue-500 hover:bg-blue-600">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
