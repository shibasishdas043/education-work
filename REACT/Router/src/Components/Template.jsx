import login from "../Assets/login.jpg";
import signup from "../Assets/login.jpg";



function Template(title, desc1, desc2, img, formtype,  setLoggedIn){
    return(
        <div>
            <div>
                <h2>{title}</h2>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formtype === "Signup" ? (<SignupForm/>) : (<LoginForm/>)}

                <div>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>

                <button>Sign Up With Google</button>
            </div>
            
            <div>
                <img src={login} alt="login" width={558} height={584} loading={"lazy"}/>
                img
            </div>
        </div>
    )
}

export default Template;