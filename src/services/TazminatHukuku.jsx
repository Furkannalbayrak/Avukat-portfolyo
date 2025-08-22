import React from 'react';
import { Helmet } from 'react-helmet';

const TazminatHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Tazminat Hukuku - Haklar ve Davalar</title>
        <meta
          name="description"
          content="Tazminat hakları, tazminat davaları, tespitler, tahsilatlar ve hukuki düzenlemeler hakkında detaylı bilgi."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[38px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Tazminat Hukuku
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
                  <li>Haksız fiil dayalı maddi ve manevi tazminat davaları</li>
                  <li>Sözleşmeye dayalı tazminat davası</li>
                  <li>Sebepsiz zenginleşmeye dayalı istirdat davası</li>
                  <li>İş ilişkisine dayali iş kazası tazminatı</li>
                  <li>Kamu uyarınca tam yargı davası</li>
                  <li>Tazminat hesaplama</li>
                  <li>Tazminat hakları</li>
                  <li>Tazminat tespitleri</li>
                  <li>Tazminat tahsilatları</li>
                  <li>Tazminat düzenlemeleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TazminatHukuku;
