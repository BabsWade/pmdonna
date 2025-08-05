import React from 'react';
import { Heart, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold italic mb-4 text-red-400">
              PASTA DA NONNA
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Depuis 1958, nous perpétuons les traditions culinaires italiennes 
              avec passion et authenticité. Chaque plat raconte l'histoire de notre famille.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </span>
              <span className="text-white">4.8/5 sur Google</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-red-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-gray-300">123 Rue de la Paix</p>
                  <p className="text-gray-300">75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-red-400 flex-shrink-0" size={18} />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-white transition-colors">
                  01 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-red-400 flex-shrink-0" size={18} />
                <a href="mailto:contact@pastadanonna.fr" className="text-gray-300 hover:text-white transition-colors">
                  contact@pastadanonna.fr
                </a>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-400">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="text-red-400 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 font-medium">Mardi - Dimanche</p>
                  <p className="text-gray-400 text-sm">11h30 - 14h30</p>
                  <p className="text-gray-400 text-sm">18h30 - 22h30</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-900/30 rounded-lg">
                <p className="text-red-300 font-medium">Lundi : Fermé</p>
              </div>
            </div>
          </div>

          {/* Navigation & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-400">Liens Rapides</h4>
            <div className="space-y-3 mb-8">
              <a href="#menu" className="block text-gray-300 hover:text-white transition-colors">
                Notre Menu
              </a>
              <a href="#story" className="block text-gray-300 hover:text-white transition-colors">
                Notre Histoire
              </a>
              <a 
                href="https://pasta-da-nonna.eatbu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Commander en Ligne
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4 text-emerald-400">Suivez-Nous</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/pastadanonna.mia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://g.co/kgs/UrHYd7K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 text-sm font-bold"
                >
                  G
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-red-400">Newsletter</h4>
              <p className="text-gray-300">Recevez nos dernières actualités et offres spéciales</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-full text-gray-900 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <span>&copy; {currentYear} PASTA DA NONNA. Tous droits réservés.</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Fait avec</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>à Paris</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              Mentions légales • Politique de confidentialité • CGV
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;