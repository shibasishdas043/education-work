import './App.css'
import {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboared from "./Pages/Dashboared.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"LoginForm"} element={<Login/>}/>
                <Route path={"SignupForm"} element={<Signup/>}/>
                <Route path={"Dashboared"} element={<Dashboared/>}/>
            </Routes>

        </div>
    )
}

export default App
