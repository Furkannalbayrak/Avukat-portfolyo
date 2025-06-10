import React from 'react';
import { 
  FaGavel, 
  FaCertificate, 
  FaBriefcase, 
  FaFileContract, 
  FaBuilding, 
  FaGavel as FaGavel2,
  FaUsers,
  FaHandshake,
  FaBalanceScale,
  FaLandmark,
  FaTools
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaGavel,
      title: "Avukatlık",
      description: "Mahkeme davalarında profesyonel temsil",
      subpoints: [
        "İdare mahkemesi davaları",
        "Askeri mahkemesi davaları",
        "Aile hukuku davaları"
      ]
    },
    {
      icon: FaCertificate,
      title: "Hukuki Danışmanlık",
      description: "Hukuki konularda profesyonel danışmanlık",
      subpoints: [
        "İş hukuku danışmanlığı",
        "Ticaret hukuku danışmanlığı",
        "İdare hukuku danışmanlığı"
      ]
    },
    {
      icon: FaUsers,
      title: "İş Hukuku",
      description: "İş hukuku konularında danışmanlık",
      subpoints: [
        "İş sözleşmeleri",
        "İş yerinde sorunlar",
        "İşten çıkarılma davaları"
      ]
    },
    {
      icon: FaHandshake,
      title: "Sözleşme Danışmanlığı",
      description: "Sözleşme hazırlama ve gözden geçirme",
      subpoints: [
        "Sözleşme taslağı hazırlama",
        "Sözleşme gözden geçirme",
        "Sözleşme ihlali davaları"
      ]
    },
    {
      icon: FaLandmark,
      title: "Ticaret Hukuku",
      description: "Ticaret hukuku konularında danışmanlık",
      subpoints: [
        "Şirket kurulumu",
        "Şirket yönetim kuralları",
        "Şirket anlaşmaları"
      ]
    },
    {
      icon: FaBalanceScale,
      title: "İdare Hukuku",
      description: "İdare hukuku konularında danışmanlık",
      subpoints: [
        "İdare mahkemesi davaları",
        "İdare kararlarına itiraz",
        "İdari cezalar"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Çalışma Alanlarım
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <service.icon className="text-4xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.subpoints.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-4 h-4 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
