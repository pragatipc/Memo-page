const Solution = () => {
  const features = [
    {
      icon: "⌚",
      title: "Wearable Device",
      description: "Comfortable, discreet wearable that monitors vital signs and location in real-time",
    },
    {
      icon: "🧠",
      title: "Cognitive Assessment",
      description: "AI-powered analysis of cognitive patterns to detect early signs of decline",
    },
    {
      icon: "🔔",
      title: "Real-time Alerts",
      description: "Immediate notifications for wandering, falls, or unusual behavior patterns",
    },
    {
      icon: "📊",
      title: "Health Monitoring",
      description: "Continuous tracking of vital signs and sleep patterns for comprehensive care",
    },
    {
      icon: "📱",
      title: "Caregiver App",
      description: "Intuitive mobile application for monitoring and receiving alerts anywhere",
    },
    {
      icon: "🛡️",
      title: "Data Security",
      description: "End-to-end encryption and HIPAA compliance for complete privacy protection",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Wear",
      description: "Patient wears the comfortable MemoTag device daily",
    },
    {
      number: "02",
      title: "Monitor",
      description: "Device tracks location, vital signs, and activity patterns",
    },
    {
      number: "03",
      title: "Analyze",
      description: "AI algorithms analyze data to detect patterns and anomalies",
    },
    {
      number: "04",
      title: "Alert",
      description: "Caregivers receive real-time notifications about important events",
    },
  ]

  return (
    <section id="solution" className="section">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge">Our Solution</span>
          <h2 className="section-title">How MemoTag Works</h2>
          <p className="section-subtitle">
            MemoTag combines wearable technology with advanced AI to provide comprehensive dementia care, giving
            caregivers peace of mind and patients greater independence.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="process-container">
          <h3 className="process-title">The MemoTag Process</h3>
          <div className="process-steps">
            {steps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
