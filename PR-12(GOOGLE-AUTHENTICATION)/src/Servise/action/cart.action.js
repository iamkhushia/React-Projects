

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../FirebaseConfig";

export const addToCart = (product) => ({
    type: "ADD_TO_CART",
    payload: product,
});

export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id,
});

export const clearCart = () => ({
    type: "CLEAR_CART",
});


export const placeOrder = (cartItems, totalAmount, setOrderSuccess) => {
    return async (dispatch) => {
        try {
            const orderData = {
                items: cartItems,
                totalAmount,
                orderDate: new Date().toISOString(),
            };

            await addDoc(collection(db, "orders"), orderData);

            dispatch({ type: "CLEAR_CART" });

            setOrderSuccess(true);
        } catch (error) {
            console.error("Error placing order:", error);
            setOrderSuccess(false);
        }
    };
};
export const increaseQuantity = (id) => ({
    type: "INCREASE_QUANTITY",
    payload: id,
});

export const decreaseQuantity = (id) => ({
    type: "DECREASE_QUANTITY",
    payload: id,
});



