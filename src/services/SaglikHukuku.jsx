import React from 'react';
import { Helmet } from 'react-helmet';

const SaglikHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Sağlık Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/saglik-hukuku" />
        <meta
          name="description"
          content="Tıbbi muamele, ilaç ve tedavi hakları ile hastane hakları hakkında kapsamlı hukuki destek."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sağlık Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık" />
        <meta property="og:description" content="Tıbbi muamele, ilaç ve tedavi hakları ile hastane hakları hakkında kapsamlı hukuki destek." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/saglik-hukuku" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[41px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Sağlık Hukuku
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
                  <li>Sağlık hizmetinde ihmal veya hatalı uygulamalar</li>
                  <li>Maddi ve manevi tazminat davası</li>
                  <li>Malpraktis davası</li>
                  <li>Sağlık personeli, disiplin ve soruşturma işlemleri</li>
                  <li>Sağlık personeli atama ve görevlendirme işlemleri</li>
                  <li>Denetim ve lisans kontrolleri</li>
                  <li>Hasta hakları ve şikayet başvuruları</li>
                  <li>Tedavi ve hizmet sözleşmeleri</li>
                  <li>Tıbbi muamele hakları</li>
                  <li>İlaç ve tedavi hakları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaglikHukuku;
