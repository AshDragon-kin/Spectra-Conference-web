import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import assistiveHeroBg from "@/assets/assistive-hero-bg.jpg";

export default function Home() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[80vh] text-center overflow-hidden bg-background text-text"
      style={{
        backgroundImage: `url(${assistiveHeroBg})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "80vh",
      }}
    >
      {/* Overlay for content */}
      <div
        className="absolute inset-0 z-0 bg-white/70 dark:bg-black/70"
      />
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4 text-primary dark:text-white">Welcome to SPECTRA</h1>
        <p className="text-xl mb-8 max-w-2xl text-heading dark:text-gray-200">
          Empowering lives through assistive technology and inclusive innovation.
        </p>
        <div className="flex gap-4">
          <Link to="/about">
            <Button className="bg-primary text-white hover:bg-[#002244] dark:bg-primary dark:text-white">Learn More</Button>
          </Link>
          <Link to="/donate">
            <Button className="bg-secondary text-[#333333] border border-[#333333] hover:bg-[#fff9b2] dark:bg-secondary dark:text-[#222]">Support Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 