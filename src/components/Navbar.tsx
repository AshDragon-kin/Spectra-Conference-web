import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);

    // Check for user session
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
  };

  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between py-4 px-6 bg-background border-b border-border w-full">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link to="/" className="font-bold text-xl text-foreground">
          SPECTRA Assistive Technologies
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="sm:hidden ml-4"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0 w-full sm:w-auto">
        <Link to="/" className="text-foreground hover:text-foreground/80">
          Home
        </Link>
        <Link to="/speakers" className="text-foreground hover:text-foreground/80">
          Speakers
        </Link>
        <Link to="/schedule" className="text-foreground hover:text-foreground/80">
          Schedule
        </Link>
        <Link to="/about" className="text-foreground hover:text-foreground/80">
          About
        </Link>
        <Link to="/contact" className="text-foreground hover:text-foreground/80">
          Contact
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hidden sm:flex"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {user.isAdmin && (
                <Link to="/admin">
                  <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              <div className="flex items-center space-x-2">
                <span className="text-foreground">Welcome, {user.name}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-foreground hover:text-foreground/80">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          <Link to="/donate">
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-full px-6">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
