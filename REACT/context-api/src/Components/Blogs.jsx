import {useContext} from "react";
import {AppContext} from "./AppContext.jsx";
import Spinner from "./Spinner.jsx";
import Card from "./Card.jsx";

function Blogs() {
    const {posts} = useContext(AppContext);
    return (
        <div>
            {
                loading ? (<Spinner/>) : (posts.length === 0 ? (<div>No Post Found</div>) : (posts.map((post) => {
                    return <Card key = {post.id}
                                 onSend = {post}/>
                })))
            }
        </div>
    )
}

export default Blogs