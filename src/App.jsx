import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import RouterConfig from './config/RouterConfig'
import { Helmet } from 'react-helmet'

function App() {
  useEffect(() => {
    document.title = 'Av. Beyza Albayrak - Profesyonel Hukuki Hizmetler'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Helmet htmlAttributes={{ lang: 'tr' }}>
        <meta charSet="utf-8" />
        <title>Av. Beyza Albayrak - Profesyonel Hukuki Hizmetler</title>
        <meta name="description" content="Av. Beyza Albayrak ile tüm hukuki ihtiyaçlarınız için profesyonel çözümler. Ceza, Aile, İş, Borçlar ve İdare Hukuku alanlarında uzman danışmanlık." />
        <meta name="author" content="Av. Beyza Albayrak" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Av. Beyza Albayrak - Profesyonel Hukuki Hizmetler" />
        <meta property="og:description" content="Av. Beyza Albayrak ile tüm hukuki ihtiyaçlarınız için profesyonel çözümler. Ceza, Aile, İş, Borçlar ve İdare Hukuku alanlarında uzman danışmanlık." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:url" content="https://www.beyzaalbayrak.com.tr/" />
        <meta property="og:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Av. Beyza Albayrak - Profesyonel Hukuki Hizmetler" />
        <meta name="twitter:description" content="Av. Beyza Albayrak ile tüm hukuki ihtiyaçlarınız için profesyonel çözümler." />
        <meta name="twitter:image" content="https://www.beyzaalbayrak.com.tr/preview.jpg" />

        <link rel="canonical" href="https://www.beyzaalbayrak.com.tr/" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
