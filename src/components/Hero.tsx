
import { Button } from "@/components/ui/button";
import { Ticket, Search, User } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-400 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <Ticket className="w-16 h-16 text-blue-300" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
          HyperTicket
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
          AI-Powered Decentralized Ticketing
        </p>
        
        <p className="text-lg text-blue-200/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Buy, sell, and trade event tickets as NFTs with AI-driven dynamic pricing, 
          fraud prevention, and cross-chain interoperability on Hyperion blockchain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Launch App
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
          >
            View Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-blue-300 mb-2">$1.8B</div>
            <div className="text-blue-200 text-sm">Lost to ticket fraud annually</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-purple-300 mb-2">&lt;1s</div>
            <div className="text-blue-200 text-sm">Transaction finality</div>
          </div>
          <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-indigo-300 mb-2">100%</div>
            <div className="text-blue-200 text-sm">Authentic NFT tickets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
