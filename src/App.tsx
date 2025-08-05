import React, { useState } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Story from './components/Story';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);

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
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="min-h-screen relative">
      {/* Bandeau tricolore en haut */}
      <div className="h-2 w-full" />

      <Header />
      <main>
        <Hero />
        <Menu 
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Story />
        <Order />
        <Contact />
      </main>
      <Footer />

      {/* Bouton Mon Panier fixe */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-green-600 via-white to-red-600 text-black px-6 py-3 rounded-full font-semibold hover:brightness-110 transition-all duration-300 shadow-lg"
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

      {/* Modal Panier */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-start pt-20 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden p-6 relative flex flex-col">

            {/* Fermer */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
              aria-label="Fermer"
            >
              ✕
            </button>

            {/* Header fixe */}
            <div className="flex flex-col gap-6 mb-6 sticky top-0  pt-2 pb-4 z-20 border-b border-gray-200 ">
              <h2 className="text-2xl font-bold text-center">Mon panier</h2>

              {/* Total */}
              {cart.length > 0 && (
                <div className="text-lg font-semibold">
                  Total :{" "}
                  {cart
                    .reduce((total, item) => {
                      const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
                      return total + price * item.quantity;
                    }, 0)
                    .toFixed(2)}{" "}
                  €
                </div>
              )}
            </div>

            {/* Liste des articles */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-green-600/30 scrollbar-track-transparent">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">Votre panier est vide.</p>
              ) : (
                cart.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl shadow-sm flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.price} × {item.quantity}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
                      >
                        –
                      </button>
                      <span className="text-gray-800 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bouton Valider */}
            {cart.length > 0 && (
              <div className="mt-6 text-right">
                <a
                  href="tel:01 23 45 67 89"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 via-white to-red-600 text-black px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
                >
                  Appeler : 01 23 45 67 89
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
