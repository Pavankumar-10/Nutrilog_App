import { useState } from "react";
import "../Styles/Register.css";
import { addUser } from "../Services/UserServices";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await addUser(user);

      console.log(response.data);

      alert("User Registered Successfully");

    } catch (error) {

      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>🥗 Nutri-Log</h1>

        <h2>Create Account</h2>

        <p>
          Join Nutri-Log and start your journey towards a healthier lifestyle.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={user.age}
            onChange={(e) =>
              setUser({ ...user, age: e.target.value })
            }
          />

          <button type="submit">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;