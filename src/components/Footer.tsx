
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

const Footer = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);
  
  const applyTheme = (newTheme: "light" | "dark") => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };
  
  return (
    <footer className="bg-card py-4 border-t border-border transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/80">© 2025 SPECTRA Conference. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-2 mt-3 md:mt-0">
            <Sun className={`h-4 w-4 ${theme === 'light' ? 'text-yellow-500' : 'text-foreground/50'}`} />
            <Switch 
              checked={theme === "dark"} 
              onCheckedChange={toggleTheme} 
              aria-label="Toggle theme"
            />
            <Moon className={`h-4 w-4 ${theme === 'dark' ? 'text-blue-400' : 'text-foreground/50'}`} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
