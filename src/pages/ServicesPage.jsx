import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Ceza Hukuku",
      image: "https://www.olcuhukuk.com.tr/yuklemeler/hizmet-gorselleri/29.jpg"
    },
    {
      title: "Borçlar Hukuku",
      image: "https://www.bitmezhukuk.com/wp-content/uploads/2022/01/icra-iflas-hukuku.jpg"
    },
    {
      title: "İş ve Sosyal Güvenlik Hukuku",
      image: "https://pareshukuk.com/wp-content/uploads/2023/05/Labor-and-Social-Security-Law.jpg"
    },
    {
      title: "İdare ve Vergi Hukuku",
      image: "https://avukaterin.com/wp-content/uploads/2024/04/Tax-Law.jpg"
    },
    {
      title: "Aile ve Miras Hukuku",
      image: "https://enesayyildiz.av.tr/wp-content/uploads/2022/04/MS-HUKUK-MS-HUKUK-17.jpg"
    },
    {
      title: "Kira Hukuku",
      image: "https://www.sabuncubchukuk.com/uploads/2ba6e81b43aaaab0ed6011a6f13d5426.png"
    },
    {
      title: "Tazminat Hukuku",
      image: "https://www.ozdengozen.av.tr/wp-content/uploads/2024/06/Sigorta-ve-Tazminat-Hukuku.jpg"
    },
    {
      title: "İcra ve İflas Hukuku",
      image: "https://halilkaanemektar.av.tr/wp-content/uploads/2021/10/icra-hukuku-1170x710.jpeg"
    },
    {
      title: "Yabancılar Hukuku",
      image: "https://www.ekinhukuk.com.tr/wp-content/uploads/2022/10/yabancilar-hukuku.jpg"
    },



    {
      title: "Ticaret Hukuku"
    },

    {
      title: "Sözleşmeler Hukuku"
    },

    {
      title: "Gayrimenkul Hukuku"
    },
    {
      title: "Tüketici Hukuku"
    },
    {
      title: "Sağlık Hukuku"
    },
    {
      title: "Bilişim Hukuku"
    },
    {
      title: "Sigorta Hukuku"
    },
    
    {
      title: "İnsan Hakları Hukuku"
    },
    
    {
      title: "İdari Ceza Hukuku"
    },
  ];

  return (
    <section className=" bg-gray-100 flex justify-center ">
      <div>
        <div className="container px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14" >
          <div className="text-center">
            <h2 className="text-[42px] lg:text-6xl font-poppins text-white mb-4">
              Faaliyet Alanlarım
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >

                <div className='absolute inset-0 bg-black bg-opacity-40 z-0 rounded-xl'></div>

                <div className="relative flex flex-col items-center text-center z-10 gap-5 h-full">

                  <div className=' h-[60%] flex items-center'>
                    <h3 className="text-4xl font-serif text-white ">{service.title}</h3>
                  </div>

                  <div>
                    <button className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-transparent md:min-w-[140px] min-w-[160px] pt-3 pb-3 pr-6 pl-6 mb-3 rounded-2xl transition duration-150 border-2 border-white text-white hover:bg-[rgba(255,255,255,0.4)]'>
                      Detaylı Bilgi
                    </button>
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

export default ServicesPage;
