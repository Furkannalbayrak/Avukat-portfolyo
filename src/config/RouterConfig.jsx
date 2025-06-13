import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ArticlePage from '../pages/ArticlePage'
import HeaderPage from '../pages/HeaderPage'
import ContactPage from '../pages/ContactPage'
import Header from '../components/Header'
import SimpleHeader from '../components/SimpleHeader'
import About from '../components/About'
import Services from '../components/Services'
import Articles from '../components/Articles'

function RouterConfig() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <About/>
            <Services/>
            <Articles/>
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
        
        <Route path='/article' element={
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
      </Routes>
    </div>
  )
}

export default RouterConfig