import {IoCartOutline} from "react-icons/io5";
import webSiteIcon from "../Assets/twitter (1).png";
import {NavLink} from "react-router-dom";

function Navbar() {

    return (
        <div className = {"flex flex-row justify-between bg-blue-300"}>
            <NavLink to = {"/"}>
                <img className = {"h-[55px]"}
                     src = {webSiteIcon}
                     alt = "website-icon"
                     height = {"100px"}/>
            </NavLink>

            <div>
                <NavLink to = {"/"}>
                    <p>Home</p>
                </NavLink>

                <NavLink to = {"Cart"}>
                    <div>
                        <IoCartOutline/>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
