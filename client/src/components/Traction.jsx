const Traction = () => {
  const metrics = [
    {
      icon: "👥",
      value: "5,000+",
      label: "Pre-Orders",
      description: "From caregivers and healthcare facilities",
    },
    {
      icon: "🏢",
      value: "25+",
      label: "Partner Facilities",
      description: "Leading eldercare and memory care centers",
    },
    {
      icon: "🏆",
      value: "3",
      label: "Innovation Awards",
      description: "For breakthrough technology in eldercare",
    },
    {
      icon: "❤️",
      value: "98%",
      label: "Satisfaction Rate",
      description: "Among beta testing caregivers",
    },
  ]

  return (
    <section id="traction" className="section section-alt">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge">Our Traction</span>
          <h2 className="section-title">Trusted by Leading Eldercare Providers</h2>
          <p className="section-subtitle">
            MemoTag is rapidly gaining adoption across the eldercare ecosystem, with strong partnerships and growing
            demand from caregivers worldwide.
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className="card metric-card">
              <div className="metric-icon">{metric.icon}</div>
              <h3 className="metric-value">{metric.value}</h3>
              <h4 className="metric-label">{metric.label}</h4>
              <p className="metric-description">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="partners-container">
          <h3 className="partners-title">Our Partners</h3>
          <div className="partners-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="partner-logo">
                <span>Partner {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Traction
