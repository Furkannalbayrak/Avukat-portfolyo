import React from 'react';
import { Helmet } from 'react-helmet';

const AlternatifCozumOnerileri = () => {
  return (
    <>
      <Helmet>
        <title>Alternatif Çözüm Önerileri - Hukuki Danışmanlık</title>
        <meta
          name="description"
          content="Mediation, Arbitration, Negotiation ve diğer alternatif çözüm hizmetleriyle hukuki süreçlerinizi kolaylaştırıyoruz."
        />
      </Helmet>
      
      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-12 gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[27px] md:text-[42px] lg:text-[56px] font-poppins text-white mb-4">
              Alternatif Çözüm Önerileri
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
                  <li>Mütala almak</li>
                  <li>Uzman görüşü bildirmek</li>
                  <li>Aarabuluculuk ve uzlaştırma</li>
                  <li>İdari kurumlara başvuru</li>
                  <li>Tahkim heyetine başvuru</li>
                  <li>Tüketici heyetine başvuru</li>
                  <li>İhtiyati tedbir ve haciz önlemleri</li>
                  <li>Koruma ve uzaklaştırma tedbirleri</li>
                  <li>Alternatif çözüm stratejileri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AlternatifCozumOnerileri;
