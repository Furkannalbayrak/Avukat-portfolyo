import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import services10 from '../images/servicess/services10.webp'
import services11 from '../images/servicess/services11.webp'
import services12 from '../images/servicess/services12.webp'
import services13 from '../images/servicess/services13.webp'
import services14 from '../images/servicess/services14.webp'
import services15 from '../images/servicess/services15.webp'
import services16 from '../images/servicess/services16.webp'
import services17 from '../images/servicess/services17.webp'
import services18 from '../images/servicess/services18.webp'

const ServicesPage = () => {

  const navigate = useNavigate();

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
    {
      title: "Ticaret Hukuku",
      slug: "ticaret-hukuku",
      image: services10,
    },
    {
      title: "Sözleşmeler Hukuku",
      slug: "sozlesmeler-hukuku",
      image: services11,
    },
    {
      title: "Gayrimenkul Hukuku",
      slug: "gayrimenkul-hukuku",
      image: services12,
    },
    {
      title: "Tüketici Hukuku",
      slug: "tuketici-hukuku",
      image: services13,
    },
    {
      title: "Sağlık Hukuku",
      slug: "saglik-hukuku",
      image: services14,
    },
    {
      title: "Bilişim Hukuku",
      slug: "bilisim-hukuku",
      image: services15,
    },
    {
      title: "Sigorta Hukuku",
      slug: "sigorta-hukuku",
      image: services16,
    },
    {
      title: "İnsan Hakları Hukuku",
      slug: "insan-haklari-hukuku",
      image: services17,
    },
    {
      title: "İdari Ceza Hukuku",
      slug: "idari-ceza-hukuku",
      image: services18,
    },
  ];

  return (
    <>

      <Helmet>
        <title>Faaliyet Alanlarım - Av. Beyza Albayrak</title>
        <meta
          name="description"
          content="Avukat Beyza Albayrak'ın uzmanlık alanları. Ceza Hukuku, Borçlar Hukuku, Aile Hukuku ve diğer hukuk dallarında profesyonel danışmanlık."
        />
        <meta
          name="keywords"
          content="Ceza Hukuku, Borçlar Hukuku, İş Hukuku, Aile Hukuku, Ticaret Hukuku, Hukuki Danışmanlık, Avukat Beyza Albayrak"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Faaliyet Alanlarım - Av. Beyza Albayrak" />
        <meta
          property="og:description"
          content="Avukat Beyza Albayrak'ın uzmanlık alanları ve hukuki danışmanlık hizmetleri hakkında detaylı bilgi alın."
        />
      </Helmet>


      <section className=" bg-gray-100 flex justify-center ">
        <div>
          <div className="max-w-screen-xl mx-auto lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14" >
            <div className="text-center">
              <h2 className="text-[36px] lg:text-6xl font-poppins text-white lg:mb-0 mb-4">
                Faaliyet Alanlarım
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto px-4">
              {services.map((service, index) => (
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

                    <div className=' h-[60%] flex items-center leading-10'>
                      <h3 className="text-[35px] sm:text-4xl font-serif text-white ">{service.title}</h3>
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
      </section>
    </>
  );
};

export default ServicesPage;
