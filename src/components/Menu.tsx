import React, { useState, useRef } from 'react';
import { Clock, Leaf, Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation'; // chemin selon ton arborescence

const Menu = () => {


  
  const [showModal, setShowModal] = useState(false);
const [cart, setCart] = useState([]);

  const [activeCategory, setActiveCategory] = useState('patesfraiches');
const ITEMS_PER_PAGE = 6;

  const [ref, isVisible] = useScrollAnimation(); // 👈 hook scroll



const touchStartX = useRef(0);
const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
  touchStartX.current = e.changedTouches[0].clientX;
};

const handleTouchEnd = (e) => {
  touchEndX.current = e.changedTouches[0].clientX;
  handleSwipe();
};

const handleSwipe = () => {
  const distance = touchStartX.current - touchEndX.current;
  const minSwipeDistance = 50;

  if (distance > minSwipeDistance) {
    // swipe left → next
    if ((currentPage + 1) * ITEMS_PER_PAGE < menuItems[activeCategory].length) {
      setCurrentPage(currentPage + 1);
    }
  } else if (distance < -minSwipeDistance) {
    // swipe right → previous
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }
};
  const addToCart = (item) => {
  setCart((prevCart) => {
    const existing = prevCart.find((i) => i.name === item.name);
    if (existing) {
      return prevCart.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      return [...prevCart, { ...item, quantity: 1 }];
    }
  });
};

  const removeFromCart = (name) => {
  setCart((prevCart) => {
    return prevCart
      .map((item) =>
        item.name === name ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
  });
};


  const categories = [
    { id: 'patesfraiches', name: 'NOS PATES FRAICHES', icon: '🧀' },
    { id: 'saucesmaison', name: 'NOS SAUCES MAISON', icon: '🍝' },
    { id: 'dolce', name: 'DOLCE', icon: '🍖' },
    { id: 'pizze', name: 'Pizze', icon: '🍕' },
    { id: 'dolci', name: 'Dolci', icon: '🍰' }
  ];

const menuItems = {
  patesfraiches: [
    {
      name: 'Rigatoni, spaghetti, tagliatelle, torciglioni, pipe rigate',
      description: 'Pâtes fraîches maison à base de semoule de blé dur et œufs frais.',
      price: '11,00€/KG',
      image: 'https://images.pexels.com/photos/28976235/pexels-photo-28976235.jpeg',
      popular: true,
      vegetarian: true,
    },
    {
      name: 'Gnocchi frais',
      description: 'Petits gnocchis traditionnels à base de pomme de terre.',
      price: '12,00€/KG',
      image: 'https://images.pexels.com/photos/31235428/pexels-photo-31235428.jpeg',
      popular: false,
      vegetarian: true,
    },
    {
      name: 'Ravioli brousse épinard, bolet, speck, boeuf, 3 fromages',
      description: 'Ravioli frais farcis selon vos envies.',
      price: '23,00€/KG',
      image: 'https://images.pexels.com/photos/20169235/pexels-photo-20169235.jpeg',
      popular: true,
      vegetarian: false,
    }
  ],
  saucesmaison: [
    { name: 'Bolet', description: 'Champignons, morille, mascarpone', price: '7,00€/2pers', image: 'https://images.pexels.com/photos/28976235/pexels-photo-28976235.jpeg', vegetarian: true },
    { name: 'Bolognaise', description: 'Boeuf, sauce tomate', price: '7,00€/2pers', image: 'https://images.pexels.com/photos/31235428/pexels-photo-31235428.jpeg', vegetarian: false },
    { name: 'Salsa', description: 'Sauce tomate classique', price: '5,00€/2pers', image: 'https://images.pexels.com/photos/20169235/pexels-photo-20169235.jpeg', vegetarian: true },
    { name: 'Pesto maison', description: 'Pesto basilic frais maison', price: '7,00€/2pers', image: '/images/pesto.jpg', vegetarian: true },
    { name: 'Parmiggiana', description: 'Sauce tomate, aubergine, parmesan', price: '6,50€/2pers', image: '/images/parmiggiana.jpg', vegetarian: true },
    { name: 'L’Alex', description: 'Seiche, encre de seiche, sauce tomate', price: '8,00€/2pers', image: '/images/lalex.jpg', vegetarian: false },
    { name: 'La Curry', description: 'Poulet, curry', price: '7,00€/2pers', image: '/images/curry.jpg', vegetarian: false },
    { name: 'La Saumon', description: 'Saumon frais, mascarpone', price: '7,00€/2pers', image: '/images/saumon.jpg', vegetarian: false },
    { name: 'La Kev', description: 'Mascarpone, gorgonzola, guanciale', price: '7,50€/2pers', image: '/images/kev.jpg', vegetarian: false },
    { name: 'La Siciliana', description: 'Anchois, sauce tomate, câpres, olive', price: '6,00€/2pers', image: '/images/siciliana.jpg', vegetarian: false },
    { name: 'Tonnata', description: 'Sauce tomate, olive, câpres, thon frais', price: '8,00€/2pers', image: '/images/tonnata.jpg', vegetarian: false },
    { name: 'L’arrabiata', description: 'Sauce tomate, piment', price: '5,50€/2pers', image: '/images/arrabiata.jpg', vegetarian: true },
    { name: 'La L’aur', description: 'Sauce tomate, ail, persil, olive', price: '6,00€/2pers', image: '/images/laur.jpg', vegetarian: true },
    { name: 'La Blanche', description: 'Gorgonzola et mascarpone', price: '6,00€/2pers', image: '/images/blanche.jpg', vegetarian: true },
    { name: 'La Eli', description: 'Mascarpone, curry', price: '5,00€/2pers', image: '/images/eli.jpg', vegetarian: true },
    { name: 'Crema de pistache', description: 'Crème de pistache douce', price: '7,00€/2pers', image: '/images/pistache.jpg', vegetarian: true },
    { name: 'Pesto de courgette', description: 'Courgette, basilic, parmesan', price: '7,00€/2pers', image: '/images/courgette.jpg', vegetarian: true }
  ],
  dolce: [
    {
      name: 'Panna cotta',
      description: 'Dessert italien à la crème vanillée',
      price: '4,00€',
      image: '/images/pannacotta.jpg',
      vegetarian: true,
    },
    {
      name: 'Budino',
      description: 'Flan italien traditionnel',
      price: '5,00€',
      image: '/images/budino.jpg',
      vegetarian: true,
    },
    {
      name: 'Tiramisu du jour',
      description: 'Préparé maison selon l\'inspiration du jour',
      price: '4,00€',
      image: '/images/tiramisu.jpg',
      vegetarian: true,
    },
    {
      name: 'Cannoli Nutella ou ricotta sucrée',
      description: 'Pâtisserie sicilienne croustillante',
      price: '5,00€',
      image: '/images/cannoli.jpg',
      vegetarian: true,
    }
  ]
};


  return (
  <section
      id="menu"
      ref={ref}
      className={`py-20 bg-gray-50 transition-opacity duration-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffefe7] text-[#5c4930] rounded-full px-4 py-2 mb-4">
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
             onClick={() => {
  setActiveCategory(category.id);
  setCurrentPage(0); // Revenir à la première page quand on change de catégorie
}}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-[#b58265] text-white '
                  : 'bg-white text-gray-700 hover:bg-[#b58265]  border border-gray-200'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
       {/* Menu Items Grid with Pagination */}
{/* Menu Items Grid with Pagination + Swipe */}
{/* Scrollable horizontal container */}
<div className="overflow-x-auto pb-4">
  <div className="flex gap-6 w-max">
    {menuItems[activeCategory]?.map((item, index) => (
      <div
        key={index}
        className="min-w-[300px] max-w-[300px] bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 group"
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
              <div className="bg-[#b58265] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
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

        {/* Description */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Clock size={16} />
              <span>15-20 min</span>
            </div>
            <button className="bg-[#b58265] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#5c4930] transition-colors">
              Commander
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>




        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#ffefe7] to-[#ffefe7] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Envie de commander ?
            </h3>
            <p className="text-gray-600 mb-6">
              Commandez en ligne ou appelez-nous directement pour réserver votre table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
  onClick={() => setShowModal(true)}
  className="bg-[#b58265] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5c4930] transition-all duration-300 transform hover:scale-105"
>
  Commander en Ligne
</button>
              <a
                href="tel:+33123456789"
                className="border-[#5c4930] text-[#5c4930] px-8 py-3 rounded-full font-semibold hover:bg-[#b58265] hover:text-white transition-all duration-300"
              >
                Appeler : 01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
        
        {showModal && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-20">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 relative">

      {/* Bouton fermer */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-6">Sélectionnez vos plats</h2>

      {/* Choix de catégorie */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(menuItems).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-full font-medium border ${
              activeCategory === key
                ? 'bg-[#b58265] text-white'
                : 'bg-white text-gray-700 hover:bg-[#b58265] hover:text-white'
            }`}
          >
            {key.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Plats de la catégorie */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {menuItems[activeCategory]?.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{item.description}</p>
            <p className="text-gray-800 font-semibold mb-3">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-[#b58265] text-white text-sm px-4 py-2 rounded-full hover:bg-[#5c4930]"
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>

      {/* Commande en cours */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
        <h3 className="text-xl font-bold mb-3">Ma commande :</h3>
        {cart.length === 0 ? (
          <p className="text-gray-500">Aucun plat sélectionné.</p>
        ) : (
          <ul className="space-y-3">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="bg-red-500 text-white rounded-full px-3 py-1 text-sm"
                  >
                    –
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-500 text-white rounded-full px-3 py-1 text-sm"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {cart.length > 0 && (
          <div className="mt-6 text-right">
            <button
              onClick={() => {
                alert('Commande validée ! 🍝');
                setCart([]);
                setShowModal(false);
              }}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700"
            >
              Valider ma commande
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
)}

      </div>
    </section>
  );
};

export default Menu;



{/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#ffefe7] to-[#ffefe7] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Envie de commander ?
            </h3>
            <p className="text-gray-600 mb-6">
              Commandez en ligne ou appelez-nous directement pour réserver votre table
            </p>
            {/* Bouton Mon Panier fixe en bas à droite */}
<div className="fixed bottom-6 right-6 z-50">
  <button
    onClick={() => setShowModal(true)} // ou tout autre handler
    className="flex items-center gap-2 bg-[#b58265] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5c4930] transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V5a1 1 0 10-2 0v4"
      />
    </svg>
    <span>Mon Panier</span>
  </button>
</div>

          </div>
        </div>