
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Search, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Ticket className="w-8 h-8 text-purple-400" />,
      title: "NFT-Based Tickets",
      description: "Every ticket is minted as an ERC-721 NFT on Hyperion, ensuring authenticity and preventing counterfeiting.",
      details: ["Immutable ownership", "QR code verification", "Metadata on IPFS"],
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: <Search className="w-8 h-8 text-blue-400" />,
      title: "AI Dynamic Pricing",
      description: "Smart pricing algorithms analyze on-chain sales data and social media trends to optimize ticket prices in real-time.",
      details: ["10-minute price updates", "Demand-based pricing", "Transparent calculations"],
      gradient: "from-blue-500/20 to-teal-500/20"
    },
    {
      icon: <User className="w-8 h-8 text-pink-400" />,
      title: "Scalping Protection",
      description: "AI-powered fraud detection identifies suspicious trading patterns and prevents ticket scalping automatically.",
      details: ["Bulk purchase detection", "Resale price caps", "Account flagging system"],
      gradient: "from-pink-500/20 to-purple-500/20"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm font-medium">Revolutionary Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" >
            Revolutionizing Event{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ticketing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            HyperTicket combines blockchain technology, artificial intelligence, and real-time processing 
            to create the most secure and efficient ticketing platform ever built.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-2 cyber-glow-hover group"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl cyber-glow group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-3">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
