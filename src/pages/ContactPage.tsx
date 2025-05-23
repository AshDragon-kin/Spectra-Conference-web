
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-[#F6F9FB]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-center text-gray-600 mb-8">
            Have questions about the conference? Reach out to us and we'll get back to you as soon as possible.
          </p>
          
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
