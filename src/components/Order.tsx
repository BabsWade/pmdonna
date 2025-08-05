import React from 'react';
import { Truck, Clock, Phone, Utensils, CheckCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Order = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const services = [
    {
      icon: Truck,
      title: 'Livraison',
      description: 'Commandez en ligne et recevez vos plats à domicile.',
      time: '30-45 min',
      action: 'Commander en ligne',
    },
    {
      icon: Utensils,
      title: 'À Emporter',
      description: 'Appelez et venez récupérer votre commande sur place.',
      time: '15-20 min',
      action: 'Appeler maintenant',
    },
  ];

  const features = [
    'Paiement sécurisé en ligne',
    'Suivi de commande en temps réel',
    'Livraison gratuite dès 25€',
    'Programme de fidélité',
    'Commande pour plus tard',
    'Service traiteur disponible',
  ];

  return (
    <section
      id="order"
      ref={ref}
      className={`py-20 bg-gradient-to-r from-green-50 via-white to-red-50 transition-opacity duration-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-1'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full px-4 py-2 mb-4 shadow-md">
            <span className="text-2xl">🇮🇹</span>
            <span className="font-medium">Commande & Livraison</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#383525] mb-6">
            Comment Commander ?
          </h2>
          <p className="text-xl text-[#383525] max-w-2xl mx-auto">
            Plusieurs options s'offrent à vous pour déguster nos spécialités italiennes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-700 rounded-full mb-6 shadow-sm">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-center gap-2 text-gray-500 font-medium mb-6">
                  <Clock size={16} />
                  <span>{service.time}</span>
                </div>

                <button
                  onClick={() => {
                    if (service.action === 'Appeler maintenant') {
                      window.location.href = 'tel:+33672128443';
                    } else {
                      window.open('https://www.example-order.com', '_blank'); // 🔁 Remplace par ton lien réel
                    }
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition-all duration-300"
                >
                  {service.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="bg-white rounded-3xl p-10 max-w-4xl mx-auto shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-[#CD212A] mb-6 text-center">
            Pourquoi choisir notre service ?
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4 text-[#383525] font-medium">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Réservation */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Faire une réservation</h2>
              <p className="text-gray-600 mb-6">
                Nous nous réjouissons de vous accueillir bientôt. Utilisez notre système de réservation en ligne pratique ou réservez par téléphone.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.example-reservation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white text-center px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                >
                  Réserver en ligne
                </a>
                <a
                  href="tel:+33672128443"
                  className="flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
                >
                  <Phone size={20} />
                  Appeler +33 6 72 12 84 43
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;
