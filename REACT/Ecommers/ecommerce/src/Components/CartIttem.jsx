import {MdOutlineDelete} from "react-icons/md";
import {useDispatch} from "react-redux";
import {remove} from "../Redux/Slices/cartSlice.jsx";
import {ToastContainer, toast} from "react-toastify";

function CartItem({item}) {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.success("Item Removed");
    }

    return (
        <div>
            <div>
                <div>
                    <img src = {item.image}
                         alt = "image"/>
                </div>
                <div>
                    <h1>
                        {item.title}
                    </h1>
                    <h1>
                        {item.description}
                    </h1>
                    <div>
                        <p>{item.price}</p>
                        <div onClick = {removeFromCart}>
                            <MdOutlineDelete/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
