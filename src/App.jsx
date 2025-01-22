import React from 'react'
import TopNavbar from './components/TopNavbar'
import MainNavbar from './components/MainNavbar'
import HeroPage from './components/HeroPage'
import CompanyPage from './components/company/CompanyPage'

const App = () => {
  return (
    <>
      <TopNavbar/>
      <MainNavbar/>
      <HeroPage/>
      <CompanyPage/>
    </>
  )
}

export default App