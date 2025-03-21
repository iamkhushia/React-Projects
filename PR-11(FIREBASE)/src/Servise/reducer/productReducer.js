
// const initialState = {
//     products: [],
//     product: null,
//     isCreated: false, 
//     isUpdated: false,
//     isLoading: false
// };

// export const productReducer = (state = initialState, action) => {
//     switch (action.type) {
      

//         case "Add_Product":
//             console.log("Product Added, Navigating to Home...");
//             return { 
//                 ...state, 
//                 isCreated: true 
//             };

//         case "Get_All_Product":
//             return { 
//                 ...state, 
//                 products: action.payload, 
//                 isLoading: false 
//             };

//         case "RESET_CREATE":
//             return { 
//                 ...state, 
//                 isCreated: false 
//             };

//         case "Get_Product":
//             return { 
//                 ...state, 
//                 product: action.payload 
//             };

//         case "Update_Product":
//             return { 
//                 ...state, product: null, 
//                 isUpdated: true 
//             };

//         case "Loading":
//             return { 
//                 ...state, 
//                 isLoading: true
//              };

//         default:
//             return state;
//     }
// };

const initialState = {
    products: [],
    product: {},
    isCreated: false,
    isLoading: false,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Get_All_Product":
        return {
          ...state,
          products: action.payload,
          isCreated: false, 
        };
  
      case "Add_Product":
        return {
          ...state,
          isCreated: true, 
        };
  
      // case "Update_Product":
      //   return {
      //     ...state,
      //     isCreated: true, 
      //   };

      case "Update_Product":
      return {
        ...state,
        isUpdated: true, 
      };
  
      // case "RESET_CREATE":
      //   return {
      //     ...state,
      //     isCreated: false, 
      //   };

      case "RESET_UPDATE":
      return {
        ...state,
        isUpdated: false, 
      };

        case "Get_Product":
          return {
            ...state,
            product: action.payload, 
          };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  


