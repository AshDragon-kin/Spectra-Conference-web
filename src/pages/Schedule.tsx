import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Schedule() {
  const events = [
    {
      title: "Opening Ceremony",
      time: "9:00 AM - 10:00 AM",
      description: "Welcome address and keynote speech"
    },
    {
      title: "Workshop: Assistive Technology Basics",
      time: "10:30 AM - 12:00 PM",
      description: "Introduction to assistive technology solutions"
    },
    {
      title: "Panel Discussion",
      time: "2:00 PM - 3:30 PM",
      description: "Future of accessibility in technology"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Event Schedule</h1>
      <div className="space-y-4">
        {events.map((event, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{event.time}</p>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 