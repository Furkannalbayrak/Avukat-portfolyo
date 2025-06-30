import React, { useEffect, useState } from 'react'
import logo from '../images/logo6.webp'
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // 🔹 Hamburger ikonları
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import simpleHeaderImage from '../images/simpleHeader/simpleHeaderr.webp'

function SimpleHeader() {

    const navigate = useNavigate();

    const [bgIndex, setBgIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const images = [
        simpleHeaderImage,
    ];

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    return (
        <>
            <Helmet>
                <title>Avukat Beyza Albayrak | İstanbul</title>
                <meta name="description" content="Av. Beyza Albayrak - İstanbul merkezli, uzman hukuk hizmetleri sunar. Ceza, borçlar, aile, icra hukuku ve daha fazlası." />
                <meta name="keywords" content="avukat, İstanbul avukat, ceza hukuku, aile hukuku, icra iflas hukuku, beyza albayrak" />
                <meta name="author" content="Av. Beyza Albayrak" />

                {/* Open Graph */}
                <meta property="og:title" content="Avukat Beyza Albayrak | İstanbul Hukuk Bürosu" />
                <meta property="og:description" content="Uzmanlık alanlarımızda güçlü çözümler sunuyoruz. Faaliyet alanlarımızı keşfedin." />
                <meta property="og:image" content={images[bgIndex]} />
                <meta property="og:url" content="https://yourwebsite.com/" />
                <meta property="og:type" content="website" />

                {/* JSON-LD: WebSite yapısı */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Avukat Beyza Albayrak",
                        "url": "https://yourwebsite.com",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Av. Beyza Albayrak",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://yourwebsite.com/logo.png"
                            }
                        }
                    })}
                </script>
            </Helmet>


            <nav className='h-96 bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)),  url(${images[bgIndex]})` }}>

                <div className='flex text-white xl:max-w-6xl xl:gap-4 lg:max-w-[970px]  mx-auto  '>

                    <div className='flex justify-center lg:justify-start w-full lg:w-auto '>
                        <img src={logo} alt="" loading="eager" className='xl:w-[350px] lg:w-80 w-[430px] ml-5 lg:ml-0' />
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


export default SimpleHeader