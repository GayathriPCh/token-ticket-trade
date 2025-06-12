import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useWalletContext } from './WalletProvider';
import { Ticket, Search, Plus } from 'lucide-react';

const Home = () => {
  const { account, isConnected, disconnectWallet } = useWalletContext();
  const navigate = useNavigate();

  // Redirect to home if not connected
  useEffect(() => {
    if (!isConnected) {
      navigate('/');
    }
  }, [isConnected, navigate]);

  // Don't render anything if not connected (while redirecting)
  if (!isConnected) {
    return null;
  }

  const handleDisconnect = () => {
    disconnectWallet();
    navigate('/'); // Redirect to landing page after disconnect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <Ticket className="w-8 h-8 text-purple-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            HyperTicket
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            {account?.slice(0, 6)}...{account?.slice(-4)}
          </span>
          <Button 
            variant="outline" 
            onClick={handleDisconnect}
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
          >
            Disconnect
          </Button>
        </div>
      </nav>

      {/* Rest of your Home component content... */}
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
            Discover Events
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Buy, sell, and trade authentic NFT tickets
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events, artists, venues..."
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="cyber-card p-6 rounded-xl text-center">
            <Ticket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Browse Events</h3>
            <p className="text-gray-400 mb-4">Discover upcoming events and concerts</p>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Explore
            </Button>
          </div>
          
          <div className="cyber-card p-6 rounded-xl text-center">
            <Plus className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Create Event</h3>
            <p className="text-gray-400 mb-4">List your event and sell tickets</p>
            <Button variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/10">
              Create
            </Button>
          </div>
          
          <div className="cyber-card p-6 rounded-xl text-center">
            <Search className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">My Tickets</h3>
            <p className="text-gray-400 mb-4">View and manage your NFT tickets</p>
            <Button variant="outline" className="border-blue-500/50 text-blue-300 hover:bg-blue-500/10">
              View All
            </Button>
          </div>
        </div>

        {/* Event Grid Placeholder */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder event cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="cyber-card rounded-xl overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Event Name {i}</h3>
                  <p className="text-gray-400 mb-4">Date • Venue</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-purple-400">$50 tMETIS</span>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
