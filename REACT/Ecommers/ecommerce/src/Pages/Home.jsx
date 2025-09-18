import {useEffect, useState} from "react";
import Product from "../Components/Product.jsx";
import Spinner from "../Components/Spinner.jsx";


function Home() {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);


    async function fetchProductsData() {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const dataJson = await response.json();
            setPosts(dataJson);
            console.log(posts);
        } catch (error) {
            console.log("Error Occured");
            setPosts([]);
        }

        setLoading(false)
    }

    useEffect(() => {
        fetchProductsData();
    }, []);

    return (
        <div className={"flex justify-center items-center"}>
            {
                loading ? (<Spinner/>) : (posts.length > 0 ? (
                        <div className = {"grid xs:grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2 max-auto space-y-10 space-x-5" +
                            " min-h-[80vh]"}>
                            {
                                posts.map((post) => <Product key = {post.id}
                                                             post = {post}/>)
                            }
                        </div>
                    ) : (
                        <div className = {"flex justify-center items-center"}>
                            <p>No Data Found</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Home;
