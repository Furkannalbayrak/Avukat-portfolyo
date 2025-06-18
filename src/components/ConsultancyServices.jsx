import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const ConsultancyServices = () => {
    const navigate = useNavigate();

    const consultancyServices = [
        {
            title: "Şirkete Yönelik Hukuki Danışmanlık",
            slug: "sirketlere-yonelik-hukuki-danismanlik",
            image: "https://serkahukuk.com/wp-content/uploads/2023/10/Business-Law-and-Lawyer-in-Turkey.jpg"
        },
        {
            title: "Kurumsal Danışmanlık",
            slug: "kurumsal-danismanlik",
            image: "https://www.sinerjimpsikoloji.com.tr/upload/faaliyetler/corporate-consulting.jpg"
        },
        {
            title: "Sözleşme ve Hukuki Belgelerin Analizi",
            slug: "sozlesme-ve-hukuki-belgelerin-analizi",
            image: "https://www.phdhukuk.com/wp-content/uploads/2023/01/consultation-businessman-male-lawyer-judge-consult-having-team-meeting-1024x683.jpg"
          },
          {
            title: "Önleyici ve Koruyucu Hukuki Danışmanlık",
            slug: "onleyici-ve-koruyucu-hukuki-danismanlik",
            image: "https://hankahukuk.com/wp-content/uploads/2023/06/konya-onleyici-ve-koruyucu-danismanlik-1024x538.jpeg"
          },
        {
            title: "Sözleşme, İhtarname ve Taahhütname Hazırlanması",
            slug: "sozlesme-ihtarname-ve-taahhutname-hazirlanmasi",
            image: "https://mehmetserhattercan.com/media/gallery/protokol-ve-sozlesme-hazirlanmasi-1793.jpg"
          },
    ];

    return (
        <section className="py-20 bg-gray-100 flex justify-center">
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
                                style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className='absolute inset-0 bg-black bg-opacity-40 z-0 rounded-xl'></div>
                                <div className="relative flex flex-col items-center text-center z-10 gap-5 h-full">
                                    <div className='h-[60%] flex items-center'>
                                        <h3 className="text-4xl font-serif text-white ">{service.title}</h3>
                                    </div>
                                    <div>
                                        <button className='absolute bottom-1 left-1/2 -translate-x-1/2 bg-transparent md:min-w-[140px] min-w-[160px] pt-3 pb-3 pr-6 pl-6 mb-2 rounded-2xl transition duration-150 border-2 border-white text-white hover:bg-[rgba(255,255,255,0.4)]'>
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
                                    <h3 className='text-[32px] font-serif xl:mt-10 lg:mt-0 md:mt-2 mt-6'> Tüm Danışmanlık</h3>
                                    <h3 className='text-[32px] font-serif'> Hizmetlerine Göz at</h3>
                                </div>
                                <p><FaArrowRightLong className='text-7xl mt-5' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultancyServices;