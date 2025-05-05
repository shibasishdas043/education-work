import './App.css'
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  //Decrease Counter
  function decreaseHandler(){
      setCount(count - 1);
  }
  //Increase Counter
  function increaseHandler(){
      setCount(count + 1);
  }
  //Reset Counter
  function resetHandler(){
      setCount(0);
  }

  return (
    <>
      <div>Increment And Decrement</div>
      <div>
        <button onClick={decreaseHandler}> - </button>
        <div>
            {count}
        </div>
        <button onClick={increaseHandler}> + </button>
      </div>
      <button onClick={resetHandler}>Reset</button>
    </>
  );
}

export default App
