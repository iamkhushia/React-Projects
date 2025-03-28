

import {collection,addDoc,getDocs,query,where,deleteDoc,doc,updateDoc,setDoc,} from "firebase/firestore";
import { auth, db } from "../../FirebaseConfig";
  
  const cartRef = collection(db, "cart");
  
  export const fetchCartFromFirebase = (userId) => async (dispatch) => {
    try {
      const q = query(cartRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push({ id: doc.id, ...doc.data() });
      });
  
      dispatch({
        type: "FETCH_CART",
        payload: cartItems,
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  
  export const addToCart = (product) => async (dispatch, getState) => {
    const user = auth.currentUser;
    if (!user) return;
  
    const cartItems = getState().cartReducer.cartItems;
    const existingItem = cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      dispatch(increaseQuantity(product.id));
    } else {
      const newCartItem = { ...product, quantity: 1, userId: user.uid };
      const docRef = doc(cartRef, `${user.uid}_${product.id}`);
      await setDoc(docRef, newCartItem);
  
      dispatch({
        type: "ADD_TO_CART",
        payload: { id: `${user.uid}_${product.id}`, ...newCartItem },
      });
    }
  };
  
  export const removeFromCart = (id) => async (dispatch) => {
    const user = auth.currentUser;
    if (!user) return;
  
    const itemRef = doc(db, "cart", id);
    await deleteDoc(itemRef);
  
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  
  export const increaseQuantity = (id) => async (dispatch, getState) => {
    const user = auth.currentUser;
    if (!user) return;
  
    const cartItems = getState().cartReducer.cartItems;
    const item = cartItems.find((item) => item.id === id);
  
    if (item) {
      const itemRef = doc(db, "cart", id);
      await updateDoc(itemRef, {
        quantity: item.quantity + 1,
      });
  
      dispatch({
        type: "INCREASE_QUANTITY",
        payload: id,
      });
    }
  };
  
  export const decreaseQuantity = (id) => async (dispatch, getState) => {
    const user = auth.currentUser;
    if (!user) return;
  
    const cartItems = getState().cartReducer.cartItems;
    const item = cartItems.find((item) => item.id === id);
  
    if (item && item.quantity > 1) {
      const itemRef = doc(db, "cart", id);
      await updateDoc(itemRef, {
        quantity: item.quantity - 1,
      });
  
      dispatch({
        type: "DECREASE_QUANTITY",
        payload: id,
      });
    }
  };
  
  export const clearCart = (userId) => async (dispatch) => {
    const q = query(cartRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  
    dispatch({
      type: "CLEAR_CART",
    });
  };
  

  export const clearCartAfterOrder = (userId) => async (dispatch) => {
    const q = query(cartRef, where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  
    dispatch({
      type: "CLEAR_CART",
    });
  };
  