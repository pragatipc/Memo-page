"use client"

import { useState } from "react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "MemoTag has completely transformed how I care for my mother with Alzheimer's. The real-time alerts give me peace of mind, and the cognitive tracking helps me understand her condition better.",
      name: "Sarah Johnson",
      role: "Family Caregiver",
    },
    {
      quote:
        "As a neurologist, I've recommended MemoTag to dozens of families. The data it provides is invaluable for tracking disease progression and adjusting care plans accordingly.",
      name: "Dr. Michael Chen",
      role: "Neurologist",
    },
    {
      quote:
        "Our memory care facility implemented MemoTag across all residents, and we've seen a 40% reduction in wandering incidents and significantly improved response times to emergencies.",
      name: "Lisa Rodriguez",
      role: "Memory Care Director",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge">Testimonials</span>
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">
            Hear from caregivers, healthcare professionals, and families who have experienced the difference MemoTag
            makes.
          </p>
        </div>

        <div className="testimonial-container">
          <div className="testimonial-card">
            <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
            <h4 className="testimonial-author">{testimonials[currentIndex].name}</h4>
            <p className="testimonial-role">{testimonials[currentIndex].role}</p>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-arrow" onClick={prevTestimonial}>
              ←
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button className="testimonial-arrow" onClick={nextTestimonial}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
