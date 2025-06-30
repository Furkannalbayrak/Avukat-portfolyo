import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import RouterConfig from './config/RouterConfig'
import { Helmet } from 'react-helmet'

function App() {
  useEffect(() => {
    document.title = 'Avukat Portföy - Profesyonel Hukuki Hizmetler'
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Helmet htmlAttributes={{ lang: 'tr' }}>
        <meta charSet="utf-8" />
        <title>Avukat Portföy - Profesyonel Hukuki Hizmetler</title>
        <meta name="description" content="Tüm hukuki ihtiyaçlarınızı karşılayacak profesyonel avukat hizmetleri. Gayrimenkul, sağlık, borçlar ve idari ceza hukuku konularında uzman avukat takımı." />
        <meta name="author" content="Avukat Portföy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Avukat Portföy - Profesyonel Hukuki Hizmetler" />
        <meta property="og:description" content="Tüm hukuki ihtiyaçlarınızı karşılayacak profesyonel avukat hizmetleri. Gayrimenkul, sağlık, borçlar ve idari ceza hukuku konularında uzman avukat takımı." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:url" content="https://www.avukatportfoy.com" />
        <meta property="og:image" content="https://www.avukatportfoy.com/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Avukat Portföy - Profesyonel Hukuki Hizmetler" />
        <meta name="twitter:description" content="Tüm hukuki ihtiyaçlarınızı karşılayacak profesyonel avukat hizmetleri." />
        <meta name="twitter:image" content="https://www.avukatportfoy.com/twitter-image.jpg" />

        <link rel="canonical" href="https://www.avukatportfoy.com" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <RouterConfig />
      <Footer />
    </div>
  )
}

export default App
