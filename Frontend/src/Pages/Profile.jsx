import { useEffect, useState } from "react";
import { getProfile, updateUser } from "../Services/UserServices";
import "../Styles/Profile.css";

function Profile() {

    const [user, setUser] = useState({});

    const loadProfile = async () => {

        try {

            const response = await getProfile();

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
                "email",
                user.email
            );

        }
        catch (error) {

            console.error(error);

            alert("Profile Update Failed");

        }

    };

    return (

        <div className="profile-container">

            <div className="profile-card">

                <div className="profile-header">

                    <div className="avatar">

                        {
                            user.fname
                                ? `${user.fname.charAt(0).toUpperCase()}${user.lname ? user.lname.charAt(0).toUpperCase() : ""}`
                                : "👤"
                        }

                    </div>

                    <h2>

                        My Profile

                    </h2>

                    <p>

                        Manage your personal information

                    </p>

                </div>

                <div className="profile-form">

                    <label>

                        First Name

                    </label>

                    <input
                        type="text"
                        name="fname"
                        value={user.fname || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Middle Name

                    </label>

                    <input
                        type="text"
                        name="mname"
                        value={user.mname || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Last Name

                    </label>

                    <input
                        type="text"
                        name="lname"
                        value={user.lname || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Email

                    </label>

                    <input
                        type="email"
                        name="email"
                        value={user.email || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Phone Number

                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={user.phone || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Age

                    </label>

                    <input
                        type="number"
                        name="age"
                        value={user.age || ""}
                        onChange={handleChange}
                    />

                    <label>

                        Address

                    </label>

                    <input
                        type="text"
                        name="address"
                        value={user.address || ""}
                        onChange={handleChange}
                    />

                    <button
                        className="update-btn"
                        onClick={handleUpdate}
                    >

                        💾 Update Profile

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Profile;