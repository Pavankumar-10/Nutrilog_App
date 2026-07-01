import { useEffect, useState } from "react";
import {
    getUserById,
    updateUser
} from "../Services/UserServices";

function Profile() {

    const [user, setUser] = useState({});

    const loadProfile = async () => {

        try {

            const loggedUser = JSON.parse(
                localStorage.getItem("user")
            );

            const response = await getUserById(
                loggedUser.userId
            );

            setUser(response.data);

        }
        catch (error) {

            console.error(error);

            alert("Failed To Load Profile");

        }
    };

    useEffect(() => {

        loadProfile();

    }, []);

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleUpdate = async () => {

        try {

            await updateUser(user);

            alert("Profile Updated Successfully");

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

        }
        catch (error) {

            console.error(error);

            alert("Profile Update Failed");

        }
    };

    return (

        <div className="container">

            <h2>My Profile</h2>

            <br />

            <label>First Name</label>

            <input
                type="text"
                name="fname"
                value={user.fname || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Middle Name</label>

            <input
                type="text"
                name="mname"
                value={user.mname || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Last Name</label>

            <input
                type="text"
                name="lname"
                value={user.lname || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Email</label>

            <input
                type="email"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Phone</label>

            <input
                type="text"
                name="phone"
                value={user.phone || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Age</label>

            <input
                type="number"
                name="age"
                value={user.age || ""}
                onChange={handleChange}
            />

            <br /><br />

            <label>Address</label>

            <input
                type="text"
                name="address"
                value={user.address || ""}
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={handleUpdate}>
                Update Profile
            </button>

        </div>
    );
}

export default Profile;