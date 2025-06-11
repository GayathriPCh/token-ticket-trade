
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Search, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Ticket className="w-8 h-8 text-blue-500" />,
      title: "NFT-Based Tickets",
      description: "Every ticket is minted as an ERC-721 NFT on Hyperion, ensuring authenticity and preventing counterfeiting.",
      details: ["Immutable ownership", "QR code verification", "Metadata on IPFS"]
    },
    {
      icon: <Search className="w-8 h-8 text-purple-500" />,
      title: "AI Dynamic Pricing",
      description: "Smart pricing algorithms analyze on-chain sales data and social media trends to optimize ticket prices in real-time.",
      details: ["10-minute price updates", "Demand-based pricing", "Transparent calculations"]
    },
    {
      icon: <User className="w-8 h-8 text-indigo-500" />,
      title: "Scalping Protection",
      description: "AI-powered fraud detection identifies suspicious trading patterns and prevents ticket scalping automatically.",
      details: ["Bulk purchase detection", "Resale price caps", "Account flagging system"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Event Ticketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HyperTicket combines blockchain technology, artificial intelligence, and real-time processing 
            to create the most secure and efficient ticketing platform ever built.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
