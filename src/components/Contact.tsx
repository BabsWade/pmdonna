import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Send,
  CheckCircle,
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Centre commercial Neptuna, RN8, Av. de Violési, 13320 Bouc-Bel-Air, France',
      link: 'https://maps.app.goo.gl/y28JK3uBEN6PHsVC8',
      linkText: 'Voir sur Google Maps',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 6 72 12 84 43',
      link: 'tel:+33672128443',
      linkText: 'Appeler maintenant',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Pastadanonna13@gmail.com',
      link: 'mailto:Pastadanonna13@gmail.com',
      linkText: 'Envoyer un email',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: `Mardi–Samedi : 10h00–19h30\nDimanche : 10h00–13h00\nLundi : Fermé`,
      link: null,
      linkText: 'Fermé le lundi',
    },
  ];

  const socialLinks = [
    {
      name: 'Google Business',
      url: 'https://g.co/kgs/UrHYd7K',
      icon: '🏪',
      description: 'Voir nos avis Google',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pastadanonna.mia/',
      icon: '📸',
      description: 'Suivez-nous sur Instagram',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 bg-[#fdfaf6] transition-opacity duration-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#008C45] text-white rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">📍</span>
            <span className="font-medium">Contactez-Nous</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Venez Nous Voir !
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et prendre vos réservations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1 space-y-8">
            {/* Coordonnées */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#CD212A] text-white rounded-full flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line mb-2">{info.content}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[#008C45] hover:underline text-sm font-medium"
                          >
                            {info.linkText}
                          </a>
                        ) : (
                          <span className="text-[#008C45] text-sm font-medium">{info.linkText}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Suivez-Nous</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-[#CD212A] transition-colors">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-600">{social.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Widget Avis Google */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="text-yellow-400 fill-current" size={24} />
                <span className="font-bold text-xl">4.9/5</span>
                <span className="text-gray-600">sur Google</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Plus de 150 avis clients nous font confiance
              </p>
              <a
                href="https://g.co/kgs/UrHYd7K"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#008C45] hover:underline text-sm font-medium"
              >
                Voir tous les avis →
              </a>
            </div>
          </div>

          {/* Formulaire + Carte */}
          <div className="lg:col-span-2 space-y-8">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="text-emerald-600" size={24} />
                  <span className="text-emerald-700 font-medium">
                    Merci ! Votre message a été envoyé avec succès.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Nom complet *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CD212A] transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CD212A] transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CD212A] transition-all"
                  />
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CD212A] transition-all"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="reservation">Réservation</option>
                    <option value="traiteur">Service traiteur</option>
                    <option value="commande">Commande spéciale</option>
                    <option value="feedback">Avis/Suggestion</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Votre message *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#CD212A] transition-all resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#CD212A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#a0171f] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Notre Emplacement</h3>
                <p className="text-gray-600">
                  Centre commercial Neptuna, RN8, Av. de Violési, 13320 Bouc-Bel-Air
                </p>
              </div>
              <div className="h-64 bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.215541402854!2d5.3946586123334885!3d43.440527870992376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9933bcbccfdd1%3A0x2f6759049c2afad3!2sPASTA%20DA%20NONNA%20MIA!5e1!3m2!1sfr!2ssn!4v1754394676126!5m2!1sfr!2ssn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
