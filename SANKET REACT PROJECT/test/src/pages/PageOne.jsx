import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PageOne = () => {
    const navigate = useNavigate();
    const [Class, setClass]=useState("hidden");

    function changeClass() { 
        if (Class === "hidden") {
            setClass("text-semibold");
        } else {
            setClass("hidden");
        }
    }
  return (
    <div className="text-black">
      PageOne
      <button
        onClick={()=>changeClass()}
        className="border-[2px] p-0.5 m-0.5"
      >
        Click
          </button>
          
          <div className={`${Class}`}>Hello</div>
    </div>
  );
};

export default PageOne;
