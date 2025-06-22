import React from 'react';

const SigortaHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="md:w-[72%] w-[82%] lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-16 md:gap-3">
        <div className="text-center mb-12">
          <h2 className="text-[42px] md:text-5xl lg:text-6xl font-poppins text-white mb-4">
            Sigorta Hukuku
          </h2>
        </div>

        <div className="w-full max-w-6xl pl-4">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 mb-8">
                <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-[40px] font-poppins text-gray-800">Sigorta Hakları</h3>
              </div>
            </div>

            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-xl md:text-2xl font-serif">
                <li>Özel sigorta hakları</li>
                <li>Genel sigorta hakları</li>
                <li>Özel sigorta hakları</li>
                <li>Genel sigorta hakları</li>
                <li>Özel sigorta hakları</li>
                <li>Genel sigorta hakları</li>
                <li>Özel sigorta hakları</li>
                <li>Genel sigorta hakları</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SigortaHukuku;
