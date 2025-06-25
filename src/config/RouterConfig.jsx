import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ArticlePage from '../pages/ArticlePage'
import ContactPage from '../pages/ContactPage'
import Header from '../components/Header'
import SimpleHeader from '../components/SimpleHeader'
import About from '../components/About'
import Services from '../components/Services'
import Articles from '../components/Articles'
import ConsultancyServicesPage from '../pages/ConsultancyServicesPage'
import ConsultancyServices from '../components/ConsultancyServices'
import CezaHukuku from '../services/CezaHukuku'
import BorclarHukuku from '../services/BorclarHukuku'
import IsveSosyalGuvenlikHukuku from '../services/IsveSosyalGuvenlikHukuku'
import AileveMirasHukuku from '../services/AileveMirasHukuku'
import BilisimHukuku from '../services/BilisimHukuku'
import GayrimenkulHukuku from '../services/GayrimenkulHukuku'
import IcraveIflasHukuku from '../services/IcraveIflasHukuku'
import IdareveVergiHukuku from '../services/IdareveVergiHukuku'
import IdariCezaHukuku from '../services/IdariCezaHukuku'
import InsanHaklariHukuku from '../services/InsanHaklariHukuku'
import KiraHukuku from '../services/KiraHukuku'
import SaglikHukuku from '../services/SaglikHukuku'
import SigortaHukuku from '../services/SigortaHukuku'
import SozlesmelerHukuku from '../services/SozlesmelerHukuku'
import TazminatHukuku from '../services/TazminatHukuku'
import TicaretHukuku from '../services/TicaretHukuku'
import TuketiciHukuku from '../services/TuketiciHukuku'
import YabancilarHukuku from '../services/YabancilarHukuku'
import ScrollToTop from '../scrollSetting/ScrollToTop'
import SirketeYonelikHukukiDanismanlik from "../consultancyServices/SirketeYonelikHukukiDanismanlik"
import KurumsalDanismanlik from "../consultancyServices/KurumsalDanismanlik"
import SozlesmeVeHukukiBelgelerinAnalizi from "../consultancyServices/SozlesmeVeHukukiBelgelerinAnalizi"
import OnleyiciVeKoruyucuHukukiDanismanlik from "../consultancyServices/OnleyiciVeKoruyucuHukukiDanismanlik"
import SozlesmeIhtarnameVeTaahhutnameHazirlanmasi from "../consultancyServices/SozlesmeIhtarnameVeTaahhutnameHazirlanmasi"
import AlternatifCozumOnerileri from "../consultancyServices/AlternatifCozumOnerileri"
import IsletmeDanismanligi from "../consultancyServices/IsletmeDanismanligi"
import DavaDosyasiInceleme from "../consultancyServices/DavaDosyasiInceleme"
import NoterIsleriDanismanligi from "../consultancyServices/NoterIsleriDanismanligi"

// ScrollToTop --> navigate değiştiğinde ve yeni bir sayfa açıldığında en üstten başlatır

function RouterConfig() {

  
  return (
    <div>
      <ScrollToTop/>
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
            <ConsultancyServicesPage/>
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
    </div>
  )
}

export default RouterConfig