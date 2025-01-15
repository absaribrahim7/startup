import React, { useState, useEffect } from 'react';
import { Globe, Instagram, Linkedin, Facebook, Menu, X, ChevronDown } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const stats = [
    { number: '450+', label: 'Homes' },
    { number: '1000+', label: 'Travellers' },
    { number: '10,000+', label: 'Nights booked' }
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">MoveHere</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#blog" className="hover:text-gray-300 transition-colors">Blog</a>
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://linkedin.com" className="hover:text-gray-300 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                Get in touch
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#about" className="hover:text-gray-300">About</a>
                <a href="#blog" className="hover:text-gray-300">Blog</a>
                <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 w-full">
                  Get in touch
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            One pass, make everywhere 
            <br /> your home <Globe className="inline animate-spin-slow" />
          </h1>
          <p className="text-gray-300 text-lg mb-4">— COMING SOON —</p>
          <p className="text-xl md:text-2xl mb-12">
            Get early access now ⚡️ Be the first to get notified
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Join Us
            </button>
          </form>
          <ChevronDown className="mx-auto mt-16 animate-bounce" size={32} />
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Easy Booking", desc: "Book mid-term stays with just a few clicks" },
              { title: "Verified Homes", desc: "Every property is thoroughly vetted" },
              { title: "Flexible Terms", desc: "Tailored solutions for digital nomads" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110">
                  <img src="/api/placeholder/96/96" alt={feature.title} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Milestones</h2>
              <p className="text-gray-300 leading-relaxed">
                Mid-term rental shouldn't be treated the same way as long term rental. 
                Movehere is a subscription based platform designed for digital nomads 
                and travelers, offering seamless booking for both mid-term accommodations. 
                Our goal is to provide a convenient and flexible solution for remote 
                professionals while not sacrificing the protections to owner's properties.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-sm pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-xl mb-6">movehere</h3>
              <div className="flex space-x-4">
                <Facebook className="hover:text-gray-300 cursor-pointer" size={20} />
                <Instagram className="hover:text-gray-300 cursor-pointer" size={20} />
                <Linkedin className="hover:text-gray-300 cursor-pointer" size={20} />
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  movehereapp@email.com
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-6">Pages</h3>
              <ul className="space-y-3">
                {['HOME', 'ABOUT', 'BLOG', 'FAQ'].map((item, idx) => (
                  <li key={idx} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">Utility pages</h3>
              <ul className="space-y-3">
                {['404 PAGE', 'CONTACT'].map((item, idx) => (
                  <li key={idx} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
            Proudly powered by MoveHere © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;