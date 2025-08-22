import React from 'react';
import { Helmet } from 'react-helmet';

const TicaretHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Ticaret Hukuku - Şirket ve İşletme Hakları</title>
        <meta
          name="description"
          content="Şirket kurulumu, işletme açılışı, ticari borçlanma, sözleşmeler ve ticari haklar hakkında detaylı bilgiler."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[40px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Ticaret Hukuku
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
                  <li>Şirket kuruluşu</li>
                  <li>Şirket sözleşmesi ve değişiklikler</li>
                  <li>Yönetim, temsil ve hissedar işlemleri</li>
                  <li>Pay devri, sermaye artırımı ve temettü dağıtımı</li>
                  <li>Tasfiye ve sona erme işlemleri</li>
                  <li>Ticari vekillik ve acentelik işlemleri</li>
                  <li>Kıymetli evrak düzenleme (bono, poliçe, çek, senet)</li>
                  <li>Satış, hizmet, komisyon ve taşıma sözleşmeleri</li>
                  <li>Alacak ve tazminat davaları</li>
                  <li>Sigorta tazminat davaları</li>
                  <li>Şirketin fesi ve iptali davası</li>
                  <li>Şirket kurulumu ve işletme açılışı</li>
                  <li>İşletme devralma ve satış işlemleri</li>
                  <li>Ticari borçlanma işlemleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TicaretHukuku;
