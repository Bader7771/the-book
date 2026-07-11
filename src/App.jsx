import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
      </main>
      <Footer />
    </>
  )
}

export default App
