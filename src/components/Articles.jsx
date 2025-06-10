import React from 'react';
import { FaNewspaper, FaClock, FaUser } from 'react-icons/fa';

const Articles = () => {
  const articles = [
    {
      title: "İş Hukuku ve Sözleşme Sorunları",
      date: "15 Haziran 2025",
      excerpt: "İş hukuku konularında genel bir bakış ve sözleşme sorunları üzerine...",
      author: "Ahmet Yılmaz"
    },
    {
      title: "Ticaret Hukuku Güncellemeleri",
      date: "10 Haziran 2025",
      excerpt: "Yeni ticaret hukuku düzenlemeleri ve etkileri...",
      author: "Ahmet Yılmaz"
    },
    {
      title: "Sözleşme Hakları ve Sorumluluklar",
      date: "5 Haziran 2025",
      excerpt: "Sözleşme hakları ve sorumluluklar üzerine detaylı bir analiz...",
      author: "Ahmet Yılmaz"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Makaleler
          </h2>
          <p className="text-gray-600">
            Hukuki konularda güncel ve detaylı makalelerim
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <FaClock className="mr-2" />
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <FaUser className="mr-2" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
