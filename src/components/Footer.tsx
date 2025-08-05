import React, { useState } from 'react';
import { Heart, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <>
    <footer className="bg-gradient-to-br from-[#2e1f13] via-[#3c2c1f] to-[#1a120a] text-white">

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold italic mb-4 text-white">PASTA DA NONNA</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depuis 1958, nous perpétuons les traditions culinaires italiennes 
                avec passion et authenticité. Chaque plat raconte l'histoire de notre famille.
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
                <span className="text-white ml-2">4.9/5 sur Google</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#CD212A]" size={18} />
                  <div className="text-gray-300">
                    <p>Centre commercial Neptuna, RN8</p>
                    <p>Av. de Violési, 13320 Bouc-Bel-Air</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#CD212A]" size={18} />
                  <a href="tel:+33672128443" className="text-gray-300 hover:text-white transition">
                    +33 6 72 12 84 43
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#CD212A]" size={18} />
                  <a href="mailto:Pastadanonna13@gmail.com" className="text-gray-300 hover:text-white transition">
                    Pastadanonna13@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Horaires</h4>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white">Mardi - Samedi</p>
                  <p>10h00 - 19h30</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Dimanche</p>
                  <p>10h00 - 13h00</p>
                </div>
                <div className="bg-[#CD212A] text-white px-3 py-2 rounded-lg mt-2 inline-block">
                  Lundi : Fermé
                </div>
              </div>
            </div>

            {/* Liens & Réseaux */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Liens Rapides</h4>
              <div className="space-y-3 mb-6 text-sm">
                <a href="#menu" className="block text-gray-300 hover:text-white transition">Notre Menu</a>
                <a href="#story" className="block text-gray-300 hover:text-white transition">Notre Histoire</a>
                <a href="https://pasta-da-nonna.eatbu.com" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition">Commander en Ligne</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
              </div>

              <h5 className="text-white font-semibold mb-4">Suivez-Nous</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/pastadanonna.mia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center hover:scale-110 transition-all"
                >
                  <Instagram size={18} className="text-white" />
                </a>
                <a
                  href="https://g.co/kgs/UrHYd7K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white text-[#008C45] font-bold rounded-full flex items-center justify-center hover:scale-110 transition-all text-sm"
                >
                  G
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#4a4738]">
          <div className="container mx-auto px-4 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>&copy; {currentYear} PASTA DA NONNA. Tous droits réservés.</div>
            <div className="flex items-center gap-1">
              <span>Fait avec</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>à Aix-en-Provence</span>
            </div>
            <button
              onClick={() => setIsLegalOpen(true)}
              className="text-gray-400 hover:underline text-xs"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </footer>

      {/* Mentions légales Modal */}
      {isLegalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 relative shadow-xl mt-10 mb-10">
            <button
              onClick={() => setIsLegalOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentions légales</h2>
            <div className="text-gray-700 text-sm space-y-2">
              <p><strong>Nom de l'établissement :</strong> PASTA DELLA NONNA</p>
              <p><strong>Forme juridique :</strong> PASTA DELLA NONNA</p>
              <p><strong>Prénom :</strong> PHILIPPE</p>
              <p><strong>Nom :</strong> MARTIN</p>
              <p><strong>Adresse :</strong> BOUC BEL AIR, 13320, FRANCE</p>
              <p><strong>Téléphone :</strong> +33 6 06 48 10 35</p>
              <p><strong>Email :</strong> philippemartin92@sfr.fr</p>
              <p><strong>Registre :</strong> 0</p>
              <p><strong>Numéro d'enregistrement :</strong> 0</p>
              <p><strong>Numéro fiscal local :</strong> 0</p>
              <p><strong>Capital social :</strong> 0</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
