import React from 'react';

const SozlesmeVeHukukiBelgelerinAnalizi = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Sözleşme ve Hukuki Belgelerin Analizi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Sözleşme incelemesi</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Risk analizi</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Yasal uyum kontrolü</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Avantajlar</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Detaylı değerlendirme</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Risk yönetimi</span>
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-blue-500">•</span>
                <span className="ml-2">Güvenilir raporlar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SozlesmeVeHukukiBelgelerinAnalizi;
