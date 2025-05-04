
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="bg-background px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card p-12 rounded-md text-center border border-border">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                SPECTRA Assistive Technology Conference 2025
              </h1>
              <p className="text-xl text-foreground/70 mb-8">
                Empowering Lives Through Accessible Technology
              </p>
              <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
                Join us for a groundbreaking conference focused on the latest innovations in assistive technologies
                for people with disabilities. Connect with experts, users, and advocates to shape a more accessible future.
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
        
        {/* Technology Focus Areas */}
        <div className="py-16 px-4 bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Advancing Assistive Technologies
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
              Explore cutting-edge solutions designed to empower people with disabilities 
              and promote greater independence and inclusion.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Mobility Solutions</h3>
                  <p className="text-foreground/70">
                    Advanced wheelchairs, exoskeletons, and navigation systems that enhance physical independence.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Visual Assistance</h3>
                  <p className="text-foreground/70">
                    AI-powered tools and devices that help visually impaired individuals perceive and navigate their environment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Hearing Technology</h3>
                  <p className="text-foreground/70">
                    Next-generation hearing aids, cochlear implants, and communication tools for the deaf and hard of hearing.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Cognitive Support</h3>
                  <p className="text-foreground/70">
                    Tools that assist people with cognitive disabilities, including memory aids, organization systems, and learning technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Keynote Speakers Section */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Keynote Speakers
            </h2>
            <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
              Learn from leaders at the forefront of assistive technology innovation and disability rights advocacy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-muted mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground">Dr. Maya Rodriguez</h3>
                <p className="text-foreground/70">Director of Research, Spectra Assistive Technologies</p>
                <p className="text-foreground/80 mt-2 text-sm px-6">
                  Pioneer in brain-computer interfaces for people with severe motor disabilities
                </p>
              </div>
              <div className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-muted mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground">Prof. David Nguyen</h3>
                <p className="text-foreground/70">Economist & Accessibility Advocate</p>
                <p className="text-foreground/80 mt-2 text-sm px-6">
                  Leading researcher on the economic benefits of inclusive design and accessibility
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/speakers">
                <Button variant="outline" className="border-border">
                  View All Speakers
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="py-16 px-4 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Why Attend SPECTRA 2025?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Learn</h3>
                  <p className="text-foreground/70">
                    Discover the latest research, innovations, and best practices in assistive technology from leading experts.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Connect</h3>
                  <p className="text-foreground/70">
                    Network with researchers, developers, users, and advocates to build valuable relationships.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Contribute</h3>
                  <p className="text-foreground/70">
                    Share your insights and help shape the future of assistive technology through workshops and discussions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
