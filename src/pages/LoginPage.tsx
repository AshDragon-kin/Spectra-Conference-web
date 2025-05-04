
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-foreground">Log In</h1>
          <p className="text-center text-foreground/70 mb-8 max-w-xl mx-auto">
            Access your SPECTRA Conference account to manage your registration, customize your schedule, 
            and connect with other attendees interested in assistive technology.
          </p>
          
          <LoginForm />
          
          <div className="mt-8 text-center">
            <p className="text-foreground/70">
              Are you a person with a disability needing registration assistance?{" "}
              <a href="/contact" className="text-blue-500 hover:underline">Contact our accessibility team</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
