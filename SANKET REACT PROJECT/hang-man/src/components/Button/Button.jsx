import React, { useState } from "react";

const Button = ({ text }) => {
  const [texT, setText] = useState(text);

  return (
    <div>
      <button onClick={() => setText("Hello")}
        style={{'backgroundColor':'red'}}
      >{texT}</button>
    </div>
  );
};

export default Button;
