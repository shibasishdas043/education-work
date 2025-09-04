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
        <form className = {"flex flex-col w-full gap-y-4 mt-6"}
              onSubmit = {submitHandler}>
            <label className = {"w-full"}>
                <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>
                    Email Address <sup className = {"text-red-500"}>*</sup>
                </p>
                <input className = {"bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold w-full p-[6px] border-2 border-blue-700" +
                    " hover:border-blue-500" +
                    " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer" +
                    ""}
                       type = "email"
                       required
                       value = {formData.email}
                       onChange = {changeHandler}
                       placeholder = {"Enter Email Id"}
                       name = {"email"}/>
            </label>

            <label className = {"relative w-full"}>
                <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>
                    Password <sub className = {"text-red-500"}>*</sub>
                </p>
                <input className = {"bg-blue-900 rounded-[0.5rem] text-blue-50 font-semibold outline-blue-400 w-full p-[6px] border-2 border-blue-700" +
                    " hover:border-blue-500 transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer"}
                       type = {showPassword ? ("text") : ("password")}
                       required
                       value = {formData.password}
                       onChange = {changeHandler}
                       placeholder = {"Enter Your" +
                           " Password"}
                       name = {"password"}/>

                <span className = {"absolute right-3 top-[38px] cursor-pointer"}
                      onClick = {() => setShowPassword((prev) => !prev)}>{showPassword ? (<AiOutlineEyeInvisible fontSize = {18}
                                                                                                                 fill = "#2563EB"/>) : (
                    <AiOutlineEye fontSize = {18}
                                  fill = "#2563EB"/>)}</span>


                <Link to = {"#"}>
                    <p className = {"text-xs mt-1 text-blue-400 w-max ml-auto cursor-pointer"}>Forgot Password</p>
                </Link>
            </label>

            <button className = {"bg-pink-600 hover:bg-pink-800 transition delay-100 duration-500 font-medium text-white rounded-[8px] px-[12px] py-[8px]" +
                " mt-6 " +
                " cursor-pointer"}>
                Sign In
            </button>
        </form>


    )
}

export default LoginForm;