import {useState} from 'react'
import data from "./Components/cityData.jsx"
import './App.css'
import Tours from "./Components/Tours.jsx"
import Card from "./Components/Card.jsx"

function App() {
    const [tours, setTours] = useState(data);

    function removeTour(id) {
        const newTour = tours.filter(tour => tour.id !== id);
        setTours(newTour);
    }

    if (tours.length === 0){
        return (
            <div className={"refresh"}>
                <h2>No Tours Left</h2>
                <button className={"btn-white"} onClick={() => setTours(data)}>
                    Refresh
                </button>
            </div>
        )
    }

    return (
        <div className={"App"}>
            <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
    )
}

export default App
