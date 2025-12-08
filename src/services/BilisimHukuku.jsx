import React from 'react';
import { Helmet } from 'react-helmet';

const BilisimHukuku = () => {
  return (
    <>
      <Helmet>
        <title>Bilişim Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/bilisim-hukuku" />
        <meta
          name="description"
          content="Bilişim hukuku alanında veri koruma, gizlilik, yazılım lisansları, internet hukuku, elektronik imza ve siber güvenlik konularında uzman hukuki danışmanlık."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Bilişim Hukuku - Av. Beyza Albayrak | Hukuki Danışmanlık" />
        <meta property="og:description" content="Bilişim hukuku alanında veri koruma, gizlilik, yazılım lisansları, internet hukuku, elektronik imza ve siber güvenlik konularında uzman hukuki danışmanlık." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/bilisim-hukuku" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="bg-gray-100 flex justify-center">
        <div className="md:w-[72%] w-full lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
          <div className="text-center mb-12">
            <h2 className="text-[41px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
              Bilişim Hukuku
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
                  <li>Erişim engelleme ve itiraz süreçleri</li>
                  <li>Kişisel verilerin korunması</li>
                  <li>Özel hayatın gizliliğinin korunması</li>
                  <li>Haksız içeriklerin kaldırıması</li>
                  <li>BTK kararları</li>
                  <li>Elektronik ticaret sözleşmeleri</li>
                  <li>Hizmet sağlayıcı sözleşmeleri</li>
                  <li>Lisans ve yazılım sözleşmeleri</li>
                  <li>İnternet sitelerinin ve sosyal medya hesaplarının tespiti</li>
                  <li>İçerik çıkarma ve düzeltilmesi talepleri</li>
                  <li>Bilişim kanalları ile işlenen suçlar</li>
                  <li>Veri koruma ve gizlilik</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BilisimHukuku;
