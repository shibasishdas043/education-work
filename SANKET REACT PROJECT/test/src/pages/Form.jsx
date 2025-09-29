import React from "react";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

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
            onChange={(event) => setData(event.target.value)}
          />
          <label htmlFor="input">Input Section</label>
        </div>

        <button
          type="submit"
          className="border rounded cursor-pointer"
          onClick={() => navigate(`/Storage/${data}`)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
