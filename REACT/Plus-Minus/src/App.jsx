import {useState} from 'react'
import './App.css'

function App() {

    const [count, setCount] = useState(0)

    function minusHandler() {
        setCount(count - 1);
    }

    function plusHandler() {
        setCount(count + 1);
    }

    function resetHandler() {
        setCount(0);
    }

    return (
        <>
            <div className={"w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 text-white"}>
                <div className={"text-cyan-200 font-medium text-3xl"}> Increment And Decrement</div>
                <div className={"bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]"}>
                    <button onClick={minusHandler} className={"border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"}>
                        -
                    </button>
                    <div className={"font-bold gap-12 text-5xl"}>
                        {count}
                    </div>
                    <button onClick={plusHandler} className={"border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"}>
                        +
                    </button>
                </div>
                <button onClick={resetHandler} className={"bg-cyan-200 text-black p-2 rounded-sm text-lg cursor-pointer hover:bg-cyan-600"}>Reset</button>
            </div>
        </>
    )
}

export default App
