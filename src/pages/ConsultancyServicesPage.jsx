import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import consultancyServices1 from '../images/consultancyServices/consultancyServices1.webp'
import consultancyServices2 from '../images/consultancyServices/consultancyServices2.webp'
import consultancyServices3 from '../images/consultancyServices/consultancyServices3.webp'
import consultancyServices4 from '../images/consultancyServices/consultancyServices4.webp'
import consultancyServices5 from '../images/consultancyServices/consultancyServices5.webp'
import consultancyServices6 from '../images/consultancyServices/consultancyServices6.webp'
import consultancyServices7 from '../images/consultancyServices/consultancyServices7.webp'
import consultancyServices8 from '../images/consultancyServices/consultancyServices8.webp'
import consultancyServices9 from '../images/consultancyServices/consultancyServices9.webp'

const ConsultancyServicesPage = () => {

  const navigate = useNavigate()

  const consultancyServices = [
    {
      title: "Şirkete Yönelik Hukuku Danışmanlığı",
      slug: "sirketlere-yonelik-hukuki-danismanlik",
      image: consultancyServices1,
    },
    {
      title: "Kurumsal Danışmanlık",
      slug: "kurumsal-danismanlik",
      image: consultancyServices2,
    },
    {
      title: "Sözleşme ve Hukuki Belgelerin Analizi",
      slug: "sozlesme-ve-hukuki-belgelerin-analizi",
      image: consultancyServices3,
    },
    {
      title: "Önleyici ve Koruyucu Hukuki Danışmanlık",
      slug: "onleyici-ve-koruyucu-hukuki-danismanlik",
      image: consultancyServices4,
    },
    {
      title: "Sözleşme, İhtarname ve Taahhütname Hazırlanması",
      slug: "sozlesme-ihtarname-ve-taahhutname-hazirlanmasi",
      image: consultancyServices5,
    },
    {
      title: "Alternatif Çözüm Önerileri",
      slug: "alternatif-cozum-onerileri",
      image: consultancyServices6,
    },
    {
      title: "İşletme Danışmanlığı",
      slug: "isletme-danismanligi",
      image: consultancyServices7,
    },
    {
      title: "Dava Dosyası İnceleme",
      slug: "dava-dosyasi-inceleme",
      image: consultancyServices8,
    },
    {
      title: "Noter İşleri Danışmanlığı",
      slug: "noter-isleri-danismanligi",
      image: consultancyServices9,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hukuki Danışmanlık Hizmetleri - Av. Beyza Albayrak</title>
        <meta name="description" content="Avukat Beyza Albayrak tarafından sunulan kapsamlı hukuki danışmanlık hizmetleri." />
        <meta name="keywords" content="hukuki danışmanlık, şirket hukuku, sözleşme analizi, önleyici hukuki danışmanlık, noter işleri" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Hukuki Danışmanlık Hizmetleri - Av. Beyza Albayrak" />
        <meta property="og:description" content="Geniş kapsamlı hukuki danışmanlık hizmetlerimizi keşfedin." />
      </Helmet>


      <section className=" bg-gray-100 flex justify-center ">
        <div>
          <div className="max-w-screen-xl mx-auto lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14" >
            <div className="text-center">
              <h2 className="text-[34px] lg:text-6xl font-poppins text-white mb-4">
                Hukuki Danışmanlık
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto px-4">
              {consultancyServices.map((service, index) => (
                <div onClick={() => navigate(`/${service.slug}`)}
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className='absolute inset-0 bg-black bg-opacity-50 z-10 rounded-xl'></div>

                  <div className="relative flex flex-col items-center text-center z-10 gap-5 h-full">

                    <div className=' h-[60%] flex items-center'>
                      <h3 className="text-3xl sm:text-4xl xl:text-4xl md:text-[32px] font-serif text-white ">{service.title}</h3>
                    </div>

                    <div>
                      <button className='absolute bottom-0 left-1/2 -translate-x-1/2 bg-transparent md:min-w-[150px] min-w-[160px] pt-3 pb-3 pr-6 pl-6 mb-3 rounded-2xl transition duration-150 border-2 border-white text-white hover:bg-[rgba(255,255,255,0.4)]'>
                        Detaylı Bilgi
                      </button>
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

export default ConsultancyServicesPage