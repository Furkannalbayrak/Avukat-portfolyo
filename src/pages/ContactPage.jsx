import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";

import * as yup from 'yup';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

const ContactPage = () => {

  const registerFormSchemas = yup.object().shape({
    nameSurname: yup.string().required("Ad Soyad alanı zorunludur"),
    email: yup.string().email("Geçerli bir e-mail adresi girin").required("E-mail adresi zorunludur"),
    title: yup.string().required("Konu alanı zorunludur"),
    text: yup.string().required("Metin alanı zorunludur")
  });


  const formik = useFormik({
    initialValues: {
      nameSurname: "",
      email: "",
      title: "",
      text: "",
    },

    validationSchema: registerFormSchemas,

    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);

        const templateParams = {
          name: values.nameSurname,
          email: values.email,
          message: values.text,
          title: values.title,
        };

        const result = await emailjs.send(
          'service_8c4xuz5',
          'template_48mtkkw',
          templateParams,
          'vyOPqbXOtl1DdrL1O'
        );

        alert('Mesajınız başarıyla gönderildi!');
        formik.resetForm();

      } catch (error) {
        console.error('Hata:', error);
        alert('Mesaj gönderilirken bir hata oluştu.');
      } finally {
        setSubmitting(false);
      }
    }

  });

  return (
    <>

      <Helmet>
        <title>İletişim - Av. Beyza Albayrak</title>
        <meta name="description" content="Avukat Beyza Albayrak ile iletişime geçin. Hukuki danışmanlık ve destek için formu doldurun ya da iletişim bilgilerimizi kullanın." />
        <meta name="keywords" content="iletişim, avukat, hukuki danışmanlık, av. beyza albayrak, telefon, e-posta, adres" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="İletişim - Av. Beyza Albayrak" />
        <meta property="og:description" content="Hukuki destek almak için Avukat Beyza Albayrak ile iletişime geçin." />
      </Helmet>


      <div className="min-h-screen bg-gray-100">
        <div className="max-w-screen-xl mx-auto sm:px-12 px-9 lg:-translate-y-28 -translate-y-20">
          <div className="flex flex-col lg:gap-28 gap-14">

            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-poppins text-white lg:mb-0 mb-4">
                İletişim
              </h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl shadow-2xl px-4 py-8 sm:px-8 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-3 mb-8">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 shadow-md rounded-xl p-4 border-l-4 hover:border-blue-500 transition duration-100">
                    <FaEnvelope className="text-xl sm:text-2xl text-blue-600 hidden sm:block" />
                    <div>
                      <p className="text-gray-700 font-medium text-lg">E-posta</p>
                      <p className="text-gray-800 text-[15px]">avbeyzaalbayrak@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shadow-md rounded-xl p-4 border-l-4 hover:border-green-500 transition duration-100">
                    <FaPhone className="text-xl sm:text-2xl text-blue-600 hidden sm:block" />
                    <div>
                      <p className="text-gray-700 font-medium text-lg">Telefon</p>
                      <p className="text-gray-800 text-[15px]">+90 0543 223 84 41</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shadow-md rounded-xl p-4 border-l-4 hover:border-red-500 transition duration-100">
                    <FaMapMarkerAlt className="text-xl sm:text-2xl text-blue-600 mt-1 hidden sm:block" />
                    <div>
                      <p className="text-gray-700 font-medium text-lg">Adres</p>
                      <p className="text-gray-800 text-[15px]">
                        Zuhuratbaba Mah. İncirli Cad.<br />No:43/12 Bakırköy / İSTANBUL
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shadow-md rounded-xl p-4 border-l-4 hover:border-orange-500 transition duration-100">
                    <FaShareAlt className="text-xl sm:text-2xl text-blue-600 mt-1 hidden sm:block" />
                    <div className='flex flex-col gap-4'>
                      <p className="text-gray-700 font-medium text-lg">Sosyal Medya</p>
                      <div className="text-4xl flex gap-3">
                        <a
                          href="https://wa.me/905432238441"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                        >
                          <FaWhatsapp />
                        </a>
                        <a
                          href="https://instagram.com/avbeyzaalbayrak"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/beyza-albayrak-108b6421a/?originalSubdomain=tr"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          <RiLinkedinBoxLine />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* İletişim formu */}
              <div className="backdrop-blur-sm bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-semibold text-center text-gray-800 flex items-center justify-center gap-3 mb-8">
                  Bize Ulaşın
                </h2>

                <form className="space-y-6" onSubmit={formik.handleSubmit}>

                  <div>
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      Konu
                    </label>
                    <input
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text"
                      id="title"
                      name='title'
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="Ceza Hukuku, Miras Hukuku"
                    />
                    {formik.touched.title && formik.errors.title && (
                      <p className='text-red-500 text-sm mt-1'>{formik.errors.title}</p>
                    )}
                  </div>


                  <div>
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      value={formik.values.nameSurname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='nameSurname'
                      id='nameSurname'
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="Adınız ve soyadınız"
                    />
                    {formik.touched.nameSurname && formik.errors.nameSurname && (
                      <p className='text-red-500 text-sm mt-1'>{formik.errors.nameSurname}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="email"
                      name="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                      placeholder="ornek@email.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className='text-red-500 text-sm mt-1'>{formik.errors.email}</p>
                    )}
                  </div>


                  <div>
                    <label className="block text-md font-medium text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      value={formik.values.text}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      id="text"
                      name='text'
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                    {formik.touched.text && formik.errors.text && (
                      <p className='text-red-500 text-sm mt-1'>{formik.errors.text}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={`w-full py-3 px-6 rounded-xl transition-all duration-200 text-lg font-semibold shadow-md ${formik.isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                      }`}
                  >
                    {formik.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Harita bölümü */}
        <div className="w-full mt-16">
          <div className="h-[500px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.743759111754!2d28.869377575897282!3d40.987091471353466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb581a5e8d39%3A0x461b183723f240ca!2zWnVodXJhdGJhYmEsIMSwbmNpcmxpIENkLiBObzo0MyBEOjEyLCAzNDE0NyBCYWvEsXJrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1749987114549!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ofis Konumu"
            ></iframe>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactPage;