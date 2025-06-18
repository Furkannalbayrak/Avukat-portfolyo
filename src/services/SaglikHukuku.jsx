import React from 'react';

const SaglikHukuku = () => {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="container px-4 lg:-translate-y-28 -translate-y-20 flex flex-col lg:gap-28 gap-14">
        <div className="text-center">
          <h2 className="text-[42px] lg:text-6xl  md:text-5xl font-poppins text-white mb-4">
            Sağlık Hukuku
          </h2>
        </div>

        <div className="xl:w-10/12 w-10/12 mx-auto">
          <div className="mb-8 md:mt-8 lg:mt-0">
            <div className='md:ml-10'>
              <div className="flex md:w-10/12 justify-center md:justify-start mb-8 ">
                <h3 className="xl:text-[40px] lg:text-4xl text-3xl font-poppins text-gray-800">Sağlık İşlemleri</h3>
              </div>
            </div>
            
            <div className="text-gray-800 leading-relaxed">
              <ul className="list-disc list-inside space-y-3 text-2xl font-serif">
                <li>İlaç ve tıbbi malzemeler</li>
                <li>Şirket kurulumu ve işletme açılışı</li>
                <li>İşletme devralma ve satış işlemleri</li>
                <li>Ticari borçlanma işlemleri</li>
                <li>İşletme yasaları ve düzenlemeler</li>
                <li>Ticari anlaşmalar ve sözleşmeler</li>
                <li>İşletme hakları ve sorumluluklar</li>
                <li>Ticari müdahele ve müdahale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaglikHukuku;
