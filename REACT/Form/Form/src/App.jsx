import './App.css'
import {useState} from "react";


function App() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");


    function changeFirstHandler(event) {
        // let change = event.target.value;
        // console.log(change);
        setFirstName(event.target.value);

    }

    function changeLastHandler(event) {
        // let change = event.target.value;
        // console.log(change);

        setLastName(event.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder={"first name"} onChange={changeFirstHandler}/>
                <br/>
                <br/>
                <input type="text" placeholder={"last name"} onChange={changeLastHandler}/>
            </form>
        </div>
    )
}

export default App
