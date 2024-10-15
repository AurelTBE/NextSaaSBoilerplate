import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">About</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Support</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-electric-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-electric-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="mb-4">Stay updated with our latest features and releases.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
              <Button type="submit" className="bg-electric-blue hover:bg-blue-600 text-white rounded-r-md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
