import React from 'react';
import { FaGraduationCap, FaGavel, FaCertificate, FaUserTie } from 'react-icons/fa';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Hakkımda
            </h2>
            <p className="text-gray-600">
              Profesyonel hukukçu olarak 15 yıldan beri hukuki konularda danışmanlık hizmeti veriyorum. 
              İstanbul Barosu'nda kayıtlı avukat olarak hukuki konularda profesyonel danışmanlık hizmeti sunmaktayım.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Eğitim</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaGraduationCap className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Hukuk Fakültesi</h4>
                      <p className="text-gray-600">İstanbul Üniversitesi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCertificate className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Avukatlık Eğitimi</h4>
                      <p className="text-gray-600">İstanbul Barosu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserTie className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Baro Üyeliği</h4>
                      <p className="text-gray-600">İstanbul Barosu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Deneyim</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaGavel className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Avukatlık</h4>
                      <p className="text-gray-600">15+ Yıllık deneyim</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaCertificate className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Danışmanlık</h4>
                      <p className="text-gray-600">1000+ Müşteri</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaUserTie className="text-2xl text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Referanslar</h4>
                      <p className="text-gray-600">500+ Başarılı davalar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
