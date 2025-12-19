import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AboutPage() {

  return (
    <>

      <Helmet>
        <title>Av. Beyza Albayrak - Hakkımda | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/about" />
        <meta name="description" content="Av. Beyza Albayrak'ın uzmanlık alanları, mesleki deneyimi ve hukuki hizmet anlayışı hakkında detaylı bilgi." />
        <meta name="keywords" content="Avukat Beyza Albayrak, Hukuki Danışmanlık, Ceza Hukuku, İş Hukuku, Aile Hukuku, Miras Hukuku" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hakkımda - Av. Beyza Albayrak" />
        <meta property="og:description" content="Av. Beyza Albayrak'ın uzmanlık alanları ve mesleki deneyimi." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/about" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <section className=" bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-5  sm:px-12 lg:-translate-y-28 -translate-y-20">
          <div className='px-4'>
            <div className='flex flex-col lg:gap-28 gap-14'>
              <div className="text-center">
                <h1 className="text-5xl lg:text-6xl font-poppins text-white lg:mb-0 mb-4">
                  Hakkımda
                </h1>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-12 mx-auto">
                <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Kimdir?</h2>
                  <div className="space-y-5 text-gray-800 leading-relaxed text-[17px]">
                    <p>
                     Av. Beyza ALBAYRAK, İstanbul merkezli ofisiyle, sahip olduğu uzmanlık ve deneyimle Türk ve yabancı müvekkillerine çeşitli hukuk alanlarında en iyi şekilde temsil, dava ve danışmanlık hizmeti sunmaktadır.
                    </p>
                    <p>
                      Her dava ve müvekkil ayrı ayrı önem arz ettiğinden her hukuki olay kişiselleştirilmekte ve kendi özelinde detaylı bir şekilde değerlendirilmektedir.
                    </p>
                    <p>
                      Ceza Hukuku, Aile Hukuku, İş Hukuku, Tazminat Hukuku, Kira Hukuku, İcra ve İflas Hukuku başta olmak üzere, çeşitli hukuk alanlarında bireylere ve kurumlara danışmanlık ve dava takibi hizmetleri sunmaktadır.
                    </p>
                    <p>
                      Avukatlık mesleğini etik değerlere bağlı kalarak yürütmeyi, her müvekkiline şeffaf, özenli ve etkin bir hukuki destek sunmayı ilke edinmiştir. Hizmet anlayışı, müvekkil ile güvene dayalı sağlam bir iletişim kurmak ve her aşamada çözüm odaklı yaklaşmaktır.
                    </p>
                  </div>
                </div>

                <div className=" bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Uzmanlık Alanlarım</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4 transition duration-150 hover:translate-x-2">
                      <h4 className="font-semibold text-gray-700 text-lg">Ceza Hukuku</h4>
                      <p className="text-sm text-gray-600">Ceza davalarında savunma ve müşteki vekilligi</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4 transition duration-150 hover:translate-x-2">
                      <h4 className="font-semibold text-gray-700 text-lg">İcra ve İflas Hukuku</h4>
                      <p className="text-sm text-gray-600">Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklar</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4 transition duration-150 hover:translate-x-2">
                      <h4 className="font-semibold text-gray-700 text-lg">Borçlar ve Tazminat Hukuku</h4>
                      <p className="text-sm text-gray-600">Sözleşme hukuku ve tazminat davalarında uzmanlaşma</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4 transition duration-150 hover:translate-x-2">
                      <h4 className="font-semibold text-gray-700 text-lg">Aile ve Miras Hukuku</h4>
                      <p className="text-sm text-gray-600">Boşanma, velayet ve nafaka konularında danışmanlık</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">200+</h3>
                <p className="text-black text-lg">Başarılı Dava</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">1000+</h3>
                <p className="text-black text-lg">Memnun Müvekkil</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">5+</h3>
                <p className="text-black text-lg">Yıl deneyim</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">%93</h3>
                <p className="text-black text-lg">Başarı Oranı</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Neden Benimle Çalışmalısınız?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Kişiselleştirilmiş Yaklaşım</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Her müvekkilimin durumu farklıdır. Bu nedenle her davaya özel stratejiler geliştirip, size en uygun çözümleri sunarım.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">⚖️</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Etik ve Güvenilirlik</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Avukatlık mesleğinin etik kurallarına titizlikle uyarım. Müvekkil sırrını korur, şeffaf iletişim kurarım.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Hızlı ve Etkili Çözümler</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Zaman kaybetmeden harekete geçerim. Acil durumlarda 7/24 ulaşılabilir olmaya özen gösteririm.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">📚</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Sürekli Gelişim</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Hukuk alanındaki değişiklikleri takip ederim. Size güncel ve kapsamlı hukuki hizmet sunarım.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">💼</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Kapsamlı Hizmet</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Dava takibi, hukuki danışmanlık, sözleşme hazırlama gibi geniş yelpazede hizmet sunarım.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-l-4 border-pink-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-pink-300 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">🤝</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">İnsan Odaklı Hizmet</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Hukuki problemlerinizin yanı sıra, yaşadığınız stresi de anlayarak psikolojik destek sağlarım.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-300 to-purple-700 rounded-lg shadow-md p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Hukuki Desteğe İhtiyacınız mı Var?</h2>
              <p className="text-lg mb-6 opacity-90">
                Deneyimim ve uzmanlığımla, hukuki problemlerinize en uygun çözümleri bulmanıza yardımcı olacağım.
              </p>
              <Link to="/contact"
                className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors inline-block">
                Hemen İletişime Geçin
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default AboutPage;