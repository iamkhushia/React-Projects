

import axios from 'axios';

export const addProduct = () => ({
    type: "Add_Product"
});
export const getProduct = (data) => ({ 
    type: "Get_Product", 
    payload: data 
});
export const updateProduct = () => ({ 
    type: "Update_Product" 
});
export const getAllProducts = (data) => ({ 
    type: "Get_All_Product",
     payload: data 
    });
export const loading = () => ({ 
    type: "Loading" 
});

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch(loading());
        axios.get('http://localhost:3000/products')
            .then((res) => {
                console.log("Response from API:", res.data); 
                dispatch(getAllProducts(res.data));
            })
            .catch((err) => 
            console.log("API Error:", err));
    };
};

// export const AddProductAsync = (data) => {
//     return (dispatch) => {
//         dispatch(loading());
//         axios.post('http://localhost:3000/products', data)
//             .then(() => dispatch(getAllProductsAsync())) 
//             .catch((err) => console.log("API Error:", err));
//     };
// };

export const AddProductAsync = (data) => {
    return (dispatch) => {
        dispatch(loading());
        axios.post('http://localhost:3000/products', data)
            .then(() => {
                dispatch({ type: "Add_Product" });  
                dispatch(getAllProductsAsync());
            })
            .catch((err) => console.log("API Error:", err));
    };
};


export const deleteProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => dispatch(getAllProductsAsync()))
            .catch((err) => console.log("API Error:", err));
    };
};

export const getProductAsync = (id) => {
    return (dispatch) => {
        dispatch(loading());
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => dispatch(getProduct(res.data)))
            .catch((err) => console.log("API Error:", err));
    };
};


export const updateProductAsync = (id, data) => {
    return (dispatch) => {
        dispatch(loading());
        axios.put(`http://localhost:3000/products/${id}`, data)
            .then(() => {
                dispatch(updateProduct());  
                dispatch(getAllProductsAsync());
            })
            .catch((err) => console.log("API Error:", err));
    };
};



