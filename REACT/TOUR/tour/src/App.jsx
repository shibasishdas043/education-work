import { useState } from "react";
import './App.css';
import Cities from './Cities';
import Tours from './Tours';
import Card from "./Card";


function App() {

  const [cityData, setCityData] = useState(Cities);

  function removeTour(id){
    const newTours = cityData.filter(tour => tour.id !== id);
    setCityData(newTours);
  }

  return (
    <div>
      <Tours tours={cityData} removeTour={removeTour(id)}></Tours>
    </div>
  );
}

export default App
