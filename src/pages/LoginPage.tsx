
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-[#F6F9FB]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Log In</h1>
          <p className="text-center text-gray-600 mb-8">
            Access your SPECTRA Conference account to manage your registration.
          </p>
          
          <LoginForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
