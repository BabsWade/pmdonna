import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const Story = () => {
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
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 mb-6">
              <span className="text-2xl">👵</span>
              <span className="font-medium">La Nostra Storia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              L'Histoire de 
              <span className="text-red-600 italic block">Nonna Maria</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Tout a commencé en 1958, quand Nonna Maria a quitté son petit village des Pouilles 
                pour s'installer à Paris avec ses recettes précieusement gardées et sa passion 
                pour la cuisine authentique italienne.
              </p>
              
              <p>
                Dans sa petite cuisine, elle préparait chaque jour des pâtes fraîches, pétrissait 
                la pâte à pizza à la main et concoctait ses sauces avec des tomates San Marzano 
                importées directement d'Italie. Son secret ? L'amour qu'elle mettait dans chaque plat.
              </p>
              
              <p>
                Aujourd'hui, c'est avec la même passion que nous perpétuons ses traditions. 
                Nos pâtes sont toujours faites maison, nos pizzas cuites au feu de bois, 
                et chaque plat raconte l'histoire de notre famille.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border-l-4 border-red-600">
              <blockquote className="text-lg italic text-gray-700">
                "La cucina è il cuore della casa" - La cuisine est le cœur de la maison
              </blockquote>
              <cite className="text-sm text-gray-500 mt-2 block">- Nonna Maria</cite>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1958</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">3</div>
                <div className="text-sm text-gray-600">Générations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">500+</div>
                <div className="text-sm text-gray-600">Familles servies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Préparation des pâtes fraîches"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Cuisine traditionnelle"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                  alt="Ambiance du restaurant"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Famille en cuisine"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl">🏆</div>
                <div className="text-xs">Depuis</div>
                <div className="text-sm">1958</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
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