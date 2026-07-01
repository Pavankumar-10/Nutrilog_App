import "../Styles/Features.css";

function Features() {
  return (
    <div className="features-page">

      <div className="features-hero">
        <h1>✨ Powerful Features</h1>
        <p>
          Everything you need to track your nutrition, improve your health,
          and achieve your fitness goals.
        </p>
      </div>

      <div className="features-container">

        <div className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            alt="Calorie Tracking"
          />
          <h2>🔥 Calorie Tracking</h2>
          <p>
            Track your daily calorie intake and stay aligned with your fitness goals.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
            alt="Nutrition Analysis"
          />
          <h2>🥗 Nutrient Analysis</h2>
          <p>
            Monitor proteins, carbohydrates, fats, vitamins, and minerals.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="Fitness Goals"
          />
          <h2>💪 Fitness Goals</h2>
          <p>
            Set personalized health goals and track your progress every day.
          </p>
        </div>

        <div className="feature-card">
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352"
            alt="Diet Recommendations"
          />
          <h2>🍎 Diet Recommendations</h2>
          <p>
            Receive smart suggestions for healthier eating habits.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Features;