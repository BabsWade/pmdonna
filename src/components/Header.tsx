import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-emerald-700 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} />
              <a href="tel:+33123456789" className="hover:text-emerald-200 transition-colors">
                01 23 45 67 89
              </a>
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Paris, France
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>Mar-Dim 11h30-14h30 / 18h30-22h30</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl md:text-3xl font-bold italic transition-colors duration-300 ${
                isScrolled ? 'text-emerald-700' : 'text-white'
              }`}>
                PASTA DA NONNA
              </h1>
              <p className={`text-sm italic transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Cucina della Nonna
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Accueil', 'Menu', 'Notre Histoire', 'Commander', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'menu', 'story', 'order', 'contact'][index])}
                  className={`font-medium hover:text-red-600 transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://pasta-da-nonna.eatbu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Commander
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {['Accueil', 'Menu', 'Notre Histoire', 'Commander', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'menu', 'story', 'order', 'contact'][index])}
                  className="block w-full text-left text-gray-800 font-medium hover:text-red-600 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
              <a
                href="https://pasta-da-nonna.eatbu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-red-600 text-white text-center px-6 py-3 rounded-full hover:bg-red-700 transition-all duration-300 mt-4"
              >
                Commander Maintenant
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;