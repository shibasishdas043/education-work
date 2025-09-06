import {useState} from 'react'
import './App.css'
import Header from "./Components/Header.jsx";
import Blogs from "./Components/Blogs.jsx";
import Pagenation from "./Components/Pagenation.jsx";

function App() {
    const [count, setCount] = useState(0)


    return (
        <div>
            <Header/>
            <Blogs/>
            <Pagenation/>
        </div>
    )
}

export default App
