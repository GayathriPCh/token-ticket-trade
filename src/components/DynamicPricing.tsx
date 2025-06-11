
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DynamicPricing = () => {
  const [price, setPrice] = useState(75);
  const [demand, setDemand] = useState(68);
  const [socialBuzz, setSocialBuzz] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time price changes
      setPrice(prev => prev + (Math.random() - 0.5) * 10);
      setDemand(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 20)));
      setSocialBuzz(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 15)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Dynamic Pricing
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Watch our AI analyze real-time market data to determine fair ticket prices, 
            preventing both scalping and underpricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">CryptoCon 2025</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-blue-300 mb-4">
                  ${price.toFixed(0)}
                </div>
                <div className="text-blue-200 mb-6">Current Price</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Market Demand</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
                          style={{ width: `${demand}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold">{demand.toFixed(0)}%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Social Buzz</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000"
                          style={{ width: `${socialBuzz}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-semibold">{socialBuzz.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Buy Ticket Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 text-white">
            <h3 className="text-3xl font-bold mb-6">How It Works</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">On-Chain Analysis</h4>
                  <p className="text-blue-200">Monitor ticket sales volume, velocity, and resale prices from marketplace contracts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Social Intelligence</h4>
                  <p className="text-blue-200">Track event mentions on X, Google Trends, and artist popularity metrics via Chainlink oracles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">LSTM Prediction</h4>
                  <p className="text-blue-200">Advanced machine learning models predict optimal pricing and update every 10 minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicPricing;
