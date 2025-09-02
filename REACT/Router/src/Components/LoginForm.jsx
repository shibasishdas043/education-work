import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import toast from "react-hot-toast";

function LoginForm({setIsLoggedIn}) {

    let navigate = useNavigate();

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

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In :-)");

        navigate("/Dashboared");
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form onSubmit = {submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input type = "email"
                       required
                       value = {formData.email}
                       onChange = {changeHandler}
                       placeholder = {"Enter Email Id"}
                       name = {"email"}/>
            </label>

            <label>
                <p>
                    Password <sub>*</sub>
                </p>
                <input type = {showPassword ? ("text") : ("password")}
                       required
                       value = {formData.password}
                       onChange = {changeHandler}
                       placeholder = {"Enter Your" +
                           " Password"}
                       name = {"password"}/>

                <span onClick = {() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>

                <Link to = {"#"}>
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>
                Sign In
            </button>
        </form>


    )
}

export default LoginForm;