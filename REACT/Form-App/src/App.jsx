import { useState } from 'react'

import './App.css'

function App() {
  const [formData, setFormdata] = useState({
      firstName:"",
  });

  function changeHandler(event){
      const {name, value, checked, type} = event.target;
      setFormdata((prev) => {
          (...prev, [name]=value)
      });

  }

  return (
      <div>
          <form action="">
              <input type="text" name={"firstName"} id={"firstName"} placeholder={"love"} value={formData.firstName} onChange={changeHandler}/>
          </form>
      </div>
  )
}

export default App
