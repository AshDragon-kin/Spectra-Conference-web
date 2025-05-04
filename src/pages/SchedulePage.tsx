
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SchedulePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Conference Schedule</h1>
          <p className="text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
            Join us for three days of inspiring talks, interactive workshops, and networking opportunities
            focused on advancing assistive technologies for people with disabilities.
          </p>
          
          <Tabs defaultValue="day1" className="w-full mb-16">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1: Innovation</TabsTrigger>
              <TabsTrigger value="day2">Day 2: Implementation</TabsTrigger>
              <TabsTrigger value="day3">Day 3: Impact</TabsTrigger>
            </TabsList>
            
            <TabsContent value="day1">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Day 1: Innovation in Assistive Technology</h2>
                <p className="text-foreground/80 mb-6">June 15, 2025</p>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Opening Keynote: The Future of Accessibility</h3>
                      <Badge>9:00 AM - 10:00 AM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Dr. Maya Rodriguez, Director of Research, Spectra Assistive Technologies</p>
                    <p className="text-foreground/70">
                      An exploration of emerging technologies that are revolutionizing accessibility, 
                      including AI, brain-computer interfaces, and smart materials.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Panel: Breaking Barriers in Visual Assistance</h3>
                      <Badge>10:30 AM - 12:00 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Moderated by James Chen, Lead Engineer, VisualAssist™</p>
                    <p className="text-foreground/70">
                      A discussion with users and developers of visual assistance technologies about current 
                      challenges and innovative solutions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Workshop: Designing for Neurodiversity</h3>
                      <Badge>1:30 PM - 3:30 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Sarah Patel, UX Specialist & Aiden Wong, Cognitive Accessibility Researcher</p>
                    <p className="text-foreground/70">
                      An interactive session on creating interfaces and experiences that work for people with 
                      ADHD, autism, dyslexia, and other cognitive differences.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Presentation: AI in Speech Recognition for AAC</h3>
                      <Badge>4:00 PM - 5:00 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Dr. Robert Kim, Lead AI Researcher, CommunicateEase™</p>
                    <p className="text-foreground/70">
                      How machine learning is improving augmentative and alternative communication devices 
                      to better understand diverse speech patterns.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="day2">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Day 2: Implementation Strategies</h2>
                <p className="text-foreground/80 mb-6">June 16, 2025</p>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Keynote: Making Assistive Tech Mainstream</h3>
                      <Badge>9:00 AM - 10:00 AM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Elena Carter, CEO, AccessForAll Foundation</p>
                    <p className="text-foreground/70">
                      Strategies for increasing adoption of assistive technologies through better design, 
                      lower costs, and integration with everyday products.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Workshop: Testing with Disabled Users</h3>
                      <Badge>10:30 AM - 12:30 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Marcus Johnson, Accessibility Consultant & User Researcher</p>
                    <p className="text-foreground/70">
                      A hands-on session about inclusive testing methodologies and recruiting diverse user groups.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Panel: From Prototype to Product</h3>
                      <Badge>2:00 PM - 3:30 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">With founders and product managers from successful assistive tech startups</p>
                    <p className="text-foreground/70">
                      Insights on bringing assistive technology innovations from the lab to market, including 
                      funding strategies, regulatory considerations, and scaling production.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="day3">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Day 3: Creating Lasting Impact</h2>
                <p className="text-foreground/80 mb-6">June 17, 2025</p>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Keynote: The Economic Case for Inclusive Design</h3>
                      <Badge>9:00 AM - 10:00 AM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Prof. David Nguyen, Economist & Accessibility Advocate</p>
                    <p className="text-foreground/70">
                      Research-backed insights on how designing for disability creates better products for everyone 
                      and expands market opportunities.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Workshop: Creating Community Support Networks</h3>
                      <Badge>10:30 AM - 12:00 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Lucia Fernandez, Community Engagement Specialist</p>
                    <p className="text-foreground/70">
                      Strategies for building peer support and knowledge-sharing communities around assistive technologies.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Panel: Policy and Advocacy</h3>
                      <Badge>1:30 PM - 3:00 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">With disability rights advocates and policy experts</p>
                    <p className="text-foreground/70">
                      Discussion on how policy can drive innovation and adoption of assistive technologies, 
                      and how technologists can engage in effective advocacy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-medium text-foreground">Closing Keynote: The Next Decade of Assistive Technology</h3>
                      <Badge>4:00 PM - 5:00 PM</Badge>
                    </div>
                    <p className="text-foreground/80 mb-2">Dr. Samuel Lee, CTO, Spectra Assistive Technologies</p>
                    <p className="text-foreground/70">
                      A forward-looking vision of how emerging technologies will transform accessibility 
                      in the coming decade, with a call to action for the community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchedulePage;
