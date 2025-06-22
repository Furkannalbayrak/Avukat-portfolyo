import React from 'react';

const IdareveVergiHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="md:w-[72%] w-[82%] lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3 gap-2">
        <div className="text-center mb-12">
          <h2 className="text-[36px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
            İdare ve Vergi Hukuku
          </h2>
        </div>

        <div className="w-full max-w-6xl pl-4">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 mb-8">
                <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">İdare ve Vergi Hakları</h3>
              </div>
            </div>

            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-xl md:text-2xl font-serif">
                <li>İdare davaları ve işlemler</li>
                <li>Vergi hakları ve borçları</li>
                <li>İdare kararları ve işlemler</li>
                <li>Vergi muameleleri ve işlemler</li>
                <li>İdare hakları ve borçları</li>
                <li>Vergi hakları ve borçları</li>
                <li>İdare hakları ve borçları</li>
                <li>Vergi hakları ve borçları</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdareveVergiHukuku;
