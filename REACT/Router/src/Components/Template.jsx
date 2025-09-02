import LoginForm from "./LoginForm.jsx";
import SignupForm from "./SignupForm.jsx";


function Template({title, desc1, desc2, image, formType,  setIsLoggedIn}){
    return(
        <div>
            <div>
                <h2>{title}</h2>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <button>Sign Up With Google</button>
            </div>
            
            <div>
                <img src={image} alt="login" width={558} height={584} loading={"lazy"}/>
            </div>
        </div>
    )
}

export default Template;