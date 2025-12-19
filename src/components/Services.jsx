import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from 'react-helmet';
import services1 from '../images/servicess/services1.webp'
import services2 from '../images/servicess/services2.webp'
import services3 from '../images/servicess/services3.webp'
import services4 from '../images/servicess/services4.webp'
import services5 from '../images/servicess/services5.webp'
import services6 from '../images/servicess/services6.webp'
import services7 from '../images/servicess/services7.webp'
import services8 from '../images/servicess/services8.webp'
import services9 from '../images/servicess/services9.webp'


const Services = () => {

  const services = [
    {
      title: "Ceza Hukuku",
      slug: "ceza-hukuku",
      image: services1,
    },
    {
      title: "Borçlar Hukuku",
      slug: "borclar-hukuku",
      image: services2,
    },
    {
      title: "İş ve Sosyal Güvenlik Hukuku",
      slug: "is-ve-sosyal-guvenlik-hukuku",
      image: services3,
    },
    {
      title: "İdare ve Vergi Hukuku",
      slug: "idare-ve-vergi-hukuku",
      image: services4,
    },
    {
      title: "Aile ve Miras Hukuku",
      slug: "aile-ve-miras-hukuku",
      image: services5,
    },
    {
      title: "Kira Hukuku",
      slug: "kira-hukuku",
      image: services6,
    },
    {
      title: "Tazminat Hukuku",
      slug: "tazminat-hukuku",
      image: services7,
    },
    {
      title: "İcra ve İflas Hukuku",
      slug: "icra-ve-iflas-hukuku",
      image: services8,
    },
    {
      title: "Yabancılar Hukuku",
      slug: "yabancilar-hukuku",
      image: services9,
    },
  ];

  return (
    <>

      <Helmet>
        <title>Av. Beyza Albayrak | Hukuki Hizmetler</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/services" />
        <meta
          name="description"
          content="Ceza Hukuku, Borçlar Hukuku, İş Hukuku, Aile Hukuku gibi birçok alanda profesyonel hukuki danışmanlık hizmeti sunuyorum. Tüm faaliyet alanları için detaylara göz atın."
        />
        <meta name="keywords" content="ceza hukuku, borçlar hukuku, aile hukuku, tazminat, avukatlık hizmetleri, beyzalbayrak" />
        <meta property="og:title" content="Hukuki Hizmetler | Av. Beyza Albayrak" />
        <meta property="og:description" content="Tüm hukuki faaliyet alanlarımızı inceleyin: Ceza, Borçlar, İş, Aile, Vergi Hukuku ve daha fazlası." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/services" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />

        {/* JSON-LD yapısı: Service Listesi */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Hukuki Hizmetler",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://www.beyzaalbayrak.com.tr/${service.slug}`,
              "name": service.title,
              "image": service.image
            }))
          })}
        </script>
      </Helmet>


      <section className="py-20 bg-gray-200 flex justify-center">
        <div className='max-w-[1200px]'>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-poppins mb-6">
                Faaliyet Alanlarım
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
              {services.map((service, index) => (
                <Link to={`/${service.slug}`}
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer block relative"
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

                    <div className=' h-[60%] flex items-center leading-10'>
                      <h3 className="text-[35px] sm:text-4xl font-serif text-white ">{service.title}</h3>
                    </div>

                    <div>
                      <button className='absolute bottom-1 left-1/2 -translate-x-1/2 bg-transparent md:min-w-[150px] min-w-[160px] pt-3 pb-3 pr-6 pl-6 mb-2 rounded-2xl transition duration-150 border-2 border-white text-white hover:bg-[rgba(255,255,255,0.4)]'>
                        Detaylı Bilgi
                      </button>
                    </div>

                  </div>
                </Link>
              ))}
              <Link to="/services"
                className="bg-white rounded-xl shadow-lg p-6 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer block">
                <div className="flex flex-col items-center text-center">
                  <h3 className='text-[32px] font-serif xl:mt-10 lg:mt-3 md:mt-6 mt-6'> Tüm Faatliyet</h3>
                  <h3 className='text-[32px] font-serif'> Alanlarına Göz at</h3>
                  <p><FaArrowRightLong className='text-7xl mt-5' /></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Services;
