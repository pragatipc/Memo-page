const Problem = () => {
  const stats = [
    {
      icon: "🧠",
      value: "55M+",
      label: "People Living with Dementia",
      description: "Worldwide, with numbers doubling every 20 years",
    },
    {
      icon: "⚠️",
      value: "60%",
      label: "Wandering Risk",
      description: "Of dementia patients will wander at least once",
    },
    {
      icon: "⏱️",
      value: "240+",
      label: "Hours Monthly",
      description: "Average time caregivers spend on dementia care",
    },
  ]

  return (
    <section id="problem" className="section section-alt">
      <div className="container">
        <div className="text-center mb-4">
          <span className="badge">The Challenge</span>
          <h2 className="section-title">Dementia Care: A Growing Global Crisis</h2>
          <p className="section-subtitle">
            Dementia affects millions worldwide, creating immense challenges for patients, caregivers, and healthcare
            systems. Current solutions fail to address the complex needs of dementia care.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="card stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <h3 className="stat-value">{stat.value}</h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="diagnosis-gap">
          <h3 className="diagnosis-title">The Diagnosis Gap</h3>
          <div className="diagnosis-content">
            <div className="diagnosis-list">
              <div className="diagnosis-item">
                <div className="diagnosis-number">1</div>
                <p>
                  <strong>Only 1 in 4</strong> people with dementia receive a formal diagnosis worldwide
                </p>
              </div>
              <div className="diagnosis-item">
                <div className="diagnosis-number">2</div>
                <p>
                  <strong>75% of people</strong> with dementia are undiagnosed, leading to lack of proper care
                </p>
              </div>
              <div className="diagnosis-item">
                <div className="diagnosis-number">3</div>
                <p>
                  <strong>Average delay of 2-3 years</strong> between symptom onset and diagnosis
                </p>
              </div>
            </div>
            <div className="diagnosis-chart">
              <div className="chart-container">
                <div className="chart-circle"></div>
                <div className="chart-progress"></div>
                <div className="chart-label">25%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
