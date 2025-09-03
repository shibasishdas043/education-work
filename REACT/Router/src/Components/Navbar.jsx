import {Routes, Route, Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import Logo from "../Assets/Logo.svg";
import {toast} from "react-hot-toast";


function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return (
        <div className = {"flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto"}>
            <Link to = {"/"}>
                <img src = {Logo}
                     alt = "Solana"
                     width = {40}
                     height = {30}
                     loading = {"lazy"}/>
            </Link>

            <nav>
                <ul className = {"flex gap-x-6 text-blue-100"}>
                    <li>
                        <Link to = {"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to = {"/"}>About</Link>
                    </li>
                    <li>
                        <Link to = {"/"}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className = {"flex items-center gap-x-4"}>
                {!isLoggedIn &&
                    <Link to = {"/Login"}>
                        <button className={"text-blue-100 bg-blue-600 py-[8px] px-[12px] rounded-[8px] border border-blue-800"}>
                            Log In
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to = {"/"}>
                        <button className={"text-blue-100 bg-blue-600 py-[8px] px-[12px] rounded-[8px] border border-blue-800"} onClick = {() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to = {"/Signup"}>
                        <button className={"text-blue-100 bg-blue-600 py-[8px] px-[12px] rounded-[8px] border border-blue-800"}>
                            SignUp Now
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to = {"/Dashboared"}>
                        <button className={"text-blue-100 bg-blue-600 py-[8px] px-[12px] rounded-[8px] border border-blue-800"}>
                            Dashboared
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;