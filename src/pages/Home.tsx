import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to SPECTRA</h1>
      <p className="text-xl mb-8 max-w-2xl">
        Empowering lives through assistive technology and inclusive innovation.
      </p>
      <div className="flex gap-4">
        <Link to="/about">
          <Button variant="default" size="lg">
            Learn More
          </Button>
        </Link>
        <Link to="/donate">
          <Button variant="outline" size="lg">
            Support Us
          </Button>
        </Link>
      </div>
    </div>
  );
} 