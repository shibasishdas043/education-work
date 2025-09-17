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
        <div>
            {
                loading ? (<Spinner/>) : (posts.length > 0 ? (
                        <div>
                            {
                                posts.map((post) => <Product key = {post.id}
                                                             post = {post}/>)
                            }
                        </div>
                    ) : (
                        <div>
                            <p>No Data Found</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Home;
