import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 grid max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className=' flex flex-col md:items-center items-start mb-12 md:mb-0 md:pl-12 xl:pl-0 ml-6 lg:ml-0'>
            <h3 className="text-2xl font-semibold md:mb-6 mb-4">İletişim Bilgileri</h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-3xl text-blue-400 mr-4" />
                <div>
                  <p className="text-gray-400">Zuhuratbaba Mah. İncirli Cad.</p>
                  <p className="text-gray-400">No:43/12 Bakırköy / İSTANBUL</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-3xl text-blue-400 mr-4" />
                <p className="text-gray-400">0543 223 84 41</p>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-3xl text-blue-400 mr-4" />
                <p className="text-gray-400">avbeyzaalbayrak@gmail.com</p>
              </div>
              <div className="flex items-start">
                <FaClock className="text-3xl text-blue-400 mr-4" />
                <p className="text-gray-400">Pazartesi-Cuma: 09:00-18:00</p>
              </div>
            </div>
          </div>

          <div className='text-lg flex flex-col md:items-center items-start mb-12 md:mb-0 ml-6 lg:ml-0'>
            <h3 className="text-2xl font-semibold md:mb-6 mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white  w-auto md:text-center text-left cursor-pointer">Anasayfa</li>
              <li className="text-gray-400 hover:text-white  w-auto md:text-center text-left cursor-pointer">Hakkımda</li>
              <li className="text-gray-400 hover:text-white  w-auto md:text-center text-left cursor-pointer">Faaliyet Alanlarım</li>
              <li className="text-gray-400 hover:text-white  w-auto md:text-center text-left cursor-pointer">Makaleler</li>
              <li className="text-gray-400 hover:text-white  w-auto md:text-center text-left cursor-pointer">İletişim</li>
            </ul>
          </div>

          <div className=' flex flex-col md:items-center items-start md:pr-8 xl:pr-0 ml-6 lg:ml-0'>
            <h3 className="text-2xl font-semibold md:mb-6 mb-4 ">Sosyal Medya</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaWhatsapp className="text-4xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-4xl" />
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
