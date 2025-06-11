import React, { useEffect, useState } from 'react'
import logo from '../images/logo6.png'
import { IoMdMenu, IoMdClose } from 'react-icons/io'; // 🔹 Hamburger ikonları

function Header() {

    const [bgIndex, setBgIndex] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

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

    return (
        <div>
            <nav className='h-screen bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)),  url(${images[bgIndex]})` }}>

                <div className='flex text-white xl:max-w-6xl xl:gap-4 lg:max-w-[970px]  mx-auto  '>

                    <div className='flex justify-center lg:justify-start w-full lg:w-auto '>
                        <img src={logo} alt="" className='xl:w-[350px] lg:w-80 w-[450px] ml-10 lg:ml-0' />
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
                            <li className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Anasayfa</li>
                            <li className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Hakkımda</li>

                            <li className='relative group font-poppins xl:text-xl lg:text-lg py-2 px-3'>
                                <span className='cursor-pointer border-2 border-transparent group-hover:border-b-white pb-1 inline-block'>
                                    Faaliyet Alanlarım
                                </span>
                                <ul className='absolute hidden text-lg group-hover:block bg-black text-white mt-2 rounded shadow-lg w-60 z-10'>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Ceza Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Borçlar Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Ticaret Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>İş Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Vergi Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Anayasa Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Sözleşmeler Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Aile Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Miras Hukuku</li>
                                    <li className='px-4 py-2 transition duration-150 hover:bg-gray-500 cursor-pointer'>Gayrimenkul Hukuku</li>

                                </ul>
                            </li>

                            <li className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-3 cursor-pointer'>Makaleler</li>
                            <li className='font-poppins xl:text-xl lg:text-lg border-2 border-transparent hover:border-b-white py-2 px-2 cursor-pointer'>İletişim</li>
                        </ul>

                    </div>
                </div>

                <div className='flex items-center justify-center lg:mt-12 mt-4'>
                    <div className='text-center text-white px-4'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl lg:text-4xl font-bold font-poppins leading-tight'>
                                Hukuki Danışmanlık Hizmetleri
                            </h1>
                            <p className='text-lg lg:text-xl font-poppins opacity-90'>
                                Profesyonel hukuki çözümler ve güvenilir danışmanlık
                            </p>
                            <div className='mt-8 space-x-6'>
                                <button className='bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 shadow-lg w-40'>
                                    İletişime Geç
                                </button>
                                <button className='bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-all duration-300 shadow-lg w-40'>
                                    Hakkımda
                                </button>
                            </div>
                        </div>
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
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Anasayfa
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Hakkımda
                                </li>
                                <li className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer flex flex-col'>
                                    <span>Faaliyet Alanlarım</span>
                                    <ul className='mt-2 ml-4 border-l border-gray-600 pl-3 space-y-2 text-gray-300 text-base'>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => setMenuOpen(false)}>Ceza Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => setMenuOpen(false)}>Aile Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => setMenuOpen(false)}>İcra Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => setMenuOpen(false)}>Ticaret Hukuku</li>
                                        <li className='hover:text-gray-100 cursor-pointer' onClick={() => setMenuOpen(false)}>Gayrimenkul Hukuku</li>
                                    </ul>
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Makaleler
                                </li>
                                <li
                                    className='py-2 px-3 rounded hover:bg-gray-700 cursor-pointer'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    İletişim
                                </li>
                            </ul>
                        </aside>
                    </>
                )}

            </nav>
        </div>
    )
}


export default Header