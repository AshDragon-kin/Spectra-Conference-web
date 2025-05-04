
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const DonationForm = () => {
  const [amount, setAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState("");
  const { toast } = useToast();

  const predefinedAmounts = [20, 50, 100, 250, 500];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount(value.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value && !isNaN(Number(value))) {
      setAmount(Number(value));
    }
  };

  const handleDonate = () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically process the donation
    console.log("Processing donation of:", amount);
    toast({
      title: "Thank you!",
      description: `Your donation of ₹${amount} has been processed.`,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-medium mb-4">Select Amount</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {predefinedAmounts.map((predefinedAmount) => (
          <button
            key={predefinedAmount}
            className={`px-4 py-2 rounded-full border ${
              amount === predefinedAmount
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-800 border-gray-300 hover:border-blue-400"
            }`}
            onClick={() => handleAmountSelect(predefinedAmount)}
          >
            ₹{predefinedAmount}
          </button>
        ))}
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Custom Amount:</label>
        <div className="flex">
          <div className="bg-gray-200 flex items-center justify-center px-3 rounded-l">
            ₹
          </div>
          <Input
            type="number"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="rounded-l-none"
          />
        </div>
      </div>
      
      <Button
        onClick={handleDonate}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
      >
        Donate ₹{amount}
      </Button>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3">Your Impact</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Support diversity in tech through scholarships
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Enable world-class speaker to share their knowledge
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Help create networking opportunities
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Contribute to educational resources
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DonationForm;
