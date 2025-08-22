import React from 'react';
import { Helmet } from 'react-helmet';

const GayrimenkulHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Gayrimenkul Hukuku - Hukuk Bürosu</title>
        <meta
          name="description"
          content="Gayrimenkul alım-satım, kira hakları, mülk tescili, vergi hakları ve inşaat hukuku konularında uzman hukuki danışmanlık."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Gayrimenkul Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">
                    İlgili Alanlar
                  </h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Satış ve devir işlemleri</li>
                  <li>Kat irtifakı ve kat mülkiyeti tesis etme</li>
                  <li>Bağışlama ve ipotek işlemleri</li>
                  <li>İrtifak, rehin, taşınmaz yükü, şerh koyma hak ve işlemleri</li>
                  <li>Tapu tescili ve terkin işlemleri</li>
                  <li>Ortak kullanım ve ortak kullanım alan düzenlemeleri</li>
                  <li>Mülkiyet tespiti ve tapu iptali tescili davası</li>
                  <li>Kira ve kullanımdan kaynaklanan davalar</li>
                  <li>Pay tesipi ve ortak alanın kullanımı</li>
                  <li>Gayrimenkul alım-satım işlemleri</li>
                  <li>Kira ve kiralık hakları</li>
                  <li>Mülk vergisi ve vergi hakları</li>
                  <li>Tasarruf ve kullanım hakları</li>
                  <li>İnşaat ve arsa hakları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GayrimenkulHukuku;
