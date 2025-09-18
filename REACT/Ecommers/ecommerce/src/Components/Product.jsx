import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {ToastContainer, toast} from "react-toastify";
import {add, remove} from "../Redux/Slices/cartSlice.jsx";


function Product({post}) {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(add(post));
        toast.success("Item Added To Cart");
    }

    function removeFromCart() {
        dispatch(remove(post.id));
    }


    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src = {post.image}
                     alt = "post.image"/>
            </div>
            <div>
                <p>{post.price}</p>
            </div>

            {
                cart.some((p) => p.id === post.id) ? (<button onClick = {removeFromCart}>Remove Item</button>) : (
                    <button onClick = {addToCart}>Add to Cart</button>)
            }
        </div>
    )
}

export default Product;