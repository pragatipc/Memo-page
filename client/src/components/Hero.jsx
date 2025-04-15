import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="badge">The Future of Dementia Care</span>
          <h1 className="hero-title">
            <span>AI-Powered</span> Dementia Care Platform
          </h1>
          <p className="hero-subtitle">
            Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
          </p>
          <div className="hero-cta">
            <Link to="#contact" className="btn btn-primary">
              Pre-Order Now
            </Link>
            <Link to="#contact" className="btn btn-outline">
              Request Demo
            </Link>
          </div>
          <div className="shark-tank-badge">As seen on Shark Tank India</div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image float-animation">
            <img src="https://via.placeholder.com/500x400" alt="MemoTag Wearable Device" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
