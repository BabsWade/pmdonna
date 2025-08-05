import React from 'react';
import { Truck, Clock, Phone, Utensils, CheckCircle, Star } from 'lucide-react';

const Order = () => {
  const services = [
    {
      icon: Utensils,
      title: 'Sur Place',
      description: 'Savourez nos plats dans notre restaurant chaleureux',
      time: 'Service continu',
      action: 'Réserver une table'
    },
    {
      icon: Truck,
      title: 'Livraison',
      description: 'Commandez en ligne et recevez vos plats à domicile',
      time: '30-45 min',
      action: 'Commander en ligne'
    },
    {
      icon: Clock,
      title: 'À Emporter',
      description: 'Commandez par téléphone et récupérez sur place',
      time: '15-20 min',
      action: 'Appeler maintenant'
    }
  ];

  const features = [
    'Paiement sécurisé en ligne',
    'Suivi de commande en temps réel',
    'Livraison gratuite dès 25€',
    'Programme de fidélité',
    'Commande pour plus tard',
    'Service traiteur disponible'
  ];

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-red-50 via-white to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">🛵</span>
            <span className="font-medium">Commande & Livraison</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comment Commander ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Plusieurs options s'offrent à vous pour déguster nos spécialités italiennes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 text-red-600 rounded-full mb-6">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium mb-6">
                  <Clock size={16} />
                  <span>{service.time}</span>
                </div>
                <button className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  {service.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* Main CTA Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <Star className="fill-current" size={20} />
                <span className="text-gray-600 ml-2">4.8/5 sur Google</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Commandez en Ligne
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Découvrez notre plateforme de commande en ligne simple et sécurisée. 
                Tous nos plats sont préparés à la commande avec des ingrédients frais.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href="https://pasta-da-nonna.eatbu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-red-600 text-white text-center px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
                >
                  Commander Maintenant
                </a>
                <a
                  href="tel:+33123456789"
                  className="block border-2 border-red-600 text-red-600 text-center px-8 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Appeler : 01 23 45 67 89
                </a>
              </div>

              {/* Operating Hours */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Horaires de Commande</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Mardi - Dimanche</span>
                    <span>11h30 - 14h30 / 18h30 - 22h30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lundi</span>
                    <span className="text-red-600">Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative h-64 lg:h-full">
              <img
                src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Chef préparant une pizza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-red-600">500+</div>
                  <div className="text-xs text-gray-600">Commandes/mois</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-emerald-600">30min</div>
                  <div className="text-xs text-gray-600">Livraison moyenne</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-yellow-600">4.8★</div>
                  <div className="text-xs text-gray-600">Note moyenne</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Traiteur */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Service Traiteur</h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Organisez vos événements avec nos plateaux-repas, buffets italiens et services traiteur personnalisés. 
            Idéal pour vos réunions, fêtes de famille ou événements d'entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Demander un Devis
            </button>
            <a
              href="tel:+33123456789"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;