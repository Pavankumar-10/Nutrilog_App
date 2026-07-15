import { useEffect, useState } from "react";
import { getFoodHistory, deleteFood } from "../Services/FoodServices";
import { useNavigate } from "react-router-dom";
import "../Styles/FoodHistory.css";

function FoodHistory() {

    const [foods, setFoods] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const loadFoodHistory = async () => {

        try {

            const response = await getFoodHistory();

            setFoods(response.data);

        }
        catch (error) {

            console.error(error);

            alert("Failed To Load Food History");

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this food entry?"
        );

        if (!confirmDelete) {

            return;

        }

        try {

            await deleteFood(id);

            alert("Food Deleted Successfully");

            loadFoodHistory();

        }
        catch (error) {

            console.error(error);

            alert("Delete Failed");

        }

    };

    useEffect(() => {

        loadFoodHistory();

    }, []);

    const filteredFoods = foods.filter(food =>

        food.foodName
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <div className="history-container">

            <div className="history-header">

                <h2>📋 Food History</h2>

                <p>

                    View all your food entries in one place.

                </p>

                <input
                    className="search-box"
                    type="text"
                    placeholder="🔍 Search Food"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            {

                filteredFoods.length > 0 ?

                    filteredFoods.map((food) => (

                        <div
                            className="food-card"
                            key={food.entryId}
                        >

                            <h3>

                                🍽 {food.foodName}

                            </h3>

                            <p>

                                <strong>Meal :</strong>

                                {" "}

                                {food.mealType}

                            </p>

                            <p>

                                <strong>Date :</strong>

                                {" "}

                                {food.entryDate}

                            </p>

                            <div className="nutrition">

                                <span>

                                    🔥 {food.calories} kcal

                                </span>

                                <span>

                                    🥩 {food.protein} g

                                </span>

                                <span>

                                    🍚 {food.carbs} g

                                </span>

                                <span>

                                    🥑 {food.fats} g

                                </span>

                            </div>

                            <div className="action-buttons">

                                <button
                                    className="edit-btn"
                                    onClick={() =>
                                        navigate(
                                            `/editfood/${food.entryId}`
                                        )
                                    }
                                >

                                    ✏ Edit

                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        handleDelete(food.entryId)
                                    }
                                >

                                    🗑 Delete

                                </button>

                            </div>

                        </div>

                    ))

                    :

                    <div className="food-card">

                        <h3>

                            🍽 No Food Records Found

                        </h3>

                        <p>

                            Start adding your meals to track your nutrition.

                        </p>

                    </div>

            }

        </div>

    );

}

export default FoodHistory;