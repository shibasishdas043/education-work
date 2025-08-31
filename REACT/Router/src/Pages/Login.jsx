import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import Template from "../Components/Template.jsx";
import {Routes, Route, Link} from "react-router-dom";
import {useState} from "react";

function Login() {

    const [formData, setFormData] = useState({
        email: "", password: "",
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input type="email" required value={formData.email} onChange={changeHandler} placeholder={"Enter Email Id"} name={"email"}/>
            </label>

            <label>
                <p>
                    Password <sub>*</sub>
                </p>
                <input type={showPassword? ("text") : ("password")} required value={formData.password} onChange={changeHandler} placeholder={"Enter Your" +
                    " Password"} name={"password"}/>

                <span onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>

                <Link to={"#"}>
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>
                Sign In
            </button>
        </form>


    )
}

export default Login;