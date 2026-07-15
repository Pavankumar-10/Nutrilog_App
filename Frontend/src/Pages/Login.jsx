import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/UserServices";
import "../Styles/Login.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response =
                await loginUser({

                    email: email,

                    password: password
                });
                if (response.data) {

    localStorage.setItem(
        "token",
        response.data.token
    );

    localStorage.setItem(
        "userId",
        response.data.userId
    );

    localStorage.setItem(
        "email",
        response.data.email
    );

    localStorage.setItem(
        "role",
        response.data.role
    );

    alert("Login Successful");

    navigate("/dashboard");

}

           else {

                alert(
                    "Invalid Email Or Password"
                );
            }

        } catch(error){

            console.error(error);

            alert("Login Failed");
        }
    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>🥗 Nutri-Log</h1>

                <h2>Welcome Back</h2>

                <p>
                    Login to continue tracking your nutrition.
                </p>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                />

                <button
                    onClick={handleLogin}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;