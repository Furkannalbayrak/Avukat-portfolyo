import React from 'react';
import { Helmet } from 'react-helmet';

const KurumsalDanismanlik = () => {
  return (
    <>
      <Helmet>
        <title>Av. Beyza Albayrak | Kurumsal Danışmanlık - Strateji ve Risk Yönetimi</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/kurumsal-danismanlik" />
        <meta
          name="description"
          content="Kurumsal strateji, risk yönetimi, etik ve yönetim danışmanlığı alanlarında profesyonel destek sunuyoruz."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kurumsal Danışmanlık - Strateji ve Risk Yönetimi | Av. Beyza Albayrak" />
        <meta property="og:description" content="Kurumsal strateji, risk yönetimi, etik ve yönetim danışmanlığı alanlarında profesyonel destek sunuyoruz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/kurumsal-danismanlik" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[32px] lg:text-6xl md:text-5xl font-poppins text-white mb-4">
              Kurumsal Danışmanlık
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
                  <li>Kurumsal strateji danışmanlığı</li>
                  <li>Risk yönetimi ve analizi</li>
                  <li>Kurumsal etik danışmanlığı</li>
                  <li>Kurumsal yönetim danışmanlığı</li>
                  <li>Kurumsal strateji planlama</li>
                  <li>Kurumsal risk yönetimi</li>
                  <li>Kurumsal etik politikaları</li>
                  <li>Kurumsal yönetim sistemleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KurumsalDanismanlik;
