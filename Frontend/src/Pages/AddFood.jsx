import { useState } from "react";
import { calculateNutrition,saveFoodEntry } from "../Services/FoodServices";

function AddFood() {

    const [foodName, setFoodName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [mealType, setMealType] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {

        try {
            

            const response = await calculateNutrition({
                foodName: foodName,
                quantity: quantity
            });

            setResult(response.data);

        } catch (error) {

            console.error(error);
            alert("Calculation Failed");
        }
    };

    const handleSave = async () => {

    try {
        const user = JSON.parse(localStorage.getItem("user"));

        const foodEntry = {

            userId: user.userId, 

            foodName: result.foodName,

            calories: result.calories,

            protein: result.protein,

            carbs: result.carbs,

            fats: result.fats,

            mealType: mealType,

            entryDate:
                new Date()
                .toISOString()
                .split("T")[0]
        };

        console.log("User:", user);
        console.log("Food Entry:", foodEntry);
        await saveFoodEntry(foodEntry);

        alert("Food Saved Successfully");

    }
    catch(error) {

        console.error(error);

        alert("Failed To Save Food");
    }
};

    return (

        <div>

            <h2>Add Food Entry</h2>

            <input
                type="text"
                placeholder="Food Name"
                value={foodName}
                onChange={(e) =>
                    setFoodName(e.target.value)
                }
            />

            <br /><br />

            <input
                type="number"
                placeholder="Quantity (gm)"
                value={quantity}
                onChange={(e) =>
                    setQuantity(e.target.value)
                }
            />

            <br /><br />

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
                    Breakfast
                </option>

                <option value="Lunch">
                    Lunch
                </option>

                <option value="Snack">
                    Snack
                </option>

                <option value="Dinner">
                    Dinner
                </option>

            </select>

            <br /><br />

            <button onClick={handleCalculate}>
                Calculate
            </button>

            <hr />

            {result && (

                <div>

                    <h3>Nutrition Information</h3>

                    <p>
                        Calories : {result.calories}
                    </p>

                    <p>
                        Protein : {result.protein}
                    </p>

                    <p>
                        Carbs : {result.carbs}
                    </p>

                    <p>
                        Fats : {result.fats}
                    </p>

                    <button onClick={handleSave}>
                        Save Food
                    </button>

                </div>

            )}

        </div>
    );
}

export default AddFood;