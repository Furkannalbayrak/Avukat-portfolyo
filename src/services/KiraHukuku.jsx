import React from 'react';
import { Helmet } from 'react-helmet';

const KiraHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Kira Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/kira-hukuku" />
        <meta
          name="description"
          content="Kira sözleşmeleri, kira bedeli, kira hakları ve kira davaları hakkında uzman hukuki destek."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kira Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık" />
        <meta property="og:description" content="Kira sözleşmeleri, kira bedeli, kira hakları ve kira davaları hakkında uzman hukuki destek." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/kira-hukuku" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
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
                  <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">İlgili Alanlar</h3>
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed">
                <ul className="list-disc list-inside space-y-3 text-[19px] md:text-2xl font-serif">
                  <li>Konut kira sözleşmesi</li>
                  <li>İşyeri kira sözleşmesi</li>
                  <li>Tarla ve arazi kiraları</li>
                  <li>Kat irtifakı/ortak alan kira sözleşmeleri</li>
                  <li>Tahliye davaları</li>
                  <li>Kira alacak davaları</li>
                  <li>Tazminat davaları</li>
                  <li>Kira bedelinin belirlenmesi, artırılması davası</li>
                  <li>Kira sözleşmesi hazırlanması ve düzenlenmesi</li>
                  <li>İhbar ve ihtarname gönderilmesi</li>
                  <li>Kiracı hakları ve sorumluluklar</li>
                  <li>Kiraya veren hakları ve sorumlulukları</li>
                  <li>Kiraya verilen taşınmazın teslimi</li>
                  <li>Kira sözleşmeleri</li>
                  <li>Kira bedeli ve ödemeler</li>
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
