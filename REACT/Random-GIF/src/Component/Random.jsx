import {useEffect, useState} from "react";
import axios, {Axios} from "axios";
import Spinner from "./Spinner.jsx";
import useGIF from "./useGIF.jsx";

// const API_KEY = "GOVrqhMn632P4lXPyHbjWttuKcj8cZJo";

function Random() {

    // const [gif, setGif] = useState([]);
    // const [loading, setLoading] = useState(false);
    //
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //
    //     const imgSource = data.data.images.downsized_medium.url;
    //     setGif(imgSource);
    //     console.log(data);
    //     setLoading(false);
    // }
    //
    // useEffect(() => {
    //     fetchData();
    // }, [])
    //
    // function clickHandler() {
    //     fetchData();
    // }

    const {gif, loading, fetchData} = useGIF();

    function clickHandler() {
        fetchData();
    }


    return (
        <div className = {"rounded-md  h-[300px] lg:w-[800px] w-[600px] bg-gray-200 p-1 mb-1 shadow-2xl"}>
            <div className = {"rounded-md flex justify-center items-center p-1 mb-1 w-full"}>
                <h1 className = {"rounded-md border font-bold text-black text-center p-[2px]"}>Random GIF</h1>
            </div>
            <div className = {"rounded-md p-1 mb-1 flex flex-col justify-center items-center h-max"}>

                <div className = {"rounded-md border h-[210px] mb-1 w-full flex justify-center items-center overflow-hidden"}>
                    {
                        loading ? (<Spinner/>) : (<img className = {"border flex justify-center items-center overflow-hidden"}
                                                       src = {gif}
                                                       alt = "Gif"
                        />)
                    }
                </div>
                <button className = {"font-bold flex justify-center items-center border rounded-full w-[100px] cursor-pointer hover:bg-gray-700 text-center" +
                    " hover:text-white transition delay-100 duration-500 hover:shadow-2xl"}
                        onClick = {clickHandler}>
                    Generate
                </button>
            </div>

        </div>

    )
}

export default Random