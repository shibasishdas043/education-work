import Template from "../Components/Template.jsx";
import signup from "../Assets/signup.jpg";

function Signup({setIsLoggedIn}) {
    return (
        <Template
            title={"Lets Go !"}
            desc1={`"Build Your Own Future On Your Hand"`}
            desc2={`"Make Money On Your Own to hit Big"`}
            image={signup}
            formType={"signup"}
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;