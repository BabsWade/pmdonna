import React, { useState, useRef } from 'react';
import { Clock, Leaf, Star } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation'; // chemin selon ton arborescence

const Menu = ({ cart, addToCart, removeFromCart, showModal, setShowModal }) => {






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
           /* ...import et setup identiques... */

<button
  key={category.id}
  onClick={() => {
    setActiveCategory(category.id);
    setCurrentPage(0);
  }}
  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
    activeCategory === category.id
      ? 'bg-[#CD212A] text-white '
      : 'bg-white text-gray-700 hover:bg-[#008C45] hover:text-white border border-gray-200'
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
{/* Menu Items Grid - Scroll vertical automatique */}
{/* Menu Items Grid avec scroll si plus de 6 */}
<div className="max-h-[800px] overflow-y-auto pr-2">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {menuItems[activeCategory]?.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 group flex flex-col min-h-[350px]"
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
  <div className="bg-[#CD212A] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
    <Star size={12} />
    Populaire
  </div>
)}
{item.vegetarian && (
  <div className="bg-[#008C45] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
    <Leaf size={12} />
    Végétarien
  </div>
)}

          </div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 font-bold px-3 py-1 rounded-full">
            {item.price}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {item.description}
            </p>
          </div>

          {/* Footer (bouton aligné en bas) */}
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Clock size={16} />
              <span>15-20 min</span>
            </div>
            <button
  onClick={() => addToCart(item)}
  className="bg-[#CD212A] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#a1111b] transition-colors"
>
  Ajouter au panier
</button>

          </div>
        </div>
      </div>
    ))}
  </div>
</div>







        



      </div>
    </section>
  );
};

export default Menu;