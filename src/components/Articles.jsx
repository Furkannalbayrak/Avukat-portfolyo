import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "Yargıtay 13. Daire Kararı",
      date: "12 Haziran 2025",
      excerpt: "İş hukuku konusunda önemli bir karar...",
      author: "Yargıtay 13. Daire",
      caseNumber: "E.2025/54321, K.2025/9876",
      image: "https://admin.kontder.com.tr/upload/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-09-30%20214831-1561566685.png"
    },
    {
      title: "Yargıtay 13. Daire Kararı",
      date: "12 Haziran 2025",
      excerpt: "İş hukuku konusunda önemli bir karar...",
      author: "Yargıtay 13. Daire",
      caseNumber: "E.2025/54321, K.2025/9876",
      image: "https://admin.kontder.com.tr/upload/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-09-30%20214831-1561566685.png"
    },
    {
      title: "Yargıtay 13. Daire Kararı",
      date: "12 Haziran 2025",
      excerpt: "İş hukuku konusunda önemli bir karar...",
      author: "Yargıtay 13. Daire",
      caseNumber: "E.2025/54321, K.2025/9876",
      image: "https://admin.kontder.com.tr/upload/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202024-09-30%20214831-1561566685.png"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div>
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mevzuat
            </h2>
            <p className="text-xl text-gray-600">
              Güncel ve önemli Yargıtay kararları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto max-w-[460px] px-4 md:max-w-none">
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

    </section>
  );
};

export default Articles;