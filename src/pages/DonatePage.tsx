
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonationForm from "@/components/DonationForm";

const DonatePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 px-4 bg-[#F6F9FB]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4">Support Our Conference</h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Your donation helps us make this conference accessible to more people and bring the best 
            speaker from around the world. Every contribution makes a difference!
          </p>
          
          <DonationForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonatePage;
