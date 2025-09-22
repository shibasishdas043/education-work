import { useState, useCallback, useEffect, useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += `0123456789`;
    }
    if (charAllowed) {
      str += `!@#$%^&*()_+=-+*/~`;
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = pass + str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="bg-gray-700  w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
      <h1 className="text-3xl font-bold mb-2 text-center">Setup</h1>

      <div className="flex shaodw rounded-lg overflow-hidden mb-4">
        <input
          className="bg-white outline-none w-full py-1 px-3"
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-600 transiton delay-75 duration-300"
          onClick={copyPassword}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="range"
            min={8}
            max={16}
            value={length}
            name=""
            id=""
            onChange={(event) => setLength(event.target.value)}
          />
          <label htmlFor="length">Length : {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="checkbox"
            name=""
            id=""
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => {
                return !prev;
              });
            }}
          />
          <label htmlFor="number"> Numbers</label>
        </div>

        <div className="flex items-center gap-x-1 ">
          <input
            className="cursor-pointer"
            type="checkbox"
            name=""
            id=""
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => {
                return !prev;
              });
            }}
          />
          <label htmlFor="Character">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
