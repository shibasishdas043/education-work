import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../context/context";

const Form = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState([]);
  const { arr, setArr } = useContext(contextApi);

  useEffect(() => {
    console.log(inputValue, arr);
  }, [inputValue, arr]);
  

  return (
    <div className="mt-1 ml-1">
      <form className="flex gap-1 text-center">
        <div className="flex flex-col">
          <input
            className="border rounded-2xl p-1 text-center"
            type="text"
            name="input"
            id="input"
            placeholder="Write Here"
            onChange={(event) => {
              setInputValue([event.target.value])
            }}
          />
          <label htmlFor="input">Input Section</label>
        </div>

        <button
          type="button"
          className="border rounded cursor-pointer"
          onClick={() => {
            setArr([inputValue]);
            navigate(`/Storage`);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
