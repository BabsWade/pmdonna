import React, { useState } from 'react';
import { Clock, Leaf, Star } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  const categories = [
    { id: 'antipasti', name: 'Antipasti', icon: '🧀' },
    { id: 'primi', name: 'Primi Piatti', icon: '🍝' },
    { id: 'secondi', name: 'Secondi Piatti', icon: '🍖' },
    { id: 'pizze', name: 'Pizze', icon: '🍕' },
    { id: 'dolci', name: 'Dolci', icon: '🍰' }
  ];

  const menuItems = {
    antipasti: [
      {
        name: 'Antipasto della Nonna',
        description: 'Sélection de charcuteries italiennes, fromages, olives et légumes marinés',
        price: '18€',
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: true,
        vegetarian: false
      },
      {
        name: 'Burrata Pugliese',
        description: 'Burrata crémeuse avec tomates cerises, basilic frais et huile d\'olive extra vierge',
        price: '16€',
        image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: true
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Fines lamelles de bœuf, roquette, parmesan et huile de truffe',
        price: '19€',
        image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: false
      }
    ],
    primi: [
      {
        name: 'Spaghetti Carbonara della Nonna',
        description: 'Recette secrète de la Nonna : œufs, pancetta, pecorino romano et poivre noir',
        price: '16€',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: true,
        vegetarian: false
      },
      {
        name: 'Risotto ai Porcini',
        description: 'Risotto crémeux aux cèpes, parmesan et persil frais',
        price: '18€',
        image: 'https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: true
      },
      {
        name: 'Penne all\'Arrabbiata',
        description: 'Pâtes au coulis de tomates épicé, ail, basilic et piment rouge',
        price: '14€',
        image: 'https://images.pexels.com/photos/6287521/pexels-photo-6287521.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: true
      }
    ],
    secondi: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Jarret de veau braisé, risotto safranné et gremolata',
        price: '28€',
        image: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: true,
        vegetarian: false
      },
      {
        name: 'Branzino in Crosta di Sale',
        description: 'Bar de ligne en croûte de sel, légumes de saison et huile d\'olive citronnée',
        price: '24€',
        image: 'https://images.pexels.com/photos/3766001/pexels-photo-3766001.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: false
      }
    ],
    pizze: [
      {
        name: 'Pizza Margherita',
        description: 'Sauce tomate San Marzano, mozzarella di bufala, basilic frais',
        price: '13€',
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: true,
        vegetarian: true
      },
      {
        name: 'Pizza Diavola',
        description: 'Sauce tomate, mozzarella, salami piquant, olives noires',
        price: '16€',
        image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: false
      },
      {
        name: 'Pizza Quattro Stagioni',
        description: 'Sauce tomate, mozzarella, jambon, champignons, artichauts, olives',
        price: '17€',
        image: 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: false
      }
    ],
    dolci: [
      {
        name: 'Tiramisu della Casa',
        description: 'Recette traditionnelle, mascarpone, café expresso, cacao pur',
        price: '8€',
        image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: true,
        vegetarian: true
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Panna cotta vanille, coulis de fruits rouges frais',
        price: '7€',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        popular: false,
        vegetarian: true
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">🍝</span>
            <span className="font-medium">La Nostra Carta</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos spécialités italiennes préparées avec amour selon les recettes traditionnelles de la Nonna
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 border border-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && (
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Star size={12} />
                      Populaire
                    </div>
                  )}
                  {item.vegetarian && (
                    <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                      <Leaf size={12} />
                      Végétarien
                    </div>
                  )}
                </div>
                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold px-3 py-1 rounded-full">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
                
                {/* Prep Time */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock size={16} />
                    <span>15-20 min</span>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-emerald-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Envie de commander ?
            </h3>
            <p className="text-gray-600 mb-6">
              Commandez en ligne ou appelez-nous directement pour réserver votre table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://pasta-da-nonna.eatbu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Commander en Ligne
              </a>
              <a
                href="tel:+33123456789"
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Appeler : 01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;