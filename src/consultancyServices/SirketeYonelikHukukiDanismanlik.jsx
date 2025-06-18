import React from 'react';

const SirketeYonelikHukukiDanismanlik = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Şirkete Yönelik Hukuki Danışmanlık
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Şirket kurulması</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Şirket yönetim mekanizmaları</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Şirket içi hukuki danışmanlık</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Avantajlar</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Uzman danışmanlık</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Hızlı ve etkili çözüm</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">24/7 destek</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SirketeYonelikHukukiDanismanlik;
