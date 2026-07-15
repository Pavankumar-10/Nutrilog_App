import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem("token"));
    const location = useLocation();



useEffect(() => {

    setToken(localStorage.getItem("token"));

}, [location]);

   const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    setToken(null);

    navigate("/");

};

    return (

        <nav>

            <h2>🥗 Nutri-Log</h2>

            <ul>

                {

                    token ? (

                        <>

                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/addfood">
                                    Add Food
                                </Link>
                            </li>

                            <li>
                                <Link to="/foodhistory">
                                    Food History
                                </Link>
                            </li>

                            <li>
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link to="#" onClick={handleLogout}>
                                    Logout
                               </Link>                 
                            </li>

                        </>

                    ) : (

                        <>

                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/features">
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>

                            <li>
                                <Link to="/register">
                                    Register
                                </Link>
                            </li>

                        </>

                    )

                }

            </ul>

        </nav>

    );
}

export default Navbar;