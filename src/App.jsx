import './App.css'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Sections from './components/Sections/Sections'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Sections />
      </main>
    </>
  )
}

export default App
