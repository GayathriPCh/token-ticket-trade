
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Developer-First API
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate HyperTicket into your platform with our comprehensive RESTful API 
            and SDK. Build the future of event ticketing on Web3 infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gray-900 border-gray-700 text-green-400 font-mono text-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">HyperTicket API Example</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap overflow-x-auto">
                  {codeExample}
                </pre>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Everything You Need
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">RESTful API</h4>
                  <p className="text-gray-600">Complete endpoints for events, tickets, marketplace, and verification.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">JavaScript SDK</h4>
                  <p className="text-gray-600">Easy-to-use client library with TypeScript support and comprehensive documentation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">Smart Contracts</h4>
                  <p className="text-gray-600">Open-source Solidity contracts for direct blockchain interaction.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">99.9% Uptime</h4>
                  <p className="text-gray-600">Enterprise-grade infrastructure with comprehensive monitoring and support.</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
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
