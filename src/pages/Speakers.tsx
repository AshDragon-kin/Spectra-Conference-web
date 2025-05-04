import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      title: "Assistive Technology Expert",
      bio: "Leading researcher in accessible technology solutions."
    },
    {
      name: "Michael Chen",
      title: "Accessibility Advocate",
      bio: "Dedicated to making technology accessible for everyone."
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Neuroscience Researcher",
      bio: "Specializing in brain-computer interfaces for accessibility."
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Speakers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((speaker, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{speaker.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{speaker.title}</p>
            </CardHeader>
            <CardContent>
              <p>{speaker.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 