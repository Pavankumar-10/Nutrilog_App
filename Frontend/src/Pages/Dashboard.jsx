import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDashboard } from "../Services/FoodServices";

function Dashboard() {

    const navigate = useNavigate();

    const [summary, setSummary] = useState(null);
    const loadDashboard = async () => {

        try {
            const user = JSON.parse(localStorage.getItem("user"));

            const response = await getDashboard(user.userId);

            setSummary(response.data);

        } catch (error) {

            console.error(error);

            alert("Failed To Load Dashboard");
        }
    };

    useEffect(() => {
        loadDashboard();
    }, []);

    

    return (

        <div>

            <h1>Welcome to Nutri-Log Dashboard</h1>

            <div>

                <h3>Today's Calories</h3>

                <p>
                    {summary ? summary.calories : 0} kcal
                </p>

            </div>

            <div>

                <h3>Today's Protein</h3>

                <p>
                    {summary ? summary.protein : 0} g
                </p>

            </div>

            <div>

                <h3>Today's Carbs</h3>

                <p>
                    {summary ? summary.carbs : 0} g
                </p>

            </div>

            <div>

                <h3>Today's Fats</h3>

                <p>
                    {summary ? summary.fats : 0} g
                </p>

            </div>

            <hr />

            <button
                onClick={() => navigate("/addfood")}
            >
                Add Food
            </button>

            <button
                onClick={() => navigate("/foodhistory")}
            >
                Food History
            </button>

            <button
                onClick={() => navigate("/profile")}
            >
                Profile
            </button>

        </div>
    );
}

export default Dashboard;