import {IoCartOutline} from "react-icons/io5";
import webSiteIcon from "../Assets/twitter (1).png";
import {NavLink} from "react-router-dom";
import cart from "../Pages/Cart.jsx";
import {useSelector} from "react-redux";

function Navbar() {
    const {cart} = useSelector((state) => state);


    return (
        <div>
            <nav className = {"flex justify-between items-center h-20 max-w-6xl mx-auto"}>
                <NavLink to = {"/"}>
                    <div className = {"ml-5"}>
                        <img className = {"h-[55px]"}
                             src = {webSiteIcon}
                             alt = "website-icon"
                             height = {"100px"}/>
                    </div>
                </NavLink>

                <div className = {"flex items-center font-medium text-slate-100 mr-5 space-x-6"}>
                    <NavLink to = {"/"}>
                        <p>Home</p>
                    </NavLink>

                    <NavLink to = {"/Cart"}>
                        <div className={"relative flex"}>
                            <IoCartOutline className={"text-2xl"}/>
                            {
                                cart.length > 0 ? (<span className={"absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center" +
                                    " animate-bounce rounded-full text-white"}>{cart.length}</span>) : ("")
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
