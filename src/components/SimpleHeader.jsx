import React, { useEffect, useState } from 'react'
import logo from '../images/logo6.webp'
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // 🔹 Hamburger ikonları
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import simpleHeaderImage from '../images/simpleHeader/simpleHeaderr.webp'

function SimpleHeader() {

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
                <title>Av. Beyza Albayrak | İstanbul</title>
                <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/" />
                <meta name="description" content="Av. Beyza Albayrak - İstanbul merkezli, uzman hukuk hizmetleri sunar. Ceza, borçlar, aile, icra hukuku ve daha fazlası." />
                <meta name="keywords" content="avukat, İstanbul avukat, ceza hukuku, aile hukuku, icra iflas hukuku, beyza albayrak" />
                <meta name="author" content="Av. Beyza Albayrak" />

                {/* Open Graph */}
                <meta property="og:title" content="Avukat Beyza Albayrak | İstanbul Hukuk Bürosu" />
                <meta property="og:description" content="Uzmanlık alanlarımızda güçlü çözümler sunuyoruz. Faaliyet alanlarımızı keşfedin." />
                <meta property="og:image" content={images[bgIndex]} />
                <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/" />
                <meta property="og:type" content="website" />

                {/* JSON-LD: WebSite yapısı */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Avukat Beyza Albayrak",
                        "url": "https://www.beyzaalbayrak.com.tr",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Av. Beyza Albayrak",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.beyzaalbayrak.com.tr/logo.png"
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
                            <li className='font-poppins xl:text-xl lg:text-lg'>
                                <Link to="/" className='border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer block'>Anasayfa</Link>
                            </li>
                            <li className='font-poppins xl:text-xl lg:text-lg'>
                                <Link to="/about" className='border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer block'>Hakkımda</Link>
                            </li>

                            <li
                                className='relative group font-poppins xl:text-xl lg:text-lg py-2 px-3'>
                                <Link to="/services" className='cursor-pointer border-2 border-transparent group-hover:border-b-white pb-1 inline-block'>
                                    Faaliyet Alanlarım
                                </Link>
                                <ul className='absolute hidden text-lg group-hover:block bg-black text-white mt-2 rounded shadow-lg w-60 z-10'>
                                    <li><Link to="/ceza-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Ceza Hukuku</Link></li>
                                    <li><Link to="/borclar-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Borçlar Hukuku</Link></li>
                                    <li><Link to="/is-ve-sosyal-guvenlik-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>İş ve Sosyal Güvenlik Hukuku</Link></li>
                                    <li><Link to="/idare-ve-vergi-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>İdare ve Vergi Hukuku</Link></li>
                                    <li><Link to="/aile-ve-miras-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Aile ve Miras Hukuku</Link></li>
                                    <li><Link to="/kira-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Kira Hukuku</Link></li>
                                    <li><Link to="/tazminat-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Tazminat Hukuku</Link></li>
                                    <li><Link to="/icra-ve-iflas-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>İcra ve İflas Hukuku</Link></li>
                                    <li><Link to="/yabancilar-hukuku" className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer block'>Yabancılar Hukuku</Link></li>
                                </ul>
                            </li>

                            <li className='font-poppins xl:text-xl lg:text-lg'>
                                <Link to="/mevzuat" className='border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer block'>Mevzuat</Link>
                            </li>
                            <li className='font-poppins xl:text-xl lg:text-lg'>
                                <Link to="/contact" className='border-2 border-transparent hover:border-b-white py-2 px-2 cursor-pointer block'>İletişim</Link>
                            </li>
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
                                <li className='rounded hover:bg-gray-700 cursor-pointer'>
                                    <Link to="/" className="block py-2 px-3" onClick={() => setMenuOpen(false)}>
                                        Anasayfa
                                    </Link>
                                </li>
                                <li className='rounded hover:bg-gray-700 cursor-pointer'>
                                    <Link to="/about" className="block py-2 px-3" onClick={() => setMenuOpen(false)}>
                                        Hakkımda
                                    </Link>
                                </li>
                                <li className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer flex flex-col'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Link to="/services">Faaliyet Alanlarım</Link>
                                    <ul className='mt-2 ml-4 border-l border-gray-600 pl-3 space-y-2 text-gray-300 text-base'>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/ceza-hukuku" onClick={() => setMenuOpen(false)}>Ceza Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/borclar-hukuku" onClick={() => setMenuOpen(false)}>Borçlar Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/is-ve-sosyal-guvenlik-hukuku" onClick={() => setMenuOpen(false)}>İş ve Sosyal Güvenlik Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/idare-ve-vergi-hukuku" onClick={() => setMenuOpen(false)}>İdare ve Vergi Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/aile-ve-miras-hukuku" onClick={() => setMenuOpen(false)}>Aile ve Miras Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/kira-hukuku" onClick={() => setMenuOpen(false)}>Kira Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/tazminat-hukuku" onClick={() => setMenuOpen(false)}>Tazminat Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/icra-ve-iflas-hukuku" onClick={() => setMenuOpen(false)}>İcra ve İflas Hukuku</Link></li>
                                        <li className='hover:text-gray-100 cursor-pointer'><Link to="/yabancilar-hukuku" onClick={() => setMenuOpen(false)}>Yabancılar Hukuku</Link></li>
                                    </ul>
                                </li>
                                <li className='rounded hover:bg-gray-700 cursor-pointer'>
                                    <Link to="/mevzuat" className="block py-2 px-3" onClick={() => setMenuOpen(false)}>
                                        Mevzuat
                                    </Link>
                                </li>
                                <li className='rounded hover:bg-gray-700 cursor-pointer'>
                                    <Link to="/contact" className="block py-2 px-3" onClick={() => setMenuOpen(false)}>
                                        İletişim
                                    </Link>
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