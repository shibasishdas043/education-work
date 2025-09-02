import Template from "../Components/Template.jsx";
import login from "../Assets/login.jpg";

function Login({setIsLoggedIn}) {
    return (
        <Template
            title={"Welcome Back"}
            desc1={"Build Your Own Future"}
            desc2={"Make Money On Your Own"}
            image={login}
            formType={"login"}
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Login;