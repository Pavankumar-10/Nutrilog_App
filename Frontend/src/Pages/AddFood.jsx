import { useState } from "react";
import { calculateNutrition, saveFoodEntry } from "../Services/FoodServices";
import "../Styles/AddFood.css";

function AddFood() {

    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [mealType, setMealType] = useState("");
    const [unit, setUnit] = useState("g");
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {

        try {

            const response = await calculateNutrition({

                foodName: foodName,

                quantity: quantity

            });

            setResult(response.data);

        }
        catch (error) {

            console.error(error);

            alert("Calculation Failed");

        }

    };

    const handleSave = async () => {

        try {

            const foodEntry = {

                foodName: result.foodName,

                calories: result.calories,

                protein: result.protein,

                carbs: result.carbs,

                fats: result.fats,

                mealType: mealType,

                entryDate: new Date()
                    .toISOString()
                    .split("T")[0]

            };

            await saveFoodEntry(foodEntry);

            alert("Food Saved Successfully");

            setFoodName("");
            setQuantity("");
            setMealType("");
            setUnit("g");
            setResult(null);

        }
        catch (error) {

            console.error(error);

            alert("Failed To Save Food");

        }

    };

    return (

        <div className="addfood-container">

            <div className="addfood-card">

                <h2>🍽 Add Food</h2>

                <p>
                    Track your meals and monitor your daily nutrition.
                </p>

                <input
                    type="text"
                    placeholder="Food Name"
                    value={foodName}
                    onChange={(e) =>
                        setFoodName(e.target.value)
                    }
                />

                <div className="quantity-row">

                    <input
                        type="number"
                        placeholder={
                            unit === "g"
                                ? "Quantity (grams)"
                                : "Quantity (ml)"
                        }
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(e.target.value)
                        }
                    />

                    <select
                        value={unit}
                        onChange={(e) =>
                            setUnit(e.target.value)
                        }
                    >

                        <option value="g">
                            Grams (g)
                        </option>

                        <option value="ml">
                            Milliliters (ml)
                        </option>

                    </select>

                </div>

                <select
                    value={mealType}
                    onChange={(e) =>
                        setMealType(e.target.value)
                    }
                >

                    <option value="">
                        Select Meal Type
                    </option>

                    <option value="Breakfast">
                        🍳 Breakfast
                    </option>

                    <option value="Lunch">
                        🍛 Lunch
                    </option>

                    <option value="Snack">
                        🍎 Snack
                    </option>

                    <option value="Dinner">
                        🍽 Dinner
                    </option>

                </select>

                <button
                    className="calculate-btn"
                    onClick={handleCalculate}
                >

                    🔍 Calculate Nutrition

                </button>

                {

                    result && (

                        <div className="nutrition-card">

                            <h3>

                                🥗 Nutrition Preview

                            </h3>

                            <div className="nutrition-grid">

                                <div className="nutrition-item">

                                    <h4>🔥 Calories</h4>

                                    <h2>{result.calories}</h2>

                                    <span>kcal</span>

                                </div>

                                <div className="nutrition-item">

                                    <h4>🥩 Protein</h4>

                                    <h2>{result.protein}</h2>

                                    <span>g</span>

                                </div>

                                <div className="nutrition-item">

                                    <h4>🍚 Carbs</h4>

                                    <h2>{result.carbs}</h2>

                                    <span>g</span>

                                </div>

                                <div className="nutrition-item">

                                    <h4>🥑 Fat</h4>

                                    <h2>{result.fats}</h2>

                                    <span>g</span>

                                </div>

                            </div>

                            <button
                                className="save-btn"
                                onClick={handleSave}
                            >

                                💾 Save Food

                            </button>

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default AddFood;