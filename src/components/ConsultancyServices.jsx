import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import consultancyServices1 from '../images/consultancyServices/consultancyServices1.webp'
import consultancyServices2 from '../images/consultancyServices/consultancyServices2.webp'
import consultancyServices3 from '../images/consultancyServices/consultancyServices3.webp'
import consultancyServices4 from '../images/consultancyServices/consultancyServices4.webp'
import consultancyServices5 from '../images/consultancyServices/consultancyServices5.webp'


const ConsultancyServices = () => {
    const navigate = useNavigate();

    const consultancyServices = [
        {
            title: "Şirkete Yönelik Hukuki Danışmanlık",
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
    ];

    return (

        <>
            <Helmet>
                <title>Hukuki Danışmanlık Hizmetleri | Albayrak Hukuk</title>
                <meta name="description" content="Profesyonel hukuki danışmanlık hizmetleri ile iş ve şirketlerinizi koruyun. Sözleşme, analiz, önleyici ve kurumsal danışmanlık alanlarında destek." />
                {/* Open Graph tags */}
                <meta property="og:title" content="Hukuki Danışmanlık Hizmetleri | Albayrak Hukuk" />
                <meta property="og:description" content="Profesyonel hukuki danışmanlık hizmetleri ile iş ve şirketlerinizi koruyun." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={consultancyServices[0].image} />
                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hukuki Danışmanlık Hizmetleri | Serkan Hukuk" />
                <meta name="twitter:description" content="Profesyonel hukuki danışmanlık hizmetleri ile iş ve şirketlerinizi koruyun." />
                <meta name="twitter:image" content={consultancyServices[0].image} />
            </Helmet>


            <section className="sm:py-20 py-14 bg-gray-100 flex justify-center">
                <div className='max-w-[1200px]'>
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-poppins mb-6">
                                Hukuki Danışmanlık Hizmetlerim
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
                            {consultancyServices.map((service, index) => (
                                <div onClick={() => navigate(`/${service.slug}`)}
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg p-4 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer "
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
                                        <div className='h-[60%] flex items-center'>
                                            <h3 className="text-3xl sm:text-4xl xl:text-4xl md:text-[32px] font-serif text-white">{service.title}</h3>
                                        </div>
                                        <div>
                                            <button className='absolute bottom-1 left-1/2 -translate-x-1/2 bg-transparent md:min-w-[150px] min-w-[160px] pt-3 pb-3 pr-6 pl-6 mb-2 rounded-2xl transition duration-150 border-2 border-white text-white hover:bg-[rgba(255,255,255,0.4)]'>
                                                Detaylı Bilgi
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div onClick={() => navigate("/consultancy-services")}
                                className="bg-white rounded-xl shadow-lg p-6 lg:h-[330px] h-[300px] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                                <div className="flex flex-col items-center text-center">
                                    <div>
                                        <h3 className='text-[30px] font-serif xl:mt-10 lg:mt-0 md:mt-2 mt-6'> Tüm Danışmanlık</h3>
                                        <h3 className='text-[30px] font-serif'> Hizmetlerine Göz at</h3>
                                    </div>
                                    <p><FaArrowRightLong className='text-7xl mt-5' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConsultancyServices;