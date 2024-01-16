import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./Fooditem";
import { clearCart } from "../utils/cartSlice";
// import EmptyCart from '../assets/e.mp4';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(clearCart([]))
    }

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * 64, 0);

    return (
        <div className="flex">
            {/* Cart Items */}
            <div className="w-2/3 p-4">
                <strong className="block mb-4 text-xl">Cart - {cartItems.length} Items</strong>
                {cartItems.length === 0 ? (
                    <p className="text-lg">No products in the cart.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="border p-4 mb-4">
                            <FoodItem {...item} />
                        </div>
                    ))
                )}
            </div>

            {/* Cart Summary */}
            <div className="w-1/3 p-4 mt-11">
                {cartItems.length === 0 ? (
                    <div className="bg-gray-200 p-4 mb-4">
                        <strong className="block mb-2 text-3xl">Cart is Empty</strong>
                    </div>
                ) : (
                    <div className="bg-gray-200 p-4 mb-4">
                        <strong className="block mb-2 text-3xl">Cart Summary</strong>
                        <button className="text-xl ml-64 bg-blue-500 text-white px-2 py-2 hover:bg-blue-700 rounded" onClick={() => handleChange()}>Clear Cart</button>
                        <span className="text-xl">
                            <p>Total Items: {cartItems.length}</p>
                            <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
