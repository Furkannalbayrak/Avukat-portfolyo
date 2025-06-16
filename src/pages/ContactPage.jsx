import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form gönderildi');
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto w-11/12 px-4 lg:-translate-y-28 -translate-y-20">
        <div className="flex flex-col lg:gap-28 gap-14">

          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-poppins text-white mb-4">
              İletişim
            </h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-3 mb-8">
                <FaMapMarkerAlt className="text-blue-600" /> İletişim Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 shadow-md rounded-xl p-4  border-l-4 hover:border-blue-500 transition duration-100">
                  <FaEnvelope className="text-2xl text-blue-600" />
                  <div>
                    <p className="text-gray-700 font-medium text-lg">E-posta</p>
                    <p className="text-gray-800 text-md">avbeyzaalbayrak@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shadow-md rounded-xl  p-4  border-l-4 hover:border-green-500 transition duration-100">
                  <FaPhone className="text-2xl text-blue-600" />
                  <div>
                    <p className="text-gray-700 font-medium text-lg">Telefon</p>
                    <p className="text-gray-800 text-md">+90 0543 223 84 41</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 shadow-md rounded-xl  p-4  border-l-4 hover:border-red-500 transition duration-100">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
                  <div>
                    <p className="text-gray-700 font-medium text-lg">Adres</p>
                    <p className="text-gray-800 text-md">
                    Zuhuratbaba Mah. İncirli Cad.<br />No:43/12 Bakırköy / İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
            </div>


            {/* İletişim formu */}
            <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-[1.02]">
              <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-3 mb-8">
                <FaEnvelope className="text-blue-600" /> Bize Ulaşın
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-md font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-md font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-md font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-md font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-all duration-200 text-lg font-semibold shadow-md"
                >
                  Gönder
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      {/* Harita bölümü */}
      <div className="w-full">
        <div className="h-[500px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.743759111754!2d28.869377575897282!3d40.987091471353466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb581a5e8d39%3A0x461b183723f240ca!2zWnVodXJhdGJhYmEsIMSwbmNpcmxpIENkLiBObzo0MyBEOjEyLCAzNDE0NyBCYWvEsXJrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1749987114549!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;