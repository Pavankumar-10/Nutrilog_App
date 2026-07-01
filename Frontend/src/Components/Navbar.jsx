import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {

        localStorage.removeItem("user");

        navigate("/login");
    };

    return (

        <nav>

            <h2>🥗 Nutri-Log</h2>

            <ul>

                <li><Link to="/">Home</Link></li>

                <li><Link to="/features">Features</Link></li>

                <li><Link to="/about">About</Link></li>

                {

                    user ? (

                        <>

                            <li>
                                <Link to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link to="/foodhistory">
                                    Food History
                                </Link>
                            </li>

                            <li>
                                <button onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>

                        </>

                    ) : (

                        <>

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