import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation'; // chemin selon ton arborescence

const Story = () => {
  const [ref, isVisible] = useScrollAnimation();

  const values = [
    {
      icon: Heart,
      title: 'Passion Familiale',
      description: 'Trois générations de savoir-faire culinaire italien transmis avec amour'
    },
    {
      icon: Users,
      title: 'Esprit Convivial',
      description: 'Un accueil chaleureux dans une ambiance authentiquement italienne'
    },
    {
      icon: Award,
      title: 'Qualité Artisanale',
      description: 'Ingrédients frais et recettes traditionnelles préparées sur place'
    },
    {
      icon: Clock,
      title: 'Tradition Préservée',
      description: 'Les secrets culinaires de la Nonna transmis depuis 1958'
    }
  ];

  return (
    <section
      id="story"
      ref={ref}
      className={`py-20 bg-gradient-to-r from-[#ffffff] to-[#ffffff] transition-opacity duration-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#CD212A] text-white rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">👵</span>
              <span className="font-medium">La Nostra Storia</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              Traiteur italien, épicerie fine à{' '}
              <span className="text-[#CD212A] italic block">Bouc-Bel-Air 🇮🇹</span>
            </h4>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Notre épicerie italienne vous prépare chaque jour des spécialités italiennes.
              </p>

              <p>
                Parcourez notre sélection de produits directement importés d'Italie, tels que des huiles d'olive extra vierge, des pâtes artisanales, et des fromages affinés.
              </p>

              <p>N'hésitez pas à faire appel à notre service traiteur.</p>

              <p>Venez nous voir pour choisir parmi nos spécialités :</p>

              <ul className="list-disc list-inside space-y-1">
                <li>Nos Brunchs</li>
                <li>Focaccia</li>
                <li>Pizzas</li>
                <li>Arancini</li>
                <li>Bocconcino</li>
                <li>...</li>
              </ul>

              <p>
                Et n'oubliez surtout pas nos <span className="italic">dolce</span>, comme nos fabuleux tiramisù ou cannoli !
              </p>

              <p>
                Nous avons hâte de vous accueillir et de partager avec vous notre amour pour la gastronomie italienne.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-[#CD212A]">
              <blockquote className="text-lg italic text-gray-700">
                "La cucina è il cuore della casa" – La cuisine est le cœur de la maison
              </blockquote>
              <cite className="text-sm text-gray-500 mt-2 block">- Nonna Maria</cite>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#008C45]">1958</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#CD212A]">3</div>
                <div className="text-sm text-gray-600">Générations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#008C45]">500+</div>
                <div className="text-sm text-gray-600">Familles servies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Videos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <video className="w-full h-48 object-cover rounded-2xl shadow-lg" autoPlay muted loop playsInline>
                  <source
                    src="https://videos.pexels.com/video-files/7008561/7008561-hd_1080_1920_25fps.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                <video className="w-full h-64 object-cover rounded-2xl shadow-lg" autoPlay muted loop playsInline>
                  <source
                    src="https://videos.pexels.com/video-files/3298012/3298012-uhd_1440_2732_25fps.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>

              <div className="space-y-4 pt-8">
                <video className="w-full h-64 object-cover rounded-2xl shadow-lg" autoPlay muted loop playsInline>
                  <source
                    src="https://videos.pexels.com/video-files/3298481/3298481-uhd_1440_2732_25fps.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                <video className="w-full h-48 object-cover rounded-2xl shadow-lg" autoPlay muted loop playsInline>
                  <source
                    src="https://videos.pexels.com/video-files/6247894/6247894-uhd_1440_2560_24fps.mp4"
                    type="video/mp4"
                  />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#CD212A] text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl">🏆</div>
                <div className="text-xs">Depuis</div>
                <div className="text-sm">1958</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-[#fff8f5] via-[#fff3ec] to-[#ffede3] py-20 rounded-[2rem]">
          <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            Nos <span className="text-[#CD212A]">Valeurs</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white hover:bg-[#f0fdf4] transition-colors duration-300 rounded-xl text-center p-8 border border-[#d1e7dd]"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#e1f5eb] text-[#008C45] rounded-full mb-5">
                    <IconComponent size={26} />
                  </div>

                  <h4 className="text-md font-semibold text-[#1d3c34] uppercase tracking-wide mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[#5c4930] text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
