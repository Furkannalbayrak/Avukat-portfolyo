import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaGavel,
  FaFileContract,
  FaBalanceScale,
  FaHandshake,
  FaUniversity,
  FaLandmark,
  FaUserShield,
  FaHammer,
  FaHeartbeat,
  FaLaptopCode,
  FaFileInvoiceDollar,
  FaUserFriends,
  FaKey,
  FaChild,
  FaHome,
  FaMoneyCheckAlt,
  FaUsers,
  FaShieldAlt,
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaGavel,
      title: "Ceza Hukuku"
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Borçlar Hukuku"
    },
    {
      icon: FaBalanceScale,
      title: "Ticaret Hukuku"
    },
    {
      icon: FaHandshake,
      title: "İş Hukuku"
    },
    {
      icon: FaUniversity,
      title: "İdare Hukuku"
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Vergi Hukuku"
    },
    {
      icon: FaLandmark,
      title: "Anayasa Hukuku"
    },
    {
      icon: FaFileContract,
      title: "Sözleşmeler Hukuku"
    },
    {
      icon: FaUserFriends,
      title: "Aile Hukuku"
    },
    {
      icon: FaKey,
      title: "Miras Hukuku"
    },
    {
      icon: FaHome,
      title: "Gayrimenkul Hukuku"
    },
    // {
    //   icon: FaUsers,
    //   title: "Tüketici Hukuku"
    // },
    // {
    //   icon: FaHeartbeat,
    //   title: "Sağlık Hukuku"
    // },
    // {
    //   icon: FaLaptopCode,
    //   title: "Bilişim Hukuku"
    // },
    // {
    //   icon: FaShieldAlt,
    //   title: "Sigorta Hukuku"
    // },
    // {
    //   icon: FaHammer,
    //   title: "İcra ve İflas Hukuku"
    // },
    // {
    //   icon: FaUserShield,
    //   title: "İnsan Hakları Hukuku"
    // },
    // {
    //   icon: FaChild,
    //   title: "Çocuk Hakları Hukuku"
    // }

  ];

  return (
    <section className="py-20 bg-gray-200 flex justify-center">
      <div className='max-w-6xl'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins mb-6">
              Faaliyet Alanlarım
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 lg:h-[240px] h-[215px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <service.icon className="text-8xl mb-6" style={{ color: "#d6a543" }} />
                  <h3 className="text-2xl font-poppins">{service.title}</h3>
                </div>
              </div>
            ))}
            <div className="bg-white rounded-lg shadow-lg p-6 lg:h-[240px] h-[215px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <h3 className='text-2xl font-poppins mt-4'> Tüm Faatliyet</h3>
                <h3 className='text-2xl font-poppins'> Alanlarına Göz at</h3>
                <p><FaArrowRightLong className='text-6xl mt-5'/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
