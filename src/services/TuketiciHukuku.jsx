import React from 'react';
import { Helmet } from 'react-helmet';

const TuketiciHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Tüketici Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/tuketici-hukuku" />
        <meta
          name="description"
          content="Tüketici hakları, koruma ve ilgili tüm hukuki işlemler hakkında kapsamlı bilgiler."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Tüketici Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık" />
        <meta property="og:description" content="Tüketici hakları, koruma ve ilgili tüm hukuki işlemler hakkında kapsamlı bilgiler." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/tuketici-hukuku" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[40px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Tüketici Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Tüketici Hakları</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Ürün veya hizmetin değiştirilmesi</li>
                  <li>Ürün veya hizmetin onarılması</li>
                  <li>Ücretin iadesi talebi</li>
                  <li>Garanti kapsamında işlem yapma</li>
                  <li>Tüketici hakem heyetine şikayet başvurusu</li>
                  <li>Mesafeli sözleşmeler ve internet alışverişleri</li>
                  <li>Ön ödemeli hizmetler ve sözleşmeler</li>
                  <li>Kampanya, indirim ve reklamlarla ilgili sözleşmeler</li>
                  <li>Ayıplı mal bildirimi ve iade işlemleri</li>
                  <li>Cayma hakkının kullanımı</li>
                  <li>İade, değişim ve bedel indirimi davası</li>
                  <li>Sözleşmeden doğan tazminat davası</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TuketiciHukuku;
