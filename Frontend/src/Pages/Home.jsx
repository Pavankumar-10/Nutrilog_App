import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>🥗 Nutri-Log</h1>

        <h2>Track Your Nutrition. Transform Your Life.</h2>

        <p>
          Monitor calories, track nutrients, analyze your diet, and achieve
          your fitness goals with personalized insights.
        </p>

        <div className="buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="stats">
          <div className="card">
            <h3>🍎 500+</h3>
            <p>Foods Tracked</p>
          </div>

          <div className="card">
            <h3>🔥 Calories</h3>
            <p>Daily Monitoring</p>
          </div>

          <div className="card">
            <h3>💪 Fitness</h3>
            <p>Goal Based Plans</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;