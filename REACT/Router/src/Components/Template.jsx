import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";
import {FcGoogle} from "react-icons/fc";

function Template({title, desc1, desc2, image, formType, setIsLoggedIn}) {
    return (
        <div className = {"flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-52 gap-y-0"}>
            <div className = {"w-11/12 max-w-[450px] mx-auto"}>
                <h1 className = {"text-teal-400 font-semibold text-[1.875rem] leading-[2.375rem]"}>{title}</h1>
                <p className = {"text-[1.125rem] leading-[1.625rem] mt-4"}>
                    <span className = {"text-blue-400 italic"}>{desc1}</span>
                    <br/>
                    <span className = {"text-blue-400 italic"}>{desc2}</span>
                </p>

                {formType === "signup" ? (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)}

                <div className = {"flex flex-row w-full items-center py-4 gap-x-2"}>
                    <div className = {"w-full h-[1px] bg-blue-400"}></div>
                    <p className = {"font-medium text-blue-300 leading-[1.375rem]"}>or</p>
                    <div className = {"w-full h-[1px] bg-blue-400"}></div>
                </div>
                <button className = {"w-full flex justify-center items-center rounded-[8px] font-medium text-cyan-100 border border-cyan-600 px-[12px]" +
                    " py-[8px] gap-x-2 mt-6]"}>
                    <FcGoogle/>
                    <p>SignUp With Google</p>
                </button>
            </div>

            <div className = {"w-11/12 max-w-[450px] mx-auto rounded-md"}>
                <img className = {"rounded-md"}
                     src = {image}
                     alt = "login"
                     width = {558}
                     height = {584}
                     loading = {"lazy"}/>
            </div>
        </div>
    )
}

export default Template;