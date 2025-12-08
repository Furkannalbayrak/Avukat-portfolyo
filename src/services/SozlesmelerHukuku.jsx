import React from 'react';
import { Helmet } from 'react-helmet';

const SozlesmelerHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Sözleşmeler Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/sozlesmeler-hukuku" />
        <meta
          name="description"
          content="Çeşitli sözleşme türleri, hakları, sorumlulukları ve sözleşme davaları hakkında detaylı hukuki bilgi ve danışmanlık."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sözleşmeler Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık" />
        <meta property="og:description" content="Çeşitli sözleşme türleri, hakları, sorumlulukları ve sözleşme davaları hakkında detaylı hukuki bilgi ve danışmanlık." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/sozlesmeler-hukuku" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-1">
          <div className="text-center mb-12">
            <h2 className="text-[33px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Sözleşmeler Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">İlgili Alanlar</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Sözleşme kurulması</li>
                  <li>Satış, hizmet ve kira sözleşmeleri</li>
                  <li>İş ve eser sözleşmeleri</li>
                  <li>Temsil ve vekalet sözleşmeleri</li>
                  <li>Sözleşme değişiklikleri ve feshi</li>
                  <li>Sözlşemeye dayalı hak ve borçlar</li>
                  <li>Tek taraflı hukuki işlemler</li>
                  <li>Alacak ve tazminat davası</li>
                  <li>Sözleşmeye dayalı ayıp davası</li>
                  <li>Temerrüt ve haksız ifa halleri</li>
                  <li>Ayıp ve gecikme halleri</li>
                  <li>Cezai şart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SozlesmelerHukuku;
