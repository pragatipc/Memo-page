import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Problem from "./components/Problem"
import Solution from "./components/Solution"
import Traction from "./components/Traction"
import Testimonials from "./components/Testimonials"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Traction />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
