import Spinner from "./Spinner.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const API_KEY = "GOVrqhMn632P4lXPyHbjWttuKcj8cZJo";
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

function useGIF(tag) {


    const [gif, setGif] = useState([]);

    const [loading, setLoading] = useState(false);

    async function fetchData() {
        setLoading(true);

        const {data} = await axios.get(tag ? tagUrl : randomUrl);

        const imgSource = data.data.images.downsized_medium.url;
        setGif(imgSource);
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        gif,
        loading,
        fetchData
    }
}

export default useGIF