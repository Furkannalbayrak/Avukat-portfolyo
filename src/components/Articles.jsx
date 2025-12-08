import React from 'react';
import { Helmet } from "react-helmet";

const Articles = () => {
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
        <title>Mevzuat ve Yargıtay Kararları | Av. Beyza Albayrak</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/mevzuat" />
        <meta
          name="description"
          content="İş hukuku ve diğer alanlarda güncel Yargıtay kararlarını keşfedin. Hukuki gelişmelerden haberdar olun."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Mevzuat ve Yargıtay Kararları | Av. Beyza Albayrak" />
        <meta
          property="og:description"
          content="İş hukuku ve diğer alanlarda güncel Yargıtay kararlarını keşfedin. Hukuki gelişmelerden haberdar olun."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/mevzuat" />
        <meta property="og:image" content={articles[0].image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mevzuat ve Yargıtay Kararları | Av. Beyza Albayrak" />
        <meta
          name="twitter:description"
          content="İş hukuku ve diğer alanlarda güncel Yargıtay kararlarını keşfedin. Hukuki gelişmelerden haberdar olun."
        />
        <meta name="twitter:image" content={articles[0].image} />
      </Helmet>


      <section className="py-20 bg-gray-50">
        <div className='md:mx-10 mx-5'>
          <div className="container mx-auto w-auto md:max-w-none max-w-[460px]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Mevzuat
              </h2>
              <p className="text-xl text-gray-600">
                Güncel ve önemli Yargıtay kararları
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-screen-xl mx-auto">
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
                    <p className="text-gray-600 mb-4 italic flex justify-center">
                      {article.excerpt}
                    </p>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium text-gray-700">Dosya No:</span> {article.caseNumber}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section></>
  );
};

export default Articles;