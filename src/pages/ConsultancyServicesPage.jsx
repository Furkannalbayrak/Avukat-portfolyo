import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultancyServicesPage = () => {

  const navigate = useNavigate()

  const consultancyServices = [
    {
      title: "Şirkete Yönelik Hukuku Danışmanlığı",
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
      image: "https://www.ekinhukuk.com.tr/wp-content/uploads/2022/10/yabancilar-hukuku.jpg"
    },
    {
      title: "Alternatif Çözüm Önerileri",
      slug: "alternatif-cozum-onerileri",
      image: "https://www.kriterhukuk.com/uploads/img/urunler/Fintech-1736170927-mUgaW.jpg"
    },
    {
      title: "İşletme Danışmanlığı",
      slug: "isletme-danismanligi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVXeEt4Tbu9UX4AvzwnjVn4TB68w1DJ34LA&s"
    },
    {
      title: "Dava Dosyası İnceleme",
      slug: "dava-dosyasi-inceleme",
      image: "https://av-saimincekas.com/wp-content/uploads/2020/07/Savcilik-Dosya-Inceleme-Talebi-Dilekcesi.jpg"
    },
    {
      title: "Noter İşleri Danışmanlığı",
      slug: "noter-isleri-danismanligi",
      image: "https://avsahincarsanbali.com/wp-content/uploads/2021/09/online-noteruzaktan-noterlik-is%CC%A7lemleric%CC%A7ars%CC%A7anbali-hukuk-bu%CC%88rosu-.jpeg"
    },
  ];

  return (
    <section className=" bg-gray-100 flex justify-center ">
      <div>
        <div className="max-w-screen-xl mx-auto lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14" >
          <div className="text-center">
            <h2 className="text-[36px] lg:text-6xl font-poppins text-white mb-4">
              Hukuki Danışmanlık
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto px-4">
            {consultancyServices.map((service, index) => (
              <div onClick={() => navigate(`/${service.slug}`)}
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

export default ConsultancyServicesPage