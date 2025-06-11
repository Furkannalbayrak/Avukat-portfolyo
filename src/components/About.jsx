import React from 'react';
import { FaGraduationCap, FaGavel, FaCertificate, FaUserTie, FaBalanceScale, FaBookOpen, FaIdCard, FaUsers, FaTrophy } from 'react-icons/fa';
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

              <div className="about-container-firstDiv md:w-1/2 w-full text-lg">
                <p className='text-3xl mb-8'>
                  Av. Beyza ALBAYRAK
                </p>
                <p className="mb-4">
                  <span className="font-bold text-indigo-700"></span> Kocaeli Üniversitesi Hukuk Fakültesi mezunudur. 2015 yılından bu yana Karaman’da kurucusu olduğu <span className="italic">Boylu Hukuk Bürosu</span> bünyesinde serbest avukatlık yapmaktadır.
                </p>
                <p className="mb-4">
                  Ceza Hukuku, Aile Hukuku, Tazminat Hukuku ve Gayrimenkul Hukuku başta olmak üzere, çeşitli hukuk alanlarında bireylere ve kurumlara danışmanlık ve dava takibi hizmetleri sunmaktadır.
                </p>
                <p>
                  <span className="font-semibold text-indigo-800">Boylu Hukuk Bürosu</span>, avukatlık mesleğini etik değerlere bağlı kalarak yürütmeyi, her müvekkiline şeffaf, özenli ve etkin bir hukuki destek sunmayı ilke edinmiştir. Hizmet anlayışımız, müvekkil ile güvene dayalı sağlam bir iletişim kurmak ve her aşamada çözüm odaklı yaklaşmaktır.
                </p>
              </div>

              <div className="about-container-secondDiv">
                <img
                  src="https://st.depositphotos.com/1059926/4220/i/450/depositphotos_42200235-stock-photo-justice-statue-isolated-on-white.jpg"
                  alt="Avukat Beyza Albayrak"
                  className='hidden lg:block'
                />
              </div>

            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-9/12">
              {/* Eğitim Kartı */}
              <div className="transition-all duration-300 transform hover:scale-105 focus-within:scale-105">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl focus-within:shadow-xl transition duration-200 hover:bg-blue-50 ring-1 ring-gray-200 hover:ring-blue-400 focus-within:ring-blue-500 p-6">
                  <h3 className="text-2xl font-semibold mb-6 ">Eğitim</h3>
                  <div className="space-y-5 ">
                    <div className="flex items-start  transition duration-150 hover:translate-x-4">
                      <FaGraduationCap className="text-3xl text-blue-500 mr-4" />
                      <div >
                        <h4 className="font-medium">Hukuk Fakültesi</h4>
                        <p className="text-gray-600">Kocaeli Üniversitesi</p>
                      </div>
                    </div>
                    <div className="flex items-start  transition duration-150 hover:translate-x-4 ">
                      <FaBookOpen className="text-3xl text-blue-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Avukatlık Stajı</h4>
                        <p className="text-gray-600">İstanbul Barosu</p>
                      </div>
                    </div>
                    <div className="flex items-start  transition duration-150 hover:translate-x-4">
                      <FaIdCard className="text-3xl text-blue-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Baro Üyeliği</h4>
                        <p className="text-gray-600">İstanbul Barosu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deneyim Kartı */}
              <div className="transition-all duration-300 transform hover:scale-105 focus-within:scale-105">
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl focus-within:shadow-xl transition duration-200 hover:bg-blue-50 ring-1 ring-gray-200 hover:ring-blue-400 focus-within:ring-blue-500 p-6">
                  <h3 className="text-2xl font-semibold mb-6">Deneyim</h3>
                  <div className="space-y-5">
                    <div className="flex items-start transition duration-150 hover:translate-x-4">
                      <FaBalanceScale className="text-3xl text-blue-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Avukatlık</h4>
                        <p className="text-gray-600">2+ Yıllık deneyim</p>
                      </div>
                    </div>
                    <div className="flex items-start  transition duration-150 hover:translate-x-4">
                      <FaUsers className="text-3xl text-blue-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Hukuki Danışmanlık</h4>
                        <p className="text-gray-600">1000+ Müşteri</p>
                      </div>
                    </div>
                    <div className="flex items-start  transition duration-150 hover:translate-x-4">
                      <FaTrophy className="text-3xl text-blue-500 mr-4" />
                      <div>
                        <h4 className="font-medium">Dava Başarıları</h4>
                        <p className="text-gray-600">200+ Başarılı davalar</p>
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
