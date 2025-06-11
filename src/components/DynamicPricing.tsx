
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Activity, Brain } from "lucide-react";

const DynamicPricing = () => {
  const [price, setPrice] = useState(75);
  const [demand, setDemand] = useState(68);
  const [socialBuzz, setSocialBuzz] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => Math.max(50, Math.min(150, prev + (Math.random() - 0.5) * 10)));
      setDemand(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 20)));
      setSocialBuzz(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 15)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">AI-Powered Intelligence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Dynamic Pricing{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Engine
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch our AI analyze real-time market data to determine fair ticket prices, 
            preventing both scalping and underpricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card */}
          <div className="space-y-6">
            <Card className="cyber-card backdrop-blur-xl border border-purple-500/30 relative overflow-hidden">
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 opacity-50 animate-pulse"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-center text-2xl text-white flex items-center justify-center gap-2">
                  <Activity className="w-6 h-6 text-purple-400" />
                  CryptoCon 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  ${price.toFixed(0)}
                </div>
                <div className="text-gray-400 mb-8 flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  Current Price
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Market Demand</span>
                      <span className="text-white font-semibold">{demand.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000 rounded-full"
                        style={{ width: `${demand}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Social Buzz</span>
                      <span className="text-white font-semibold">{socialBuzz.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000 rounded-full"
                        style={{ width: `${socialBuzz}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <Button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg cyber-glow-hover">
                  Buy Ticket Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* How it works */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">How It Works</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white cyber-glow group-hover:scale-110 transition-transform">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-purple-300 transition-colors">
                    On-Chain Analysis
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Monitor ticket sales volume, velocity, and resale prices from marketplace contracts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-sm font-bold text-white cyber-glow group-hover:scale-110 transition-transform">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-blue-300 transition-colors">
                    Social Intelligence
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Track event mentions on X, Google Trends, and artist popularity metrics via Chainlink oracles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-bold text-white cyber-glow group-hover:scale-110 transition-transform">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-white group-hover:text-pink-300 transition-colors">
                    LSTM Prediction
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Advanced machine learning models predict optimal pricing and update every 10 minutes.
                  </p>
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
