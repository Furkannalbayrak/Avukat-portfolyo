import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {

  const navigate = useNavigate();

  const services = [
    {
      title: "Ceza Hukuku",
      slug: "ceza-hukuku",
      image: "https://www.olcuhukuk.com.tr/yuklemeler/hizmet-gorselleri/29.jpg"
    },
    {
      title: "Borçlar Hukuku",
      slug: "borclar-hukuku",
      image: "https://www.bitmezhukuk.com/wp-content/uploads/2022/01/icra-iflas-hukuku.jpg"
    },
    {
      title: "İş ve Sosyal Güvenlik Hukuku",
      slug: "is-ve-sosyal-guvenlik-hukuku",
      image: "https://pareshukuk.com/wp-content/uploads/2023/05/Labor-and-Social-Security-Law.jpg"
    },
    {
      title: "İdare ve Vergi Hukuku",
      slug: "idare-ve-vergi-hukuku",
      image: "https://avukaterin.com/wp-content/uploads/2024/04/Tax-Law.jpg"
    },
    {
      title: "Aile ve Miras Hukuku",
      slug: "aile-ve-miras-hukuku",
      image: "https://enesayyildiz.av.tr/wp-content/uploads/2022/04/MS-HUKUK-MS-HUKUK-17.jpg"
    },
    {
      title: "Kira Hukuku",
      slug: "kira-hukuku",
      image: "https://www.sabuncubchukuk.com/uploads/2ba6e81b43aaaab0ed6011a6f13d5426.png"
    },
    {
      title: "Tazminat Hukuku",
      slug: "tazminat-hukuku",
      image: "https://www.ozdengozen.av.tr/wp-content/uploads/2024/06/Sigorta-ve-Tazminat-Hukuku.jpg"
    },
    {
      title: "İcra ve İflas Hukuku",
      slug: "icra-ve-iflas-hukuku",
      image: "https://halilkaanemektar.av.tr/wp-content/uploads/2021/10/icra-hukuku-1170x710.jpeg"
    },
    {
      title: "Yabancılar Hukuku",
      slug: "yabancilar-hukuku",
      image: "https://www.ekinhukuk.com.tr/wp-content/uploads/2022/10/yabancilar-hukuku.jpg"
    },



    {
      title: "Ticaret Hukuku",
      slug: "ticaret-hukuku",
      image: "https://www.kahveci-hukuk.com/images/ticaret-hukuku.jpg"
    },

    {
      title: "Sözleşmeler Hukuku",
      slug: "sozlesmeler-hukuku",
      image: "https://yenicaghukuk.com/wp-content/uploads/2022/11/TICARET-HUKUKU-%E2%80%93-ANONIM-SIRKET1-1.jpg"
    },

    {
      title: "Gayrimenkul Hukuku",
      slug: "gayrimenkul-hukuku",
      image: "https://png.pngtree.com/thumb_back/fw800/background/20230722/pngtree-d-illustration-of-house-banner-background-with-upward-pointing-arrow-symbolizing-image_3725178.jpg"
    },
    {
      title: "Tüketici Hukuku",
      slug: "tuketici-hukuku",
      image: "https://sschukuk.com/images/consumer-law-images.jpg"
    },
    {
      title: "Sağlık Hukuku",
      slug: "saglik-hukuku",
      image: "https://melikepeker.av.tr/wp-content/uploads/2024/12/0001_saglik.jpg"
    },
    {
      title: "Bilişim Hukuku",
      slug: "bilisim-hukuku",
      image: "https://binay.av.tr/wp-content/uploads/2022/05/images-e1653918889179.jpg"
    },
    {
      title: "Sigorta Hukuku",
      slug: "sigorta-hukuku",
      image: "https://www.proaktifhukuk.com/content/images/thumbs/0000798_sgorta-hukuku-sgorta-hukukunda-avukatlarin-rolu-ve-sgorta-hukuku-davalari_550.jpeg"
    },
    
    {
      title: "İnsan Hakları Hukuku",
      slug: "insan-haklari-hukuku",
      image: "https://akuakademi.com/upload/insan-haklari-hukuku-egitimi-sertifika-programi.jpg"
    },
    
    {
      title: "İdari Ceza Hukuku",
      slug: "idari-ceza-hukuku",
      image: "https://lh4.googleusercontent.com/proxy/br2otyqrgylMcLw3LKiiG624hinpY5kG_lzN40LCykDAe0Php33hI49pdWSdkakHxWokvCqhKpH_Yigajl9bKv9Dj8DUTkVw5qsn"
    },
  ];

  return (
    <section className=" bg-gray-100 flex justify-center ">
      <div>
        <div className="max-w-screen-xl mx-auto px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14" >
          <div className="text-center">
            <h2 className="text-[42px] lg:text-6xl font-poppins text-white lg:mb-0 mb-4">
              Faaliyet Alanlarım
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
            {services.map((service, index) => (
              <div onClick={()=> navigate(`/${service.slug}`)}
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
