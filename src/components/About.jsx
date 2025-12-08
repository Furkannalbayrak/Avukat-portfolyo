import React from 'react';
import "../css/about.css"
import { Helmet } from 'react-helmet';
import themis from '../images/about/themis.webp'

const About = () => {
  return (
    <>
      <Helmet>
        <title>Hakkımda | Av. Beyza Albayrak</title>
        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/about" />
        <meta
          name="description"
          content="Av. Beyza Albayrak hakkında detaylı bilgi edinin. Etik değerlere bağlı, deneyimli ve güvenilir bir avukatlık hizmeti sunmaktadır."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Hakkımda | Av. Beyza Albayrak" />
        <meta property="og:description" content="Av. Beyza Albayrak hakkında detaylı bilgi edinin. Etik değerlere bağlı, deneyimli ve güvenilir bir avukatlık hizmeti sunmaktadır." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/about" />
        <meta
          property="og:image"
          content="https://www.pngkey.com/png/full/560-5602499_clip-art-themis-figurine-greek-mythology-themis.png"
        />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımda | Av. Beyza Albayrak" />
        <meta name="twitter:description" content="Av. Beyza Albayrak hakkında detaylı bilgi edinin. Etik değerlere bağlı, deneyimli ve güvenilir bir avukatlık hizmeti sunmaktadır." />
        <meta
          name="twitter:image"
          content="https://www.pngkey.com/png/full/560-5602499_clip-art-themis-figurine-greek-mythology-themis.png"
        />
      </Helmet>


      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center sm:mb-8 mb-0 px-4 md:px-20">

              <h2 className="text-4xl md:text-5xl font-poppins mb-6 tracking-wide border-b-2 border-gray-300 pb-4">
                Hakkımda
              </h2>

              <div className="about-container flex flex-col md:flex-row items-center justify-center gap-10 text-gray-700 max-w-5xl mx-auto leading-relaxed">

                <div className="about-container-firstDiv md:w-1/2 w-full text-lg">

                  <p className="mb-4">
                    Av. Beyza ALBAYRAK, İstanbul merkezli ofisiyle, sahip olduğu uzmanlık ve deneyimle Türk ve yabancı müvekkillerine çeşitli hukuk alanlarında en iyi şekilde temsil, dava ve danışmanlık hizmeti sunmaktadır.
                  </p>
                  <p className="mb-4">
                    Her dava ve müvekkil ayrı ayrı önem arz ettiğinden her hukuki olay kişiselleştirilmekte ve kendi özelinde detaylı bir şekilde değerlendirilmektedir.
                  </p>
                  <p className="mb-4">
                    Ceza Hukuku, Aile Hukuku, İş Hukuku, Tazminat Hukuku, Kira Hukuku, İcra ve İflas Hukuku başta olmak üzere, çeşitli hukuk alanlarında bireylere ve kurumlara danışmanlık ve dava takibi hizmetleri sunmaktadır.
                  </p>
                  <p>
                    Avukatlık mesleğini etik değerlere bağlı kalarak yürütmeyi, her müvekkiline şeffaf, özenli ve etkin bir hukuki destek sunmayı ilke edinmiştir. Hizmet anlayışı, müvekkil ile güvene dayalı sağlam bir iletişim kurmak ve her aşamada çözüm odaklı yaklaşmaktır.
                  </p>
                </div>

                <div className="about-container-secondDiv">
                  <img
                    src={themis}
                    alt="Avukat Beyza Albayrak"
                    className='hidden lg:block h-[400px] w-8/12'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
