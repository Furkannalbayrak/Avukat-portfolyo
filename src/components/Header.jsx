import React, { useEffect, useState } from 'react'
import logo from '../images/logo6.webp'
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // 🔹 Hamburger ikonları
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "../css/header.css"


function Header() {

    const navigate = useNavigate();

    const [bgIndex, setBgIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const [showArrow, setShowArrow] = useState(true);

    const images = [
        "https://www.ekinlaw.com/wp-content/uploads/2024/04/avukatlik-sozlesmesinin-unsurlari-nelerdir.jpeg",
        "https://img.aydinlik.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2023/09/21/avukatlik-asgari-ucret-tarifesi-belli-oldu-mu-yeni-avukatlik-ucretleri-ne-kadar-oldu-2023-u2qn.jpg",
        "https://cdn.create.vista.com/api/media/medium/304130404/stock-photo-law-concept-background-gavel-judge-themis-statue-clock-scale-gray?token="
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowArrow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <Helmet>
                <title>Av. Beyza Albayrak | Profesyonel Hukuki Danışmanlık Hizmetleri</title>
                <meta
                    name="description"
                    content="Av. Beyza Albayrak ile profesyonel hukuki danışmanlık hizmetleri. Ceza hukuku, borçlar hukuku, iş hukuku ve daha fazlası hakkında güvenilir çözümler."
                />
                {/* Open Graph Tags */}
                <meta property="og:title" content="Av. Beyza Albayrak | Profesyonel Hukuki Danışmanlık Hizmetleri" />
                <meta property="og:description" content="Av. Beyza Albayrak ile profesyonel hukuki danışmanlık hizmetleri. Ceza hukuku, borçlar hukuku, iş hukuku ve daha fazlası hakkında güvenilir çözümler." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content={images[bgIndex]} />
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Av. Beyza Albayrak | Profesyonel Hukuki Danışmanlık Hizmetleri" />
                <meta name="twitter:description" content="Av. Beyza Albayrak ile profesyonel hukuki danışmanlık hizmetleri. Ceza hukuku, borçlar hukuku, iş hukuku ve daha fazlası hakkında güvenilir çözümler." />
                <meta name="twitter:image" content={images[bgIndex]} />
            </Helmet>


            <nav className='h-screen bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)),  url(${images[bgIndex]})` }}>

                <div className='flex text-white xl:max-w-6xl xl:gap-4 lg:max-w-[970px]  mx-auto  '>

                    <div className='flex justify-center lg:justify-start w-full lg:w-auto '>
                        <img src={logo} alt="" className='xl:w-[360px] lg:w-80 w-[450px] ml-5 lg:ml-0 loading="lazy" ' />
                    </div>

                    <div className='absolute right-5 top-4 lg:hidden z-30'>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='transition duration-200 p-2 rounded-3xl hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white'
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
                        </button>
                    </div>


                    <div className='flex-grow '>

                        <ul className='hidden lg:flex lg:flex-row flex-wrap gap-3 sm:gap-2 mt-10'>
                            <li onClick={() => navigate("/")}
                                className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Anasayfa</li>
                            <li onClick={() => navigate("/about")}
                                className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Hakkımda</li>

                            <li
                                className='relative group font-poppins xl:text-xl lg:text-lg py-2 px-3'>
                                <span onClick={() => navigate("/services")} className='cursor-pointer border-2 border-transparent group-hover:border-b-white pb-1 inline-block'>
                                    Faaliyet Alanlarım
                                </span>
                                <ul className='absolute hidden text-lg group-hover:block bg-black text-white mt-2 rounded shadow-lg w-60 z-10'>
                                    <li onClick={() => navigate("/ceza-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Ceza Hukuku</li>
                                    <li onClick={() => navigate("/borclar-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Borçlar Hukuku</li>
                                    <li onClick={() => navigate("/is-ve-sosyal-guvenlik-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>İş ve Sosyal Güvenlik Hukuku</li>
                                    <li onClick={() => navigate("/idare-ve-vergi-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>İdare ve Vergi Hukuku</li>
                                    <li onClick={() => navigate("/aile-ve-miras-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Aile ve Miras Hukuku</li>
                                    <li onClick={() => navigate("/kira-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Kira Hukuku</li>
                                    <li onClick={() => navigate("/tazminat-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Tazminat Hukuku</li>
                                    <li onClick={() => navigate("/icra-ve-iflas-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>İcra ve İflas Hukuku</li>
                                    <li onClick={() => navigate("/yabancilar-hukuku")} className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Yabancılar Hukuku</li>
                                </ul>
                            </li>

                            <li onClick={() => navigate("/mevzuat")}
                                className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Mevzuat</li>
                            <li onClick={() => navigate("/contact")}
                                className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-2 cursor-pointer'>İletişim</li>
                        </ul>

                    </div>
                </div>

                <div className='flex items-center justify-center lg:mt-12 mt-4'>
                    <div className='text-center text-white px-4'>
                        <div className='space-y-4'>
                            <h1 className='md:text-[33px] lg:text-[40px] text-[26px] font-bold font-poppins leading-tight'>
                                Hukuki Danışmanlık Hizmetleri
                            </h1>
                            <p className='text-lg lg:text-xl font-poppins opacity-90'>
                                Profesyonel hukuki çözümler ve güvenilir danışmanlık
                            </p>
                            <div className='mt-8 space-x-6'>
                                <button onClick={() => navigate("/consultancy-services")}
                                    className='bg-white text-black text-md md:text-lg py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 shadow-lg w-36 md:w-44'>
                                    Detaylı bilgi al
                                </button>
                                <button onClick={() => navigate("/contact")}
                                    className='bg-white text-black text-md md:text-lg py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 shadow-lg w-36 md:w-44 '>
                                    İletişime Geçsin
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


                {showArrow && (
                    <div className="fixed bottom-9 left-1/2 transform -translate-x-1/2 lg:hidden text-gray-500 text-[42px]">
                        <div
                            className="rounded-full border-2 border-gray-400 bg-white/90"
                            style={{ animation: "bounceFloor 4s ease-in-out infinite" }}
                        >
                            <MdKeyboardDoubleArrowDown />
                        </div>
                    </div>
                )}



                {menuOpen && (
                    <>
                        <div
                            className='fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40'
                            onClick={() => setMenuOpen(false)}
                            aria-hidden="true"
                        ></div>

                        <aside
                            className='fixed right-0 top-0 h-full w-72 bg-black text-white shadow-lg z-50 select-none flex flex-col p-6'
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile menu"
                        >
                            <ul className='flex flex-col gap-4 text-lg font-poppins'>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/")
                                    }}
                                >
                                    Anasayfa
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/about")
                                    }}
                                >
                                    Hakkımda
                                </li>
                                <li className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer flex flex-col'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span onClick={() => navigate("/services")}
                                    >Faaliyet Alanlarım</span>
                                    <ul className='mt-2 ml-4 border-l border-gray-600 pl-3 space-y-2 text-gray-300 text-base'>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/ceza-hukuku") }} >Ceza Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/borclar-hukuku") }}>Borçlar Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/is-ve-sosyal-guvenlik-hukuku") }}>İş ve Sosyal Güvenlik Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/idare-ve-vergi-hukuku") }}>İdare ve Vergi Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/aile-ve-miras-hukuku") }}>Aile ve Miras Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/kira-hukuku") }}>Kira Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/tazminat-hukuku") }}>Tazminat Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/icra-ve-iflas-hukuku") }}>İcra ve İflas Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => { setMenuOpen(false); navigate("/yabancilar-hukuku") }}>Yabancılar Hukuku</li>
                                    </ul>
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/mevzuat")
                                    }}
                                >
                                    Mevzuat
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => {
                                        setMenuOpen(false);
                                        navigate("/contact")
                                    }}
                                >
                                    İletişim
                                </li>
                            </ul>
                        </aside>
                    </>
                )}

            </nav>
        </>
    )
}


export default Header