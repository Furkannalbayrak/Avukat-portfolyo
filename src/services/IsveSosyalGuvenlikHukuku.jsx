import React from 'react';

const IsveSosyalGuvenlikHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="container px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14">
        <div className="text-center">
          <h2 className="text-[31px] xl:text-6xl lg:text-5xl md:text-4xl font-poppins text-white mb-4">
            İş ve Sosyal Güvenlik Hukuku
          </h2>
        </div>

        <div className="xl:w-10/12 w-10/12 mx-auto">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 justify-center md:justify-start mb-8 ">
                <h3 className="xl:text-[40px] lg:text-4xl text-3xl font-poppins text-gray-800">İş ve Sosyal Haklar</h3>
              </div>
            </div>
            
            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-2xl font-serif">
                <li>İş sözleşmeleri ve iş ilişkileri</li>
                <li>İşçi hakları ve sorumluluklar</li>
                <li>Sosyal güvenlik đóngushakları</li>
                <li>İş kazası ve meslek hastalığı</li>
                <li>İşten ayrılış ve emeklilik</li>
                <li>İşyeri düzenlemeleri ve düzenlemeler</li>
                <li>İşçilik hakları ve koruma</li>
                <li>İşyeri güvenliği ve sağlık</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsveSosyalGuvenlikHukuku;
