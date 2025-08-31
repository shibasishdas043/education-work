import {useState} from "react";


function Signup() {

    const [formData, setFormData] = useState(
        {
            firstName: "", lastName: "", email: "", password: "", confirmPassword: "",
        }
    )

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]:event.target.value,
            }
        ))
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

            <form>
                <div>
                    <p>First Name <sup>*</sup></p>
                    <label> <input type="text" placeholder={"Enter First Name"} required name={"firstname"} onChange={changeHandler}
                                   value={formData.firstName}/>
                    </label>

                    <p>First Name <sup>*</sup></p>
                    <label><input type="text" placeholder={"Enter First Name"} required name={"lastname"} onChange={changeHandler}
                                  value={formData.lastName}/>
                    </label>
                </div>

                <p>Email Address <sup>*</sup></p>
                <label> <input type="email" placeholder={"Enter Email Address"} required name={"email"} onChange={changeHandler}
                               value={formData.email}/>
                </label>

                <div>
                    <p>Create Password <sup>*</sup></p>
                    <label> <input type={showPassword ? ("text") : ("password")} placeholder={"Enter Your Password"} required name={"password"} onChange={changeHandler}
                                   value={formData.password}/>
                    </label>

                    <p>First Name <sup>*</sup></p>
                    <label><input type="text" placeholder={"Enter First Name"} required name={"lastname"} onChange={changeHandler}
                                  value={formData.lastName}/>
                    </label>
                </div>


            </form>
        </div>
    )
}

export default Signup;