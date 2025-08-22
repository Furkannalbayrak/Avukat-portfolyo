import React from 'react';
import { Helmet } from 'react-helmet';

const CezaHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Ceza Hukuku - Hukuk Bürosu</title>
        <meta
          name="description"
          content="Ceza Hukuku alanında cinayet, hırsızlık, dolandırıcılık, uyuşturucu suçları, cinsel dokunulmazlık ihlalleri, rüşvet ve terör suçları gibi konularda hukuki danışmanlık."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[42px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Ceza Hukuku
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
                  <li>Cinayet, öldürme ve yaralama suçları</li>
                  <li>Hırsızlık, gasp ve yağma suçları</li>
                  <li>Dolandırıcılık ve sahtecilik suçları</li>
                  <li>Uyuşturucu madde ile ilgili suçlar</li>
                  <li>Cinsel dokunulmazlığa karşı suçlar</li>
                  <li>Hakaret, tehdit ve şantaj suçları</li>
                  <li>Rüşvet ve yolsuzluk suçları</li>
                  <li>Terör ve örgüt suçları</li>
                  <li>Kişiyi hürriyetinden yoksun kılma suçu</li>
                  <li>Konut dokunulmazlığının ihlali</li>
                  <li>Güveni kötüye kullanma suçu</li>
                  <li>Mala zarar verme suçu</li>
                  <li>Kişisel verileri yayma, ele geçirme ve kaydetme suçları</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CezaHukuku;
