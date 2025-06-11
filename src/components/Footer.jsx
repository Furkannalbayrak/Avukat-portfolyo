import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-2xl text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-400">Zuhuratbaba Mah. İncirli Cad.</p>
                  <p className="text-gray-400">No:43/12 Bakırköy / İSTANBUL</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-2xl text-blue-400 mr-3" />
                <p className="text-gray-400">0543 223 84 41</p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-2xl text-blue-400 mr-3" />
                <p className="text-gray-400">avbeyzaalbayrak@gmail.com</p>
              </div>
              <div className="flex items-start">
                <FaClock className="text-2xl text-blue-400 mr-3" />
                <p className="text-gray-400">Pazartesi-Cuma: 09:00-18:00</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">Anasayfa</li>
              <li className="text-gray-400 hover:text-white">Hakkımda</li>
              <li className="text-gray-400 hover:text-white">Faaliyet Alanlarım</li>
              <li className="text-gray-400 hover:text-white">Makaleler</li>
              <li className="text-gray-400 hover:text-white">İletişim</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Baro Bilgileri</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white">İstanbul Barosu</li>
              <li className="text-gray-400 hover:text-white">Baro Üyeliği</li>
              <li className="text-gray-400 hover:text-white">Etim</li>
              <li className="text-gray-400 hover:text-white">Referanslar</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Av. Beyza Albayrak. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
