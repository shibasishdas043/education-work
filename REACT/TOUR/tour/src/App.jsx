import { useState } from "react";
import './App.css';
import cities from './cities .jsx';
import Tours from './Tours.jsx';


function App() {

  const [cityData, setCityData] = useState(cities);

  return (
    <div>
      <Tours tours={cityData}></Tours>
    </div>
  );
}

export default App
