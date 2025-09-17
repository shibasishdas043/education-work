import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import CartItem from "../Components/CartIttem.jsx";
import {useEffect, useState} from "react";

function Cart() {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(
        () => {
            setTotalAmount(cart.reduce((acc, curr) => {
                return acc + curr.price
            }, 0))
        }, [cart]
    );

    return (
        <div>
            {
                cart.length > 0 ? (
                    <div>
                        <div>
                            {
                                cart.map(
                                    (item, index) => {
                                        return <CartItem key = {item.id}
                                                         item = {item}
                                                         itemIndex = {index}
                                        />
                                    }
                                )
                            }
                        </div>
                        <div>
                            <div>Your Cart</div>
                            <div>Summary</div>
                            <p>
                                <span>Total Item : {cart.item}</span>
                            </p>
                            <button>
                                Checkout
                            </button>
                        </div>
                        <div>
                            <p>Total Amount : {totalAmount}</p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>Cart Is Empty !</h1>
                        <NavLink to = {"/"}>
                            <button>Shop Now</button>
                        </NavLink>
                    </div>

                )
            }
        </div>
    )
}

export default Cart;