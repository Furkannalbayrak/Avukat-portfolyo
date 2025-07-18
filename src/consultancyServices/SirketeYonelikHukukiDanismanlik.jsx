import React from 'react';
import { Helmet } from 'react-helmet';

const SirketeYonelikHukukiDanismanlik = () => {
  return (
    <>
      <Helmet>
        <title>Şirkete Yönelik Hukuki Danışmanlık - Profesyonel Destek</title>
        <meta
          name="description"
          content="Şirket kurulumu, yönetimi ve iş hukuku alanlarında uzman hukuki danışmanlık hizmetleri sunuyoruz."
        />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-40 -translate-y-28 flex flex-col lg:gap-12">
          <div className="text-center mb-12">
            <h2 className="text-[36px] lg:text-6xl md:text-5xl font-poppins text-white mb-4 md:space-y-1 -space-y-4">
              <p>Şirkete Yönelik</p>
              <p>Hukuki Danışmanlık</p>
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0 ">
              <div className='md:ml-10'>
                <div className="flex w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Hizmetlerimiz</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Şirket kurulması ve organizasyonu</li>
                  <li>Şirket yönetim mekanizmaları</li>
                  <li>Şirket içi hukuki danışmanlık</li>
                  <li>İş hukuku danışmanlığı</li>
                  <li>Şirket anlaşmaları</li>
                  <li>Mevzuat uyumu</li>
                  <li>Şirket içi eğitimler</li>
                  <li>İş yerinde hukuki danışmanlık</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SirketeYonelikHukukiDanismanlik;
