import {useState} from 'react';
import './App.css';
import Tag from "./Component/Tag.jsx";
import Random from "./Component/Random.jsx";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className = {"lg:w-screen lg:h-screen md:w-screen md:h-screen flex flex-col items-center relative mx-auto bg-gray-600 "}>
            <div className = {"py-4 md:w-full lg:w-full flex justify-center items-center shadow-2xl"}>
                <h1 className = {"p-2 bg-gray-200 text-black rounded-sm text-center lg:w-[1550px]" +
                    " lg:mt-[40px]" +
                    " lg:ml-[40px] lg:mr-[40px]" +
                    " absolute font-bold shadow-2xl text-xl md:w-[750px] md:mt-[40px] md:ml-[40px] md:mr-[40px]"}>Random GIF
                </h1>
            </div>

            <div className = {"flex flex-col mt-[50px] mb-[50px] "}>
                <Random/>
                <Tag/>
            </div>
        </div>
    )
}

export default App
