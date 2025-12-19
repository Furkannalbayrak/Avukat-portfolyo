import React from 'react';
import { Helmet } from 'react-helmet';

const NoterIsleriDanismanligi = () => {
  return (
    <>
      <Helmet>
        <title>Av. Beyza Albayrak | Noter İşleri Danışmanlığı - Hukuki Destek ve Yönetim</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/noter-isleri-danismanligi" />
        <meta
          name="description"
          content="Noterlik işlemlerinizin yönetimi, danışmanlığı ve hukuki takibi için profesyonel çözümler sunuyoruz."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Noter İşleri Danışmanlığı - Hukuki Destek ve Yönetim | Av. Beyza Albayrak" />
        <meta property="og:description" content="Noterlik işlemlerinizin yönetimi, danışmanlığı ve hukuki takibi için profesyonel çözümler sunuyoruz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/noter-isleri-danismanligi" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[29px] lg:text-6xl md:text-[45px] font-poppins text-white mb-4">
              Noter İşleri Danışmanlığı
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0 ">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Hizmetlerimiz</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Sözleşmelerin düzenlenmesi ve onaylanması</li>
                  <li>Vekaletname işlemleri</li>
                  <li>Taahhüt ve beyan işlemleri</li>
                  <li>Tespit işlemleri</li>
                  <li>Vasiyetname ve aile hukuku işlemleri</li>
                  <li>Ticari ve şirket işlemleri</li>
                  <li>Çeviri ve belge onay işlemleri</li>
                  <li>Devir işlemleri</li>
                  <li>İhtarname gönderilmesi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NoterIsleriDanismanligi;
