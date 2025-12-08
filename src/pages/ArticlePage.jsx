import React from 'react';
import { Helmet } from 'react-helmet';

const ArticlePage = () => {
  const articles = [
    {
      title: "Yargıtay 15. Hukuk Dairesi",
      excerpt: '"Burun ameliyatı sonucunda oluşan şekil bozukluğu nedeniyle davacı 2. operasyonun bedelini ve manevi tazminat talep edebilir"',
      caseNumber: "E.2017/2716, K.2019/3692",
      image: "https://cdnuploads.aa.com.tr/uploads/Contents/2019/02/19/thumbs_b_c_a9f7fb3fc780cbc61ab3d5662fdaa58c.jpg"
    },
    {
      title: "Yargıtay 8. Ceza Dairesi",
      excerpt: '"Sanığın rızası bulunsa dahi kolluk tarafından şüphelilerin telefonları incelenip mesaj ve benzeri bilgiler kayıt altına alınamaz. Bunun için hakim kararı veya savcılığın yazılı emri bulunması gerekir."',
      caseNumber: "E.2024/1821, K.2024/4126",
      image: "https://gozdeyavuzer.com/wp-content/uploads/2024/07/Telefon-Karistirma-Gozde-Yavuzer.webp"
    },
    {
      title: "Yargıtay 2. Hukuk Dairesi",
      excerpt: '"Paranın alım gücünün azalması sebebiyle takdir edilen maddi tazminat miktarının artışına karar verilebilir"',
      author: "Yargıtay 13. Daire",
      caseNumber: "E.2024/9327, K.2025/1307",
      image: "https://img-s1.onedio.com/id-6301ffd1af54f7ae3d451d3b/rev-0/w-600/h-337/f-jpg/s-4d17ed6c1d3d36b926ac3534472b96c0b5ed552d.jpg"
    },
  ];

  return (
    <>

      <Helmet>
        <title>Mevzuat & Hukuki Makaleler - Av. Beyza Albayrak</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/mevzuat" />
        <meta name="description" content="Avukat Beyza Albayrak tarafından paylaşılan güncel mevzuat ve hukuki makaleler." />
        <meta name="keywords" content="hukuki makaleler, mevzuat, yargıtay kararları, iş hukuku, avukat Beyza Albayrak" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Mevzuat & Hukuki Makaleler - Av. Beyza Albayrak" />
        <meta property="og:description" content="Güncel mevzuat ve hukuki makaleler için sayfamızı ziyaret edin." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/mevzuat" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>


      <section className=" bg-gray-100">

        <div className='max-w-screen-xl mx-auto lg:-translate-y-28 -translate-y-20'>

          <div className='px-4'>
            <div className="flex flex-col lg:gap-28 gap-14">
              <div className="text-center">
                <h1 className="text-5xl lg:text-6xl font-poppins text-white lg:mb-0 mb-4">
                  Mevzuat
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto max-w-[460px] md:max-w-none">
                {articles.map((article, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium text-gray-700">Eser No:</span> {article.caseNumber}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section></>
  );
};

export default ArticlePage;