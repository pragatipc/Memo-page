"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <span>MEMO</span>TAG
        </Link>

        <nav className="nav-links">
          <Link to="#home">Home</Link>
          <Link to="#problem">Problem</Link>
          <Link to="#solution">Solution</Link>
          <Link to="#traction">Traction</Link>
          <Link to="#contact">Contact</Link>
        </nav>

        <div className="cta-buttons">
          <Link to="#contact" className="btn btn-outline">
            Request Demo
          </Link>
          <Link to="#contact" className="btn btn-primary">
            Pre-Order Now
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="#home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="#problem" onClick={() => setIsOpen(false)}>
            Problem
          </Link>
          <Link to="#solution" onClick={() => setIsOpen(false)}>
            Solution
          </Link>
          <Link to="#traction" onClick={() => setIsOpen(false)}>
            Traction
          </Link>
          <Link to="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link to="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary mt-2">
            Pre-Order Now
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
