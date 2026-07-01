import "../Styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>🥗 About Nutri-Log</h1>
        <p>
          Your smart nutrition companion for a healthier, happier lifestyle.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Healthy Food"
          />
        </div>

        <div className="about-text">
          <h2>Track. Analyze. Improve.</h2>

          <p>
            Nutri-Log helps you monitor your daily nutrition, track calories,
            analyze nutrient intake, and achieve your fitness goals with
            personalized insights.
          </p>

          <p>
            Whether you're trying to lose weight, gain muscle, or simply eat
            healthier, Nutri-Log makes nutrition tracking simple and effective.
          </p>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>🍎 Nutrition Tracking</h3>
          <p>Log meals and monitor daily nutrient intake.</p>
        </div>

        <div className="feature-card">
          <h3>🔥 Calorie Analysis</h3>
          <p>Track calories and stay within your daily goals.</p>
        </div>

        <div className="feature-card">
          <h3>💪 Fitness Goals</h3>
          <p>Achieve weight loss, maintenance, or muscle gain goals.</p>
        </div>
      </div>
    </div>
  );
}

export default About;