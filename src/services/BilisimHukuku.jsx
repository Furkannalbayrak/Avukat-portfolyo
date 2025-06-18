import React from 'react';

const BilisimHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="container px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14">
        <div className="text-center">
          <h2 className="text-[42px] lg:text-6xl md:text-5xl font-poppins text-white mb-4">
            Bilisim Hukuku
          </h2>
        </div>

        <div className="xl:w-10/12 w-10/12 mx-auto">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 justify-center md:justify-start mb-8 ">
                <h3 className="xl:text-[40px] lg:text-4xl text-3xl font-poppins text-gray-800">Bilisim Hakları</h3>
              </div>
            </div>
            
            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-2xl font-serif">
                <li>Veri koruma ve gizlilik</li>
                <li>Yazılım lisansları</li>
                <li>Internet hukuku</li>
                <li>Elektronik imza</li>
                <li>Web sitesi hukuku</li>
                <li>Veri transferi</li>
                <li>Cloud hukuku</li>
                <li>Cyber güvenlik</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BilisimHukuku;
