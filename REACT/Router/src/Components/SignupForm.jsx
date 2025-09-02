import {useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function SignupForm({setIsLoggedIn}) {

    let navigate = useNavigate();

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

        if(formData.password !== formData.confirmPassword){
            toast.error("Password Did Match :(");
            return;
        }

        setIsLoggedIn(true);
        toast.success("Welcome :-) To New Account .");

        let accData = {
            ...formData,
        }
        console.log(accData);

        navigate("/");
    }

    return (
        <div>
            <div>
                <button>
                    Student
                </button>

                <button>
                    Instructor
                </button>
            </div>

            <form onSubmit = {submitHandler}>
                <div>
                    <p>First Name <sup>*</sup></p>
                    <label>
                        <input type = "text"
                               placeholder = {"Enter First Name"}
                               name = {"firstName"}
                               value = {formData.firstName}
                               onChange = {changeHandler}
                               required
                        />
                    </label>

                    <p>Last Name <sup>*</sup></p>
                    <label>
                        <input type = "text"
                               placeholder = {"Enter Last Name"}
                               name = {"lastName"}
                               value = {formData.lastName}
                               onChange = {changeHandler}
                               required/>
                    </label>
                </div>

                <div>
                    <p>Email Address <sup>*</sup></p>
                    <label>
                        <input type = "text"
                               placeholder = {"Enter Email"}
                               name = {"email"}
                               value = {formData.email}
                               onChange = {changeHandler}
                               required/>
                    </label>
                </div>

                <div>
                    <p>Create Password <sup>*</sup></p>
                    <label>
                        <input type = {showPasswordFirstField ? ("text") : ("password")}
                               placeholder = {"Enter Your Password"}
                               name = {"password"}
                               value = {formData.password}
                               onChange = {changeHandler}
                               required
                        />
                        <span onClick = {() => setShowPasswordFirstField((prev) => !prev)}>{showPasswordFirstField ? (<AiOutlineEyeInvisible/>) : (
                            <AiOutlineEye/>)}</span>
                    </label>

                    <p>Confirm Password <sup>*</sup></p>
                    <label>
                        <input type = {showPasswordSecondField ? ("text") : ("password")}
                               placeholder = {"Confirm Your Password"}
                               name = {"confirmPassword"}
                               value = {formData.confirmPassword}
                               onChange = {changeHandler}
                               required
                        />
                        <span onClick = {() => setShowPasswordSecondField((prev) => !prev)}>{showPasswordSecondField ? (<AiOutlineEyeInvisible/>) : (
                            <AiOutlineEye/>)}</span>
                    </label>
                    <button>Create Account</button>
                </div>

            </form>
        </div>
    )
}

export default SignupForm;