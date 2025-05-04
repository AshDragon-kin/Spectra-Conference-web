import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About SPECTRA</h1>
      <div className="grid gap-8">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              SPECTRA is dedicated to advancing assistive technology and making it accessible to everyone.
              We believe in creating a world where technology empowers people of all abilities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Develop innovative assistive technology solutions</li>
              <li>Provide training and workshops</li>
              <li>Advocate for accessibility in technology</li>
              <li>Support research in assistive technology</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <p className="text-lg">
              Through our initiatives, we've helped thousands of people access technology
              that enhances their daily lives and promotes independence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 