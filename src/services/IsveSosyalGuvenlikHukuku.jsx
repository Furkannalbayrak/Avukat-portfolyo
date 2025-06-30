import React from 'react';
import { Helmet } from 'react-helmet';

const IsveSosyalGuvenlikHukuku = () => {
  return (
    <>
      <Helmet>
        <title>İş ve Sosyal Güvenlik Hukuku - Hukuk Bürosu</title>
        <meta
          name="description"
          content="İş hakları, sosyal güvenlik hakları, iş kazası ve meslek hastalığı konularında hukuki danışmanlık."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-40 -translate-y-28 flex flex-col lg:gap-12">
          <div className="text-center mb-12">
            <h2 className="text-[38px] md:text-5xl lg:text-6xl font-poppins text-white mb-4 md:space-y-1 -space-y-3">
                <p>İş ve Sosyal</p>
                <p>Güvenlik Hukuku</p>
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">İş ve Sosyal Hakları</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>İş hakları ve sorumluluklar</li>
                  <li>Sosyal güvenlik hakları</li>
                  <li>İş ve meslek hakları</li>
                  <li>İş kazası ve meslek hastalığı</li>
                  <li>İşten ayrılış ve emeklilik</li>
                  <li>İşyeri düzenlemeleri ve düzenlemeler</li>
                  <li>İşçilik hakları ve koruma</li>
                  <li>İşyeri güvenliği ve sağlık</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsveSosyalGuvenlikHukuku;
