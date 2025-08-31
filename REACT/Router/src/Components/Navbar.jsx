import {Routes, Route, Link} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
import Logo from "../Assets/Logo.svg";
import {toast} from "react-hot-toast";


function Navbar(props) {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


    return (
        <div className={"flex justify-evenly"}>
            <Link to={"/"}>
                <img src={Logo} alt="Solana" width={40} height={30} loading={"lazy"}/>
            </Link>

            <nav className={"flex"}>
                <ul className={"flex gap-3 "}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className={"flex ml-5 mr-3 gap-5"}>
                {!isLoggedIn &&
                    <Link to={"/Login"}>
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to={"/"}>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to={"/Signup"}>
                        <button>
                            Signup
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to={"/Dashboared"}>
                        <button>
                            Dashboared
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;