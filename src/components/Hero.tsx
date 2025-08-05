import React from 'react';
import { ArrowDown, Star, Users, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Heart className="text-red-500" size={16} />
            <span className="text-sm font-medium">Cuisine Authentique Italienne</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Benvenuti alla
            <span className="block text-red-500 italic">Pasta DA NONNA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Epicerie Italienne ! Vous pouvez réservez vos brunch pour le dimanche !
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="font-semibold">4.8/5</span>
              <span className="text-white/80">sur Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-emerald-400" size={20} />
              <span className="font-semibold">500+</span>
              <span className="text-white/80">clients satisfaits</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-red-400" size={20} />
              <span className="font-semibold">15 ans</span>
              <span className="text-white/80">de tradition</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://pasta-da-nonna.eatbu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              Commander Maintenant
            </a>
            <button
              onClick={scrollToMenu}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Découvrir la Carte
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button onClick={scrollToMenu} className="text-white/80 hover:text-white transition-colors">
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block animate-float">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
          <span className="text-white text-sm font-medium">🍝 Pâtes Fraîches</span>
        </div>
      </div>
      <div className="absolute bottom-32 right-10 hidden lg:block animate-float-delayed">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
          <span className="text-white text-sm font-medium">🍕 Pizza Artisanale</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;