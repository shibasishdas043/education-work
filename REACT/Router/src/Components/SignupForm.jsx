import {useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function SignupForm({setIsLoggedIn}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
            firstName: "", lastName: "", email: "", password: "", confirmPassword: "",
        }
    )

    const [showPasswordFirstField, setShowPasswordFirstField] = useState(false);

    const [showPasswordSecondField, setShowPasswordSecondField] = useState(false);

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value,
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Password Did Match :(");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Welcome :-) To New Account .");

        let accData = {
            ...formData,
        }

        const finalData={
            ...accData,
            accType,
        }

        console.log("Print acc Data");
        console.log(accData);
        console.log("Print accType Data");
        console.log(finalData);

        navigate("/Dashboared");
    }

    const [accType, setAccType] = useState("Student");

    return (
        <div>
            <div className = {"flex rounded-full border-1 border-pink-500  bg-blue-800 p-1 gap-1 my-6 max-w-max hover:border-teal-500 transition-transform" +
                " delay-100" +
                " duration-500"}>
                <button className = {`${accType === "Student" ? "bg-blue-950 text-white" : "bg-blue-800 text-blue-300"} py-2 px-5  rounded-full transition-transform delay-100 duration-500`}
                        onClick = {() => {
                            setAccType("Student");
                        }}>
                    Student
                </button>

                <button className = {`${accType === "Instructor" ? "bg-blue-950 text-white" : "bg-blue-800 text-blue-300"} py-2 px-5  rounded-full transform delay-100 duration-500`}
                        onClick = {() => {
                            setAccType("Instructor");
                        }}>
                    Instructor
                </button>
            </div>

            <form onSubmit = {submitHandler}>
                <div className = {"md:w-full md:flex md:flex-col lg:flex lg:flex-row lg:gap-1 lg:w-full"}>
                    <div className = {"lg:w-full"}>
                        <p className = {"text-[0.875rem] text-cyan-100 mb-1 leading-[1.375rem]"}>First Name <sup className = {"text-red-500"}>*</sup></p>
                        <label>
                            <input className = {"bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold w-full p-[6px] border-2" +
                                " border-blue-700" +
                                " hover:border-blue-500" +
                                " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer" +
                                ""}
                                   type = "text"
                                   placeholder = {"Enter First Name"}
                                   name = {"firstName"}
                                   value = {formData.firstName}
                                   onChange = {changeHandler}
                                   required
                            />
                        </label>
                    </div>

                    <div className = {"lg:w-full"}>
                        <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>Last Name <sup className = {"text-red-500"}>*</sup></p>
                        <label>
                            <input className = {"bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold w-full p-[6px] border-2" +
                                " border-blue-700" +
                                " hover:border-blue-500" +
                                " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer" +
                                ""}
                                   type = "text"
                                   placeholder = {"Enter Last Name"}
                                   name = {"lastName"}
                                   value = {formData.lastName}
                                   onChange = {changeHandler}
                                   required/>
                        </label>
                    </div>

                </div>

                <div>
                    <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>Email Address <sup className = {"text-red-500"}>*</sup></p>
                    <label>
                        <input className = {"bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold w-full p-[6px] border-2 border-blue-700" +
                            " hover:border-blue-500" +
                            " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer" +
                            ""}
                               type = "text"
                               placeholder = {"Enter Email"}
                               name = {"email"}
                               value = {formData.email}
                               onChange = {changeHandler}
                               required/>
                    </label>
                </div>

                <div>
                    <div className = {"gap-x-1 flex flex-col lg:flex-row"}>
                        {/*create Password*/}
                        <div className = {"md:w-full"}>
                            <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>Create Password <sup className = {"text-red-500"}>*</sup>
                            </p>
                            <label className = {"md:w-full relative"}>
                                <input className = {"md:w-full bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold  p-[6px]" +
                                    " border-2" +
                                    " border-blue-700" +
                                    " hover:border-blue-500" +
                                    " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer" +
                                    ""}
                                       type = {showPasswordFirstField ? ("text") : ("password")}
                                       placeholder = {"Enter Your Password"}
                                       name = {"password"}
                                       value = {formData.password}
                                       onChange = {changeHandler}
                                       required
                                />
                                <span className = {"absolute right-3 top-[3.5px] cursor-pointer"}
                                      onClick = {() => setShowPasswordFirstField((prev) => !prev)}>{showPasswordFirstField ? (
                                    <AiOutlineEyeInvisible fontSize = {18}
                                                           fill = "#2563EB"/>) : (
                                    <AiOutlineEye fontSize = {18}
                                                  fill = "#2563EB"/>)}</span>
                            </label>
                        </div>
                        {/*confirm Password*/}
                        <div className = {"md:w-full"}>
                            <p className = {"text-[0.875rem text-cyan-100 mb-1 leading-[1.375rem]"}>Confirm Password <sup className = {"text-red-500"}>*</sup>
                            </p>
                            <label className = {"md:w-full relative"}>
                                <input className = {"md:w-full bg-blue-900 rounded-[0.5rem] outline-blue-400 text-blue-50 font-semibold p-[6px] border-2" +
                                    " border-blue-700" +
                                    " hover:border-blue-500" +
                                    " transition-all delay-100 duration-300 focus:bg-blue-200 focus:text-black cursor-pointer " +
                                    ""}
                                       type = {showPasswordSecondField ? ("text") : ("password")}
                                       placeholder = {"Confirm Your Password"}
                                       name = {"confirmPassword"}
                                       value = {formData.confirmPassword}
                                       onChange = {changeHandler}
                                       required
                                />
                                <span className = {"absolute right-3 top-[3.5px] cursor-pointer"}
                                      onClick = {() => setShowPasswordSecondField((prev) => !prev)}>{showPasswordSecondField ? (
                                    <AiOutlineEyeInvisible fontSize = {18}
                                                           fill = "#2563EB"/>) : (
                                    <AiOutlineEye fontSize = {18}
                                                  fill = "#2563EB"/>)}</span>
                            </label>
                        </div>
                    </div>

                    <button className = {"w-full bg-pink-600 hover:bg-pink-800 transition delay-100 duration-500 font-medium text-blue-200 rounded-[8px]" +
                        " px-[12px] py-[8px]" +
                        " mt-6 " +
                        " cursor-pointer hover:text-white"}>Create Account
                    </button>
                </div>

            </form>
        </div>
    )
}

export default SignupForm;