import React from 'react';
import { Helmet } from 'react-helmet';

const NoterIsleriDanismanligi = () => {
  return (
    <>
      <Helmet>
        <title>Noter İşleri Danışmanlığı - Hukuki Destek ve Yönetim</title>
        <meta
          name="description"
          content="Noterlik işlemlerinizin yönetimi, danışmanlığı ve hukuki takibi için profesyonel çözümler sunuyoruz."
        />
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
                  <li>Noterlik işlemlerinin yönetimi</li>
                  <li>Noterlik danışmanlığı</li>
                  <li>Noterlik işlemlerinin planlanması</li>
                  <li>Noterlik arşiv yönetimi</li>
                  <li>Noterlik işlemlerinin optimizasyonu</li>
                  <li>Noterlik hukuki danışmanlığı</li>
                  <li>Noterlik işlemlerinin takibi</li>
                  <li>Noterlik raporlama</li>
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
