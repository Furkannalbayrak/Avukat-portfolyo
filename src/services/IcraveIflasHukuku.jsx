import React from 'react';

const IcraveIflasHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="container px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14">
        <div className="text-center">
          <h2 className="text-[42px] lg:text-6xl md:text-5xl font-poppins text-white mb-4">
            İcra ve İflas Hukuku
          </h2>
        </div>

        <div className="xl:w-10/12 w-10/12 mx-auto">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 justify-center md:justify-start mb-8 ">
                <h3 className="xl:text-[40px] lg:text-4xl text-3xl font-poppins text-gray-800">İcra ve İflas İşlemleri</h3>
              </div>
            </div>

            

            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-2xl font-serif">
                <li>İcra davaları ve işlemler</li>
                <li>İflas davaları ve işlemler</li>
                <li>Yürütme ve tahsilat işlemleri</li>
                <li>İflas yönetimi ve yönetim</li>
                <li>İcra muameleleri ve düzenlemeler</li>
                <li>İflas planı ve tahsis</li>
                <li>İcra ve iflas hakları</li>
                <li>İcra ve iflas koruma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcraveIflasHukuku;
