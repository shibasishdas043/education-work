import './App.css'
import {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Dashboared from "./Pages/Dashboared.jsx";
import PrivateRoute from "./Pages/PrivateRoute.jsx";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <div className = {"overflow-auto w-screen h-screen bg-blue-950"}>
            <Navbar isLoggedIn = {isLoggedIn}
                    setIsLoggedIn = {setIsLoggedIn}/>


            <Routes>
                <Route path = {"/"}
                       element = {<Home/>}/>
                <Route path = {"/Login"}
                       element = {<Login setIsLoggedIn = {setIsLoggedIn}/>}/>
                <Route path = {"/Signup"}
                       element = {<Signup setIsLoggedIn = {setIsLoggedIn}/>}/>
                <Route path = {"/Dashboared"}
                       element = {
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <Dashboared/>
                            </PrivateRoute>
                       }/>
            </Routes>

        </div>
    )
}

export default App
