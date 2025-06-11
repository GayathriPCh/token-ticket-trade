
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Github, Zap, Shield } from "lucide-react";

const DeveloperAPI = () => {
  const codeExample = `// Create an event
const response = await fetch('https://api.hyperticket.dev/v1/events', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'CryptoCon 2025',
    date: '2025-09-01',
    venue: 'Online',
    ticketCount: 1000,
    price: 50
  })
});

// Mint NFT tickets
const ticket = await fetch('https://api.hyperticket.dev/v1/tickets/mint', {
  method: 'POST',
  body: JSON.stringify({
    eventId: '123',
    userId: '0x123...',
    seat: 'A12'
  })
});

console.log('Ticket minted:', ticket.tokenId);`;

  const features = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "RESTful API",
      description: "Complete endpoints for events, tickets, marketplace, and verification.",
      color: "text-purple-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: "JavaScript SDK",
      description: "Easy-to-use client library with TypeScript support and comprehensive documentation.",
      color: "text-blue-400"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Smart Contracts",
      description: "Open-source Solidity contracts for direct blockchain interaction.",
      color: "text-teal-400"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "99.9% Uptime",
      description: "Enterprise-grade infrastructure with comprehensive monitoring and support.",
      color: "text-pink-400"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Code className="w-4 h-4 text-green-400" />
            <span className="text-green-300 text-sm font-medium">Developer Tools</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Developer-First{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              API
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Integrate HyperTicket into your platform with our comprehensive RESTful API 
            and SDK. Build the future of event ticketing on Web3 infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Code Example */}
          <div>
            <Card className="bg-gray-900/90 border border-green-500/30 backdrop-blur-xl cyber-glow">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  HyperTicket API Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto bg-black/50 p-4 rounded-lg border border-gray-700/50">
                  {codeExample}
                </pre>
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">
              Everything You Need
            </h3>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300">
                  <div className={`p-2 bg-gray-800/50 rounded-lg ${feature.color} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg cyber-glow-hover">
                <Github className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperAPI;
