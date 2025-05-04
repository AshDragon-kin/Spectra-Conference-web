
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
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
