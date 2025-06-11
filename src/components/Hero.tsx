
import { Button } from "@/components/ui/button";
import { Ticket, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="gradient-border animate-pulse-glow">
            <div className="gradient-border-content p-6">
              <Ticket className="w-16 h-16 text-purple-400" />
            </div>
          </div>
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent text-glow">
          HyperTicket
        </h1>
        
        {/* Subheading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wider">
            AI-Powered Decentralized Ticketing
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        
        {/* Description */}
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Trade event tickets as NFTs with AI-driven dynamic pricing, fraud prevention, 
          and cross-chain interoperability on Hyperion blockchain.
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl cyber-glow-hover transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Launch App
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm cyber-glow-hover"
          >
            <Shield className="w-5 h-5 mr-2" />
            View Demo
          </Button>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="cyber-card p-6 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              $1.8B
            </div>
            <div className="text-gray-400 text-sm">Lost to ticket fraud annually</div>
          </div>
          <div className="cyber-card p-6 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-2">
              &lt;1s
            </div>
            <div className="text-gray-400 text-sm">Transaction finality</div>
          </div>
          <div className="cyber-card p-6 rounded-xl">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Authentic NFT tickets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
