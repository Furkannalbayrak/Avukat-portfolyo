import React from 'react';
import { FaGraduationCap, FaGavel, FaCertificate, FaUserTie } from 'react-icons/fa';
import "../css/about.css"

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4 md:px-20">
            <h2 className="text-4xl md:text-5xl font-poppins mb-6 tracking-wide border-b-2 border-gray-300 pb-4">
              Hakkımda
            </h2>
            <div className="about-container flex flex-col md:flex-row items-center justify-center gap-10 text-gray-700 max-w-5xl mx-auto leading-relaxed">

              <div className="about-container-firstDiv md:w-1/2 text-lg font-medium">
                <p className="mb-4">
                  Avukat <span className="font-bold text-indigo-700">Beyza ALBAYRAK</span>, Kocaeli Üniversitesi Hukuk Fakültesi mezunudur. 2015 yılından bu yana Karaman’da kurucusu olduğu <span className="italic">Boylu Hukuk Bürosu</span> bünyesinde serbest avukatlık yapmaktadır.
                </p>
                <p className="mb-4">
                  Ceza Hukuku, Aile Hukuku, Tazminat Hukuku ve Gayrimenkul Hukuku başta olmak üzere, çeşitli hukuk alanlarında bireylere ve kurumlara danışmanlık ve dava takibi hizmetleri sunmaktadır.
                </p>
                <p>
                  <span className="font-semibold text-indigo-800">Boylu Hukuk Bürosu</span>, avukatlık mesleğini etik değerlere bağlı kalarak yürütmeyi, her müvekkiline şeffaf, özenli ve etkin bir hukuki destek sunmayı ilke edinmiştir. Hizmet anlayışımız, müvekkil ile güvene dayalı sağlam bir iletişim kurmak ve her aşamada çözüm odaklı yaklaşmaktır.
                </p>
              </div>

              <div className="about-container-secondDiv md:w-1/2">
                <img
                  src="https://i.pinimg.com/236x/94/63/56/946356dabae411d1cf97997d861fb703.jpg"
                  alt="Avukat Abdullah Boylu"
                  className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
                />
              </div>

            </div>
          </div>

          <div className=' flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-10/12">
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
      </div>
    </section>
  );
};

export default About;
