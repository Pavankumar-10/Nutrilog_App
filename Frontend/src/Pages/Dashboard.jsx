import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDashboard } from "../Services/FoodServices";
import { getProfile } from "../Services/UserServices";
import "../Styles/Dashboard.css";

function Dashboard() {

    const navigate = useNavigate();

    const [summary, setSummary] = useState(null);
    const [userName, setUserName] = useState("");
    const [greeting, setGreeting] = useState("");
    const loadDashboard = async () => {

        try {
           const response = await getDashboard();

            setSummary(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed To Load Dashboard");
        }
    };

   useEffect(() => {

    loadDashboard();
    loadProfile();
    setGreetingMessage();

}, []);

    const loadProfile = async () => {

    try {

        const response = await getProfile();

        setUserName(response.data.fname);

    } catch (error) {

        console.error(error);

    }

};
const setGreetingMessage = () => {

    const hour = new Date().getHours();

    if (hour < 12) {

        setGreeting("☀️ Good Morning");

    }
    else if (hour < 17) {

        setGreeting("🌤️ Good Afternoon");

    }
    else {

        setGreeting("🌙 Good Evening");

    }

};

   return (

    <div className="dashboard-container">

        <div className="welcome-section">

        

            <h1> {greeting}, {userName}</h1>
             <p>
                 Stay consistent! Every healthy meal brings you closer to your goal. 💚
            </p>

        </div>

        <div className="dashboard-cards">

            <div className="card calories">

                <h3>🔥 Calories</h3>

                <h2>{summary ? summary.calories : 0}</h2>

                <p>kcal Today</p>

            </div>

            <div className="card protein">

                <h3>🥩 Protein</h3>

                <h2>{summary ? summary.protein : 0}</h2>

                <p>grams</p>

            </div>

            <div className="card carbs">

                <h3>🍚 Carbs</h3>

                <h2>{summary ? summary.carbs : 0}</h2>

                <p>grams</p>

            </div>

            <div className="card fats">

                <h3>🥑 Fats</h3>

                <h2>{summary ? summary.fats : 0}</h2>

                <p>grams</p>

            </div>

        </div>

        <hr />

        <div className="quick-actions">

    <button onClick={() => navigate("/addfood")}>
        ➕ Add Food
    </button>

    <button onClick={() => navigate("/foodhistory")}>
        📋 Food History
    </button>

    <button onClick={() => navigate("/profile")}>
        👤 Profile
    </button>

</div>

    </div>

);
}

export default Dashboard;