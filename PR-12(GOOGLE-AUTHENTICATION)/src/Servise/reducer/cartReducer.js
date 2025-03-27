const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (existingItemIndex >= 0) {
                const updatedCart = [...state.cartItems];
                updatedCart[existingItemIndex].quantity += 1;
                return { ...state, cartItems: updatedCart };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
                };
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.id !== action.payload
                ),
            };

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        case "CLEAR_CART":
            return {
                ...state,
                cartItems: [],
            };

        default:
            return state;
    }
};

export default cartReducer;
