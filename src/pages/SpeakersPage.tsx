import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    topic: "AI-Powered Assistive Technologies",
    description: "Leading researcher in artificial intelligence applications for assistive devices."
  },
  {
    name: "James Wilson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    topic: "Accessibility in Web Development",
    description: "Web accessibility expert and advocate for inclusive design."
  },
  {
    name: "Dr. Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    topic: "Neurotechnology for Rehabilitation",
    description: "Specialist in brain-computer interfaces for physical rehabilitation."
  },
  {
    name: "Alex Thompson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    topic: "Mobile Accessibility Solutions",
    description: "Mobile app developer focused on creating accessible applications."
  }
];

const SpeakersPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 text-foreground">Conference Speakers</h1>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Meet our distinguished speakers who are leading the way in assistive technology innovation
            and accessibility advocacy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{speaker.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground/90 mb-2">{speaker.topic}</p>
                  <p className="text-sm text-foreground/70">{speaker.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpeakersPage; 