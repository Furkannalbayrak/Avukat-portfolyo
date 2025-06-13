import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaCertificate, FaUserTie } from 'react-icons/fa';

function HeaderPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Profesyonel Avukatlık Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hukuki konularda profesyonel ve güvenilir hizmetler sunuyorum. 
            Müşterilerimin haklarını korumak için buradayım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaBriefcase className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hukuki Danışmanlık</h3>
            <p className="text-gray-600">Profesyonel hukuki danışmanlık hizmetleri</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaCertificate className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sözleşmeler</h3>
            <p className="text-gray-600">Sözleşme hazırlama ve gözden geçirme</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <FaUserTie className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">İş Hukuku</h3>
            <p className="text-gray-600">İş hukuku konularında danışmanlık</p>
          </div>
        </div>

        <div className="mt-16">
          <Link to="/about" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Hakkımda Daha Fazla Bilgi
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeaderPage;