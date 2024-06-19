import Image from 'next/image'
import Hero from './components/Home/Hero'
import Services from './components/Home/Services'
import About from './components/Home/About'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Services/>
      <About/>
    </main>
    <Footer/>
    </>
  )
}
