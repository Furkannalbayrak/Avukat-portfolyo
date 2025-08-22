import React from 'react';
import { Helmet } from 'react-helmet';

const YabancilarHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Yabancılar Hukuku - İzin, Vize ve Haklar</title>
        <meta
          name="description"
          content="Yabancılar hukuku, izin ve vize işlemleri, ikamet hakları ve iş ile ilgili hukuki düzenlemeler hakkında bilgiler."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Yabancılar Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className="md:ml-10">
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-2xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">
                    Yabancı Hakları
                  </h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Tescil ve tanıma işlemleri</li>
                  <li>Sözleşmelerin uluslararası geçerliliği</li>
                  <li>Çifte vatandaş veya yabancı uyruklu eşlerin hakları</li>
                  <li>Mal varlığı ve borç işlemleri</li>
                  <li>Boşanma, velayet, nafaka ve tazminat davaları</li>
                  <li>Miras paylaşımı davası</li>
                  <li>Alacak ve tazminat davası</li>
                  <li>Tanıma ve tenfiz davası</li>
                  <li>Uluslararası ödeme ve ticari işlemler</li>
                  <li>Vatandaşlık edinme işlemleri</li>
                  <li>Vatandaşlığın kaybı ve iptali</li>
                  <li>İdareye başvuru</li>
                  <li>İzin ve vize işlemleri</li>
                  <li>Çalışma ve ikamet izni</li>
                  <li>İş ve meslek hakları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YabancilarHukuku;
