import React from 'react';

function AboutPage() {
  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto w-11/12 px-4 lg:-translate-y-28 -translate-y-20">

        <div className='flex flex-col lg:gap-28 gap-12'>
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-poppins text-white mb-4">
              Hakkımda
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 mx-auto">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Kimim?</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Merhaba, ben Av. [İsim Soyisim]. 2008 yılında İstanbul Üniversitesi Hukuk Fakültesi'nden mezun olduktan sonra, aynı yıl İstanbul Barosu'na kaydolarak avukatlık mesleğine başladım. 15 yılı aşkın süren meslek hayatımda, hukukun farklı alanlarında uzmanlaşarak müvekkillerime kapsamlı hizmet sunuyorum.
                </p>
                <p>
                  Avukatlık sadece bir meslek değil, benim için bir tutku ve sorumluluk. Her müvekkilimle kurduğum güven ilişkisini koruyarak, onların hukuki problemlerine en uygun çözümleri bulmaya odaklanıyorum. Hukuki süreçlerin karmaşıklığını basitleştirerek, müvekkillerimin anlayabileceği şekilde açıklama yapmaya özen gösteriyorum.
                </p>
                <p>
                  Meslek hayatım boyunca edindiğim deneyimlerle, her davanın kendine özgü olduğunu ve özel bir yaklaşım gerektirdiğini öğrendim. Bu nedenle her müvekkilime kişiselleştirilmiş hukuki danışmanlık hizmeti sunuyorum.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Uzmanlık Alanlarım</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-700">Ceza Hukuku</h4>
                  <p className="text-sm text-gray-600">Ceza davalarında savunma ve müşteki vekilligi</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-700">Ticaret Hukuku</h4>
                  <p className="text-sm text-gray-600">Şirket kuruluşu, sözleşmeler ve ticari uyuşmazlıklar</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-700">Borçlar Hukuku</h4>
                  <p className="text-sm text-gray-600">Sözleşme hukuku ve tazminat davalarında uzmanlaşma</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-700">Aile Hukuku</h4>
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
            <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Başarılı Dava</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">1000+</h3>
            <p className="text-gray-600">Memnun Müvekkil</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🕐</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">15+</h3>
            <p className="text-gray-600">Yıl deneyim</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">%95</h3>
            <p className="text-gray-600">Başarı Oranı</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Neden Benimle Çalışmalısınız?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 rounded-full p-3 mr-4">
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
                <div className="bg-green-500 rounded-full p-3 mr-4">
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
                <div className="bg-purple-500 rounded-full p-3 mr-4">
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
                <div className="bg-orange-500 rounded-full p-3 mr-4">
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
                <div className="bg-teal-500 rounded-full p-3 mr-4">
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
                <div className="bg-pink-500 rounded-full p-3 mr-4">
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

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Hukuki Desteğe İhtiyacınız mı Var?</h2>
          <p className="text-lg mb-6 opacity-90">
            Deneyimim ve uzmanlığımla, hukuki problemlerinize en uygun çözümleri bulmanıza yardımcı olacağım.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Hemen İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;