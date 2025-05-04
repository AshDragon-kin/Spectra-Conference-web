import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const PRESET_AMOUNTS = [20, 50, 100, 250, 500];

export default function Donate() {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState(250);

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: `Thank you for your support!`,
      description: `You have donated ₹${customAmount}. Your donation will help us make technology more accessible.`,
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background py-8">
      <div className="w-full max-w-2xl">
        <h2 className="text-blue-700 font-semibold mb-2">Support Our Conference</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Your donation helps us make this conference accessible to more people and bring the best speaker from around the world. Every contribution makes a difference!
        </p>
        <Card className="mb-8">
          <CardContent className="py-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <div className="font-semibold mb-4 text-lg">Select Amount</div>
                <div className="flex gap-4 mb-4 flex-wrap">
                  {PRESET_AMOUNTS.map((amt) => (
                    <Button
                      key={amt}
                      type="button"
                      variant={selectedAmount === amt ? "default" : "outline"}
                      className={`rounded-full px-6 py-2 text-lg border-2 ${selectedAmount === amt ? 'bg-blue-600 text-white border-blue-600' : 'border-blue-600 text-blue-600 bg-white hover:bg-blue-50'}`}
                      onClick={() => handlePresetClick(amt)}
                    >
                      ₹{amt}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base">Custom Amount:</span>
                  <Input
                    type="number"
                    min={1}
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="w-32 text-lg"
                    prefix="₹"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full text-lg font-bold py-4 rounded-md bg-orange-600 hover:bg-orange-700 transition-colors"
                style={{ backgroundColor: '#ff6600', color: 'white' }}
              >
                Donate ₹{customAmount}
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-6">
            <div className="text-blue-700 font-semibold mb-2">Your Impact</div>
            <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
              <li>Support inclusive scholarship opportunities for the specially abled.</li>
              <li>Enable world-class speaker to share their knowledge</li>
              <li>Help create networking opportunities</li>
              <li>Contribute to educational resources</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 