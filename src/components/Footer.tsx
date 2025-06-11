
import { Ticket, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-purple-500/20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg cyber-glow">
                <Ticket className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                HyperTicket
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The future of event ticketing powered by AI and blockchain technology on Hyperion.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-purple-500/20 transition-colors border border-gray-700/50 hover:border-purple-500/30">
                <Github className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
              <a href="#" className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 transition-colors border border-gray-700/50 hover:border-blue-500/30">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              {['Features', 'API', 'Pricing', 'Security'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-purple-500 rounded-full group-hover:w-2 transition-all"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Developers</h3>
            <ul className="space-y-3">
              {['Documentation', 'SDK', 'GitHub', 'Community'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-pink-500 rounded-full group-hover:w-2 transition-all"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2025 HyperTicket. Built on Hyperion blockchain with{" "}
            <span className="text-purple-400">❤️</span>
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Network Active
            </div>
            <div className="text-sm text-gray-500">
              Block: #2,847,392
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
