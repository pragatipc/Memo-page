"use client"

import { useState } from "react"
import axios from "axios"

const CTA = () => {
  const [activeTab, setActiveTab] = useState("contact")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await axios.post("/api/contact", { name, email, message })
      setSubmitted(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error("Error details:", err.response ? err.response.data : err.message)
      setError("Failed to submit form. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      await axios.post("/api/waitlist", { name, email })
      setSubmitted(true)
      setName("")
      setEmail("")
    } catch (err) {
      console.error("Error details:", err.response ? err.response.data : err.message)
      setError("Failed to join waitlist. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setError("")
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge">Get Started</span>
          <h2 className="section-title">Ready to Transform Dementia Care?</h2>
          <p className="section-subtitle">
            Join thousands of caregivers and healthcare professionals already using MemoTag to provide better care for
            their loved ones.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="cta-tabs">
            <div
              className={`cta-tab ${activeTab === "contact" ? "active" : ""}`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Us
            </div>
            <div
              className={`cta-tab ${activeTab === "waitlist" ? "active" : ""}`}
              onClick={() => setActiveTab("waitlist")}
            >
              Join Waitlist
            </div>
          </div>

          <div className="cta-form-container">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3 className="success-title">{activeTab === "contact" ? "Thank You!" : "You're on the List!"}</h3>
                <p className="success-description">
                  {activeTab === "contact"
                    ? "Your message has been received. Our team will get back to you shortly."
                    : "Thank you for joining our waitlist. We'll notify you as soon as MemoTag is available in your region."}
                </p>
                <button className="btn btn-primary" onClick={resetForm}>
                  {activeTab === "contact" ? "Send Another Message" : "Back to Form"}
                </button>
              </div>
            ) : (
              <form onSubmit={activeTab === "contact" ? handleContactSubmit : handleWaitlistSubmit}>
                {error && <div className="error-message mb-4">{error}</div>}

                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {activeTab === "contact" && (
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading
                    ? activeTab === "contact"
                      ? "Sending..."
                      : "Joining..."
                    : activeTab === "contact"
                      ? "Send Message"
                      : "Join Waitlist"}
                </button>

                {activeTab === "waitlist" && (
                  <p className="text-center mt-2 text-sm">
                    Be among the first to experience MemoTag when it launches in your area.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
