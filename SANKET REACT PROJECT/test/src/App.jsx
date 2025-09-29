import { useEffect, useState } from "react";
import "./App.css";
import Form from "./pages/Form";
import Storage from "./pages/Storage";
import { Routes, Route } from "react-router-dom";
import { contextApi } from "./context/context";

function App() {
  // const [change, setChange] = useState();

  // useEffect(() => {
  //   console.log("whithout anything");
  // },[])
  // useEffect(() => {
  //   console.log("\n");
  //   console.log("whith empty array");
  //   console.log("\n");
  // },[])
  // useEffect(() => {
  //   console.log("whith change state variable");
  // }, [change])


  const [arr, setArr] = useState([]);


  return (



    <div className="p-1">
      {/* <button className='border p-1' onClick={()=> setChange(Math.round (Math.random()*Math.random()*20))}> CLick Me : {change}</button> */}
      <contextApi.Provider value={{arr, setArr}}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/Storage" element={<Storage />} />
        </Routes>
      </contextApi.Provider>
    </div>
  );
}

export default App;
