import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import ScrollToTop from '../scrollSetting/ScrollToTop'
import LoadingSpinner from '../components/LoadingSpinner'

const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ArticlePage = lazy(() => import('../pages/ArticlePage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const Header = lazy(() => import('../components/Header'))
const SimpleHeader = lazy(() => import('../components/SimpleHeader'))
const About = lazy(() => import('../components/About'))
const Services = lazy(() => import('../components/Services'))
const Articles = lazy(() => import('../components/Articles'))
const ConsultancyServicesPage = lazy(() => import('../pages/ConsultancyServicesPage'))
const ConsultancyServices = lazy(() => import('../components/ConsultancyServices'))

// Services
const CezaHukuku = lazy(() => import('../services/CezaHukuku'))
const BorclarHukuku = lazy(() => import('../services/BorclarHukuku'))
const IsveSosyalGuvenlikHukuku = lazy(() => import('../services/IsveSosyalGuvenlikHukuku'))
const AileveMirasHukuku = lazy(() => import('../services/AileveMirasHukuku'))
const BilisimHukuku = lazy(() => import('../services/BilisimHukuku'))
const GayrimenkulHukuku = lazy(() => import('../services/GayrimenkulHukuku'))
const IcraveIflasHukuku = lazy(() => import('../services/IcraveIflasHukuku'))
const IdareveVergiHukuku = lazy(() => import('../services/IdareveVergiHukuku'))
const IdariCezaHukuku = lazy(() => import('../services/IdariCezaHukuku'))
const InsanHaklariHukuku = lazy(() => import('../services/InsanHaklariHukuku'))
const KiraHukuku = lazy(() => import('../services/KiraHukuku'))
const SaglikHukuku = lazy(() => import('../services/SaglikHukuku'))
const SigortaHukuku = lazy(() => import('../services/SigortaHukuku'))
const SozlesmelerHukuku = lazy(() => import('../services/SozlesmelerHukuku'))
const TazminatHukuku = lazy(() => import('../services/TazminatHukuku'))
const TicaretHukuku = lazy(() => import('../services/TicaretHukuku'))
const TuketiciHukuku = lazy(() => import('../services/TuketiciHukuku'))
const YabancilarHukuku = lazy(() => import('../services/YabancilarHukuku'))

// Consultancy Services
const SirketeYonelikHukukiDanismanlik = lazy(() => import("../consultancyServices/SirketeYonelikHukukiDanismanlik"))
const KurumsalDanismanlik = lazy(() => import("../consultancyServices/KurumsalDanismanlik"))
const SozlesmeVeHukukiBelgelerinAnalizi = lazy(() => import("../consultancyServices/SozlesmeVeHukukiBelgelerinAnalizi"))
const OnleyiciVeKoruyucuHukukiDanismanlik = lazy(() => import("../consultancyServices/OnleyiciVeKoruyucuHukukiDanismanlik"))
const SozlesmeIhtarnameVeTaahhutnameHazirlanmasi = lazy(() => import("../consultancyServices/SozlesmeIhtarnameVeTaahhutnameHazirlanmasi"))
const AlternatifCozumOnerileri = lazy(() => import("../consultancyServices/AlternatifCozumOnerileri"))
const IsletmeDanismanligi = lazy(() => import("../consultancyServices/IsletmeDanismanligi"))
const DavaDosyasiInceleme = lazy(() => import("../consultancyServices/DavaDosyasiInceleme"))
const NoterIsleriDanismanligi = lazy(() => import("../consultancyServices/NoterIsleriDanismanligi"))

// ScrollToTop --> navigate değiştiğinde ve yeni bir sayfa açıldığında en üstten başlatır

function RouterConfig() {


  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner/>}>

        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <About />
              <ConsultancyServices />
              <Services />
              <Articles />
            </>
          } />

          <Route path='/about' element={
            <>
              <SimpleHeader />
              <AboutPage />
            </>
          } />

          <Route path='/services' element={
            <>
              <SimpleHeader />
              <ServicesPage />
            </>
          } />

          <Route path='/mevzuat' element={
            <>
              <SimpleHeader />
              <ArticlePage />
            </>
          } />

          <Route path='/contact' element={
            <>
              <SimpleHeader />
              <ContactPage />
            </>
          } />





          <Route path='ceza-hukuku' element={
            <>
              <SimpleHeader />
              <CezaHukuku />
            </>
          } />
          <Route path='borclar-hukuku' element={
            <>
              <SimpleHeader />
              <BorclarHukuku />
            </>
          } />
          <Route path='is-ve-sosyal-guvenlik-hukuku' element={
            <>
              <SimpleHeader />
              <IsveSosyalGuvenlikHukuku />
            </>
          } />
          <Route path='aile-ve-miras-hukuku' element={
            <>
              <SimpleHeader />
              <AileveMirasHukuku />
            </>
          } />
          <Route path='bilisim-hukuku' element={
            <>
              <SimpleHeader />
              <BilisimHukuku />
            </>
          } />
          <Route path='gayrimenkul-hukuku' element={
            <>
              <SimpleHeader />
              <GayrimenkulHukuku />
            </>
          } />
          <Route path='icra-ve-iflas-hukuku' element={
            <>
              <SimpleHeader />
              <IcraveIflasHukuku />
            </>
          } />
          <Route path='idare-ve-vergi-hukuku' element={
            <>
              <SimpleHeader />
              <IdareveVergiHukuku />
            </>
          } />
          <Route path='idari-ceza-hukuku' element={
            <>
              <SimpleHeader />
              <IdariCezaHukuku />
            </>
          } />
          <Route path='insan-haklari-hukuku' element={
            <>
              <SimpleHeader />
              <InsanHaklariHukuku />
            </>
          } />
          <Route path='kira-hukuku' element={
            <>
              <SimpleHeader />
              <KiraHukuku />
            </>
          } />
          <Route path='saglik-hukuku' element={
            <>
              <SimpleHeader />
              <SaglikHukuku />
            </>
          } />
          <Route path='sigorta-hukuku' element={
            <>
              <SimpleHeader />
              <SigortaHukuku />
            </>
          } />
          <Route path='sozlesmeler-hukuku' element={
            <>
              <SimpleHeader />
              <SozlesmelerHukuku />
            </>
          } />
          <Route path='tazminat-hukuku' element={
            <>
              <SimpleHeader />
              <TazminatHukuku />
            </>
          } />
          <Route path='ticaret-hukuku' element={
            <>
              <SimpleHeader />
              <TicaretHukuku />
            </>
          } />
          <Route path='tuketici-hukuku' element={
            <>
              <SimpleHeader />
              <TuketiciHukuku />
            </>
          } />
          <Route path='yabancilar-hukuku' element={
            <>
              <SimpleHeader />
              <YabancilarHukuku />
            </>
          } />





          <Route path='consultancy-services' element={
            <>
              <SimpleHeader />
              <ConsultancyServicesPage />
            </>
          } />
          <Route path='sirketlere-yonelik-hukuki-danismanlik' element={
            <>
              <SimpleHeader />
              <SirketeYonelikHukukiDanismanlik />
            </>
          } />
          <Route path='kurumsal-danismanlik' element={
            <>
              <SimpleHeader />
              <KurumsalDanismanlik />
            </>
          } />
          <Route path='sozlesme-ve-hukuki-belgelerin-analizi' element={
            <>
              <SimpleHeader />
              <SozlesmeVeHukukiBelgelerinAnalizi />
            </>
          } />
          <Route path='onleyici-ve-koruyucu-hukuki-danismanlik' element={
            <>
              <SimpleHeader />
              <OnleyiciVeKoruyucuHukukiDanismanlik />
            </>
          } />
          <Route path='sozlesme-ihtarname-ve-taahhutname-hazirlanmasi' element={
            <>
              <SimpleHeader />
              <SozlesmeIhtarnameVeTaahhutnameHazirlanmasi />
            </>
          } />
          <Route path='alternatif-cozum-onerileri' element={
            <>
              <SimpleHeader />
              <AlternatifCozumOnerileri />
            </>
          } />
          <Route path='isletme-danismanligi' element={
            <>
              <SimpleHeader />
              <IsletmeDanismanligi />
            </>
          } />
          <Route path='dava-dosyasi-inceleme' element={
            <>
              <SimpleHeader />
              <DavaDosyasiInceleme />
            </>
          } />
          <Route path='noter-isleri-danismanligi' element={
            <>
              <SimpleHeader />
              <NoterIsleriDanismanligi />
            </>
          } />

        </Routes>

      </Suspense>

    </div>
  )
}

export default RouterConfig