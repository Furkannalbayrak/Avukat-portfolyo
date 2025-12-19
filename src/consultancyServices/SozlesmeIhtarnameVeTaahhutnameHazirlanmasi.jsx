import React from 'react';
import { Helmet } from 'react-helmet';

const SozlesmeIhtarnameVeTaahhutnameHazirlanmasi = () => {
  return (
    <>
      <Helmet>
        <title>Av. Beyza Albayrak | Sözleşme, İhtarname ve Taahhütname Hazırlanması</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/sozlesme-ihtarname-ve-taahhutname-hazirlanmasi" />
        <meta
          name="description"
          content="Sözleşme hazırlama, ihtarname gönderme ve taahhütname düzenleme alanlarında profesyonel hukuki destek sağlıyoruz."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Sözleşme, İhtarname ve Taahhütname Hazırlanması | Av. Beyza Albayrak" />
        <meta property="og:description" content="Sözleşme hazırlama, ihtarname gönderme ve taahhütname düzenleme alanlarında profesyonel hukuki destek sağlıyoruz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/sozlesme-ihtarname-ve-taahhutname-hazirlanmasi" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full xl:-translate-y-40 lg:-translate-y-32 md:-translate-y-28 -translate-y-24 flex flex-col lg:gap-24 md:gap-10 gap-12">
          <div className="text-center">
            <h2 className="text-[25px] md:text-[38px] lg:text-5xl xl:text-6xl font-poppins text-white mb-4 lg:space-y-1 -space-y-3">
              <p>Sözleşme, İhtarname ve</p>
              <p>Taahhütname Hazırlanması</p>
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Hizmetlerimiz</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Sözleşme hazırlama ve düzenleme hizmetleri</li>
                  <li>İhtarname hazırlama ve gönderme</li>
                  <li>Taahhutname hazırlama ve düzenleme</li>
                  <li>İş hukuku sözleşmeleri</li>
                  <li>Ticaret hukuku sözleşmeleri</li>
                  <li>Kira ve kiralık sözleşmeleri</li>
                  <li>İş ortaklığı sözleşmeleri</li>
                  <li>Şirket kurma sözleşmeleri</li>
                  <li>Mirasa ilişkin sözleşmeler</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SozlesmeIhtarnameVeTaahhutnameHazirlanmasi;
