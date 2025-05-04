
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

const DonationForm = () => {
  const [amount, setAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState("250");
  const [isProcessing, setIsProcessing] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [makeRecurring, setMakeRecurring] = useState(false);
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

  const validateForm = () => {
    if (!amount || amount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return false;
    }

    if (!donorName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name",
        variant: "destructive",
      });
      return false;
    }

    if (!email.trim() || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const processPayment = async () => {
    // In a real application, this would connect to a payment processor API like Stripe
    // Simulate API call with a timeout
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        // Simulate successful payment (would be a real API call in production)
        resolve(true);
      }, 1500);
    });
  };

  const handleDonate = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    try {
      const success = await processPayment();
      
      if (success) {
        toast({
          title: "Thank you!",
          description: `Your ${makeRecurring ? "recurring" : "one-time"} donation of ₹${amount} has been processed.`,
        });
        
        // Reset form
        setDonorName("");
        setEmail("");
        setAmount(250);
        setCustomAmount("250");
        setMakeRecurring(false);
      }
    } catch (error) {
      toast({
        title: "Payment failed",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow-md border border-border">
      <h2 className="text-xl font-medium mb-4 text-foreground">Select Amount</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {predefinedAmounts.map((predefinedAmount) => (
          <button
            key={predefinedAmount}
            className={`px-4 py-2 rounded-full border ${
              amount === predefinedAmount
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-input hover:border-primary/50"
            }`}
            onClick={() => handleAmountSelect(predefinedAmount)}
          >
            ₹{predefinedAmount}
          </button>
        ))}
      </div>
      
      <div className="mb-6">
        <label className="block text-foreground mb-2">Custom Amount:</label>
        <div className="flex">
          <div className="bg-muted flex items-center justify-center px-3 rounded-l border-y border-l border-input">
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

      <div className="mb-6">
        <label className="block text-foreground mb-2">Your Name:</label>
        <Input
          type="text"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-foreground mb-2">Email:</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Switch 
          checked={makeRecurring} 
          onCheckedChange={setMakeRecurring} 
        />
        <label className="text-foreground">Make this a monthly recurring donation</label>
      </div>
      
      <Button
        onClick={handleDonate}
        disabled={isProcessing}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md"
      >
        {isProcessing ? "Processing..." : `Donate ₹${amount}${makeRecurring ? " Monthly" : ""}`}
      </Button>
      
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-3 text-foreground">Your Impact</h3>
        <ul className="space-y-2 text-foreground/80">
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Support diversity in tech through scholarships
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-blue-500">•</span>
            Enable world-class speakers to share their knowledge
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
