import "./App.css";
import {Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx"
import Cart from "./Pages/Cart.jsx"

function App() {
    return (
        <div>
            <div className={"bg-slate-900"}>
                <Navbar/>
            </div>

            <Routes>
                <Route path = {"/"}
                       element = {<Home/>}/>
                <Route path = {"/Cart"}
                       element = {<Cart/>}/>
            </Routes>
        </div>
    )
}

export default App;
