import React from 'react';
import { Helmet } from 'react-helmet';

const KiraHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Kira Hukuku - Hukuki Danışmanlık</title>
        <meta
          name="description"
          content="Kira sözleşmeleri, kira bedeli, kira hakları ve kira davaları hakkında uzman hukuki destek."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[42px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Kira Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Kira İşlemleri</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Kira sözleşmeleri</li>
                  <li>Kira bedeli ve ödemeler</li>
                  <li>Kira hakları ve sorumluluklar</li>
                  <li>Kira tazminatları</li>
                  <li>Kira muameleleri</li>
                  <li>Kira düzenlemeleri</li>
                  <li>Kira davaları</li>
                  <li>Kira koruma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KiraHukuku;
