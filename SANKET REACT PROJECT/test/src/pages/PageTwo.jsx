import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageTwo = () => {
    const navigate = useNavigate();
  return (
    <div className="text-black">
      PageTwo
      <button
        onClick={() => navigate("/")}
        className="border-[2px] p-0.5 m-0.5"
      >
        Click
      </button>
    </div>
  );
}

export default PageTwo