
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">About Spectra Assistive Technologies</h1>
          
          <div className="grid gap-8 mb-16">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
                <p className="text-foreground/80 mb-4">
                  Spectra Assistive Technologies Private Limited is dedicated to developing cutting-edge technologies 
                  that improve the quality of life for people with disabilities. We believe that technology should be 
                  accessible to everyone, and we strive to create products that bridge the gap between ability and disability.
                </p>
                <p className="text-foreground/80">
                  Founded in 2018, our team of engineers, designers, and accessibility experts work together to create 
                  innovative solutions that address real-world challenges faced by individuals with various disabilities.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Products</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">VisualAssist™</h3>
                    <p className="text-foreground/80">
                      AI-powered glasses that use computer vision to assist visually impaired individuals 
                      with navigation, object recognition, and text reading.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">AudioGuide™</h3>
                    <p className="text-foreground/80">
                      Advanced hearing assistance devices that filter background noise and enhance 
                      speech clarity in various environments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">MobilityPlus™</h3>
                    <p className="text-foreground/80">
                      Smart wheelchair technology with terrain adaptation, obstacle avoidance, 
                      and intuitive control systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">CommunicateEase™</h3>
                    <p className="text-foreground/80">
                      Augmentative and alternative communication devices that help non-verbal 
                      individuals express themselves effectively.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Conference Purpose</h2>
                <p className="text-foreground/80 mb-4">
                  The SPECTRA Conference 2025 brings together leaders, innovators, users, and advocates in the assistive 
                  technology space. Our goal is to showcase the latest advancements, share knowledge, and foster 
                  collaboration that will lead to better solutions for people with disabilities.
                </p>
                <p className="text-foreground/80">
                  Through workshops, presentations, and networking opportunities, we aim to create a community 
                  of practice that continues to push the boundaries of what's possible in assistive technology.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Values</h2>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li><span className="font-medium text-foreground">Accessibility First:</span> We believe that accessibility is a right, not a privilege.</li>
                  <li><span className="font-medium text-foreground">User-Centered Design:</span> We involve people with disabilities in our design process from start to finish.</li>
                  <li><span className="font-medium text-foreground">Innovation:</span> We constantly explore new technologies and approaches to solve complex challenges.</li>
                  <li><span className="font-medium text-foreground">Inclusion:</span> We strive to create products that work for people with a wide range of abilities.</li>
                  <li><span className="font-medium text-foreground">Quality:</span> We are committed to creating reliable, durable products that users can depend on.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
