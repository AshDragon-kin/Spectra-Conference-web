
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-[#FFF5E0] w-full">
      <Link to="/" className="font-bold text-xl text-gray-800">
        SPECTRA Conference 2025
      </Link>
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-800 hover:text-gray-600">
          Home
        </Link>
        <Link to="/speakers" className="text-gray-800 hover:text-gray-600">
          Speakers
        </Link>
        <Link to="/schedule" className="text-gray-800 hover:text-gray-600">
          Schedule
        </Link>
        <Link to="/sponsors" className="text-gray-800 hover:text-gray-600">
          Sponsors
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-gray-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-800 hover:text-gray-600">
          Contact
        </Link>
        <Link to="/donate">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
            Donate
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
