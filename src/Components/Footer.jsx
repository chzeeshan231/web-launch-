import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send
} from 'lucide-react';

// --- Assets ---
import logo from '../assets/logoo.png';
import brandLogo from '../assets/brand-logo.png';

const Footer = () => {
  const Motion = motion;
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#projects' },
    { name: 'Working Process', href: '#working-process' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'https://cdn.simpleicons.org/facebook/9ca3af' },
    { name: 'YouTube', href: '#', icon: 'https://cdn.simpleicons.org/youtube/9ca3af' },
    { name: 'Instagram', href: '#', icon: 'https://cdn.simpleicons.org/instagram/9ca3af' },
    { name: 'VK', href: '#', icon: 'https://cdn.simpleicons.org/vk/9ca3af' },
  ];

  return (
    <footer id="footer" className="bg-black text-white pt-20 pb-10 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Contact Bar --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-12">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <img src={brandLogo} alt="Brand Logo" className="h-20 w-auto" />
            <img src={logo} alt="WebLaunch" className="h-12 w-auto" />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <Motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Send Email</p>
                <p className="text-[15px] font-semibold hover:text-[#CFFE25] cursor-pointer transition-colors">needhelp@company.com</p>
              </div>
            </Motion.div>

            <Motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white border border-zinc-800">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Call Now</p>
                <p className="text-[15px] font-semibold hover:text-[#CFFE25] cursor-pointer transition-colors">+ 0 (123) 456 789</p>
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-zinc-800 mb-16" />

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: About */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6">About</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              Let's build a website that brings you clients and grows your business.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <Motion.a 
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  whileHover={{ scale: 1.1, backgroundColor: '#CFFE25' }}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all"
                >
                  <img src={item.icon} alt={item.name} className="w-[17px] h-[17px] object-contain" />
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          {/* Column 2: Explore */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#CFFE25] transition-all group-hover:w-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Motion.div>

          {/* Column 3: Newsletter */}
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              If you’re thinking about scaling and want a calmer, more controlled approach to growth, you’re in the right place.
            </p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-[#CFFE25] transition-all"
              />
              <a href="#contact" className="absolute right-2 top-2 bottom-2 bg-[#CFFE25] text-black px-4 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Send size={18} />
              </a>
            </div>
          </Motion.div>
        </div>

        {/* --- The Big Neon Banner --- */}
        <Motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#CFFE25] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 shadow-[0_0_50px_rgba(207,254,37,0.2)]"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-black text-center md:text-left leading-tight">
            We launch your site and optimize it for maximum results.
          </h3>
          <Motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-10 py-4 rounded-2xl font-bold text-sm whitespace-nowrap shadow-xl"
          >
            Call Us Now
          </Motion.a>
        </Motion.div>

        {/* --- Bottom Footer Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-900">
          <p className="text-gray-500 text-[13px]">
            © Copyright {currentYear} by TailorTree
          </p>
          <div className="flex items-center gap-8 text-gray-500 text-[13px]">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <div className="w-[1px] h-4 bg-zinc-800" />
            <a href="#home" className="hover:text-white transition-colors">Terms of services</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;