import { useEffect, useState } from "react";
import { getFoodHistory, deleteFood } from "../Services/FoodServices";
import { useNavigate } from "react-router-dom";

function FoodHistory() {

    const [foods, setFoods] = useState([]);

    const navigate = useNavigate();

    // Load Food History
    const loadFoodHistory = async () => {

        try {

            const user =
                JSON.parse(localStorage.getItem("user"));

            const response =
                await getFoodHistory(user.userId);

            setFoods(response.data);

        }
        catch (error) {

            console.error(error);

            alert("Failed To Load Food History");

        }

    };

    // Delete Food
    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm("Are you sure?");

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

    return (

        <div className="container">

            <h2>Food History</h2>

            <table
                border="1"
                cellPadding="10"
                cellSpacing="0"
            >

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Food Name</th>
                        <th>Calories</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Fats</th>
                        <th>Meal Type</th>
                        <th>Date</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        foods.length > 0 ?

                        foods.map((food) => (

                            <tr key={food.entryId}>

                                <td>{food.entryId}</td>

                                <td>{food.foodName}</td>

                                <td>{food.calories}</td>

                                <td>{food.protein}</td>

                                <td>{food.carbs}</td>

                                <td>{food.fats}</td>

                                <td>{food.mealType}</td>

                                <td>{food.entryDate}</td>

                                <td>

                                    <button
                                        onClick={() =>
                                            navigate(`/editfood/${food.entryId}`)
                                        }
                                    >

                                        Edit

                                    </button>

                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            handleDelete(food.entryId)
                                        }
                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                        :

                        <tr>

                            <td colSpan="10">

                                No Food Records Found

                            </td>

                        </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default FoodHistory;