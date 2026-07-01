
import Navbar from "./Components/Navbar";
import Dashboard from "./Pages/Dashboard";
import AddFood from "./Pages/AddFood";
import FoodHistory from "./Pages/FoodHistory";
import Profile from "./Pages/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Users from "./Pages/Users";
import EditFood from "./Pages/EditFood";

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/foodhistory" element={<FoodHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/foodhistory"element={<FoodHistory />}
        
/>        <Route path="/editfood/:id" element={<EditFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// function App() {
//   return <h1>App is Working!</h1>;
// }

// export default App;