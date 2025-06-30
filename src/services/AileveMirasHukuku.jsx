import React from 'react';
import { Helmet } from 'react-helmet';

const AileveMirasHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Aile ve Miras Hukuku - Hukuk Bürosu</title>
        <meta
          name="description"
          content="Aile ve miras hukuku alanında evlenme, boşanma, miras payı, vasiyetname ve daha fazlası hakkında hukuki danışmanlık."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
          <div className="text-center mb-12">
            <h2 className="text-[33px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Aile ve Miras Hukuku
            </h2>
          </div>

          <div className="w-[90%] mx-auto max-w-6xl pl-4">
            <div className="mb-8 md:mt-8 lg:mt-0">
              <div className='md:ml-10'>
                <div className="flex md:w-10/12 mb-8">
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">
                    Aile ve Miras İlişkileri
                  </h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Evlenme ve boşanma işlemlerini</li>
                  <li>Çocuk bakım ve besleyicilik hakları</li>
                  <li>Miras payı ve miras hakları</li>
                  <li>Testament ve vasiyetname işlemleri</li>
                  <li>Evlat edinme işlemlerini</li>
                  <li>Aile malları ve mal varlığı</li>
                  <li>Evlat hakları ve sorumluluklar</li>
                  <li>Aile içi şiddet ve koruma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AileveMirasHukuku;
