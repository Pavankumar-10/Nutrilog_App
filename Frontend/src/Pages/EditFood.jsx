import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFoodById } from "../Services/FoodServices";
import { updateFood } from "../Services/FoodServices";
import { useNavigate } from "react-router-dom";
function EditFood() {
    const navigate = useNavigate();
    const [food, setFood] = useState({});
    const loadFood = async () => {

    try {

        const response = await getFoodById(id);

        setFood(response.data);

    }
    catch (error) {

        console.error(error);

    }

};
const handleUpdate = async () => {

    try {

        await updateFood(food);

        alert("Food Updated Successfully");

        navigate("/foodhistory");

    }
    catch(error){

        console.error(error);

        alert("Update Failed");

    }

};
    const { id } = useParams();
    useEffect(() => {

    loadFood();

    }, []);

    return (

    <div className="container">

        <h2>Edit Food Entry</h2>

        <br />

        <label>Food Name</label>

        <input
            type="text"
            value={food.foodName || ""}
            readOnly
        />

        <br /><br />

        <label>Calories</label>

        <input
            type="number"
            value={food.calories || ""}
            readOnly
        />

        <br /><br />

        <label>Protein</label>

        <input
            type="number"
            value={food.protein || ""}
            readOnly
        />

        <br /><br />

        <label>Carbs</label>

        <input
            type="number"
            value={food.carbs || ""}
            readOnly
        />

        <br /><br />

        <label>Fats</label>

        <input
            type="number"
            value={food.fats || ""}
            readOnly
        />

        <br /><br />

        <label>Meal Type</label>

        <select
            value={food.mealType || ""}
            onChange={(e) =>
                setFood({
                    ...food,
                    mealType: e.target.value
                })
            }
        >

            <option value="Breakfast">Breakfast</option>

            <option value="Lunch">Lunch</option>

            <option value="Snack">Snack</option>

            <option value="Dinner">Dinner</option>

        </select>

        <br /><br />

        <button onClick={handleUpdate}>
            Update Food
        </button>

    </div>

);

}

export default EditFood;