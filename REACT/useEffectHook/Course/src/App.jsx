import {useState} from 'react';
import {useEffect} from "react";
import Navbar from "./Component/Navbar.jsx";
import Cards from "./Component/Cards.jsx";
import Filter from "./Component/Filter.jsx";
import {apiURL, filterData} from "./Component/data.jsx";
import {toast} from "react-toastify";
import Spinner from "./Component/Spinner.jsx";
import './App.css';
import Card from "./Component/Card.jsx";

function App() {
    let [courses, setCourses] = useState({});
    let [loading, setLoading] = useState(true);

    async function fetchData() {
        setLoading(true);
        try {
            let response = await fetch(apiURL);
            let outPut = await response.json();
            setCourses(outPut.data);

            setLoading(false);
        } catch (e) {
            toast.error("Error Occurred");
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div><Navbar/></div>
            <div><Filter filterData={filterData}/></div>
            <div>
                {
                    loading ? (<Spinner/>) :
                    <Cards courses={courses}/>
                }
            </div>
        </div>
    );
}

export default App
