import React from 'react';
import { Helmet } from 'react-helmet';

const SozlesmeVeHukukiBelgelerinAnalizi = () => {
  return (
    <>
      <Helmet>
        <title>Sözleşme ve Hukuki Belgelerin Analizi - Profesyonel Hukuki Destek</title>
        <meta
          name="description"
          content="Sözleşme ve hukuki belgelerin detaylı analizi, risk değerlendirmesi ve yasal uyum kontrolü hizmetleri sunuyoruz."
        />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-40 -translate-y-28 flex flex-col lg:gap-24 gap-10">
          <div className="text-center">
            <h2 className="text-[36px] lg:text-6xl md:text-5xl font-poppins text-white mb-4 md:space-y-1 -space-y-4">
              <p>Sözleşme ve Hukuki</p>
              <p>Belgelerin Analizi</p>
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
                  <li>Sözleşme incelemesi ve yorumlanması</li>
                  <li>Hukuki belgelerin detaylı analizi</li>
                  <li>Risk analizi ve değerlendirme</li>
                  <li>Yasal uyum kontrolü</li>
                  <li>Sözleşme ve belge iyileştirmesi</li>
                  <li>Yasal risk yönetimi</li>
                  <li>Detaylı değerlendirme raporları</li>
                  <li>Hukuki sorun çözümleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SozlesmeVeHukukiBelgelerinAnalizi;
