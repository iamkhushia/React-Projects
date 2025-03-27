// const initalState = {
//     user: null,
//     isCreated: false,
//     error: null,
//     isLoading: false
// }


// export const userReducer = (state = initalState, action) => {
//     switch (action.type) {
//         case "SIGNUP_SUCCESS":
//             return {
//                 ...state,
//                 isCreated: true
//             }
//         case "SIGNUP_REJECT":
//             return {
//                 ...state,
//                 error: action.payload
//             }
//         case "SIGNIN_SUCCESS":
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case "SIGNIN_REJECT":
//             return {
//                 ...state,
//                 error: action.payload
//             }
//         case "LOGOUT": {
//             return {
//                 ...state,
//                 user: null
//             }
//         }


//         case "Loading":
//             return {
//                 ...state,
//                 isLoading: true
//             }
//         default:
//             return state;
//     }
// }



// auth.reducer.js
const initialState = {
    user: null,
    isCreated: false,
    error: null,
    isLoading: true, // ✅ Initial loading state is true
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_SUCCESS":
        return {
          ...state,
          isCreated: true,
        };
      case "SIGNUP_REJECT":
        return {
          ...state,
          error: action.payload,
        };
      case "SIGNIN_SUCCESS":
        return {
          ...state,
          user: action.payload,
          isLoading: false, // ✅ Auth checked
        };
      case "SIGNIN_REJECT":
        return {
          ...state,
          error: action.payload,
          isLoading: false, // ✅ Auth check failed
        };
      case "LOGOUT":
        return {
          ...state,
          user: null,
          isLoading: false,
        };
      case "Loading":
        return {
          ...state,
          isLoading: true,
        };
      default:
        return state;
    }
  };
  