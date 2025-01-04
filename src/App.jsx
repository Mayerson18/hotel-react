import './App.css'
import About from './components/About'
import Carousel from './components/Carousel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'

function App() {

  return (
    <>
      <Header/>
      <Carousel />
      <main className='container'>
        <About />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
