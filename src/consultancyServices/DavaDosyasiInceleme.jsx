import React from 'react';
import { Helmet } from 'react-helmet';

const DavaDosyasiInceleme = () => {
  return (
    <>
      <Helmet>
        <title>Av. Beyza Albayrak | Dava Dosyası İnceleme - Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/dava-dosyasi-inceleme" />
        <meta
          name="description"
          content="Dava dosyalarınızın analizi, risk değerlendirmesi ve stratejik hukuki önerilerle sürecinizi profesyonelce yönetin."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Dava Dosyası İnceleme - Hukuki Danışmanlık | Av. Beyza Albayrak" />
        <meta property="og:description" content="Dava dosyalarınızın analizi, risk değerlendirmesi ve stratejik hukuki önerilerle sürecinizi profesyonelce yönetin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/dava-dosyasi-inceleme" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[29px] lg:text-6xl md:text-[46px] font-poppins text-white mb-4">
              Dava Dosyası İnceleme
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Hizmetlerimiz</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Dosya inceleme, görüş bildirme ve yönlendirme</li>
                  <li>Mevzuata aykırılık ve eksiklikkerlin tespiti</li>
                  <li>Tarafların hak ve yükümlülüklerin değerlendirilmesi</li>
                  <li>Delil durumunun değerlendirilmesi</li>
                  <li>Ayrıntılı hukuki görüş hazırlanması ve rapor verilmesi</li>
                  <li>Alternatif çözüm önerilerinin sunulması</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DavaDosyasiInceleme;
