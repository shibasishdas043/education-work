// import "./App.css";
// import Form from "./pages/Form";
// import Storage from "./pages/Storage";
// import { Routes, Route } from "react-router-dom";
// import { contextApi } from "./context/context";

// function App() {
//   // const [change, setChange] = useState();

//   // useEffect(() => {
//   //   console.log("whithout anything");
//   // },[])
//   // useEffect(() => {
//   //   console.log("\n");
//   //   console.log("whith empty array");
//   //   console.log("\n");
//   // },[])
//   // useEffect(() => {
//   //   console.log("whith change state variable");
//   // }, [change])

//   // const [arr, setArr] = useState([]);

//   return (

//     <div className="p-1">
//       {/* <button className='border p-1' onClick={()=> setChange(Math.round (Math.random()*Math.random()*20))}> CLick Me : {change}</button> */}
//       {/* <contextApi.Provider value={{arr, setArr}}> */}
//         <Routes>
//           <Route path="/" element={<Form />} />
//           <Route path="/Storage" element={<Storage />} />
//         </Routes>
//       {/* </contextApi.Provider> */}
//     </div>
//   );
// }

// export default App;

// import { Route, Routes } from "react-router-dom";
// import PageOne from "./pages/PageOne";
// import PageTwo from "./pages/PageTwo";

// const App = () => {
//   return (
//     <div className="text-black">

//       <Routes>
//         <Route path="/" element={<PageOne />} />
//         <Route path="/pagetwo" element={<PageTwo />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useRef } from "react";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const refRence = useRef("input");

  function focus() {
    refRence.current.classList.contains("hidden")
      ?refRence.current.classList.remove("hidden"):refRence.current.classList.add("hidden");
    
  }



  return (
    <div className="m-3">
      <span>
        <input
          ref={refRence}
          type="text"
          className="border-[1px]  m-2 hidden"
        />
        <button
          onClick={focus}
          className="border-[1px] p-1"
        >
          Click
        </button>
      </span>
    </div>
  );
};

export default App;


