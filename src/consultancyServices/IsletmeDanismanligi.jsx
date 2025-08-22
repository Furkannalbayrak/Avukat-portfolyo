import React from 'react';
import { Helmet } from 'react-helmet';

const IsletmeDanismanligi = () => {
  return (
    <>
      <Helmet>
        <title>İşletme Danışmanlığı - Profesyonel Stratejik Destek</title>
        <meta
          name="description"
          content="İşletme analizi, stratejik planlama ve risk yönetimi ile işinizi geliştirmek için uzman danışmanlık hizmetleri sunuyoruz."
        />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[32px] lg:text-6xl md:text-5xl font-poppins text-white mb-4">
              İşletme Danışmanlığı
            </h2>
          </div>

          <div className="w-[90%] mx-auto  max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0 ">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Hizmetlerimiz</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Mevzuata uygunluk denetimleri</li>
                  <li>Sözleşme hazırlama ve denetleme</li>
                  <li>İş hukuku ve çalışan ilişkileri</li>
                  <li>Ticari uyuşmazlıkların çözümü</li>
                  <li>Alacak tahsili, borç yönetimi</li>
                  <li>Hukuki süreçlerde temsil</li>
                  <li>İşletme kuruluşundaki sürece destek</li>
                  <li>Şirket içi politik ve proesdürlerin hazırlanması</li>
                  <li>Hukuki risk raporlaması ve yönetime sunulması</li>
                  <li>İşletme analizi ve değerlendirme</li>
                  <li>Stratejik planlama danışmanlığı</li>
                  <li>İşletme iyileştirme danışmanlığı</li>   
                  <li>İşletme iyileştirme planları</li>
                  <li>İşletme yönetim danışmanlığı</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IsletmeDanismanligi;
