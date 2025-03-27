
// // import { Route, Routes } from 'react-router'
// import './App.css'
// import Home from './Components/Home'
// import Header from './Components/Header'
// import AddProduct from './Components/AddProduct'
// import EditProduct from './Components/EditProduct'
// import { Route, Routes } from 'react-router'
// import Categories from './Components/Categories'
// import Footer from './Components/Footer'
// import ViewProduct from './Components/ViewProducts'
// import Register from './Components/Register'
// import Login from './Components/Login'
// import Cart from './Components/Cart'
// import OrderHistory from './Components/OrderHistory'

// function App() {

//   return (
//     <>
//         <Header />
//         <Categories/>
//       <Routes>
//       <Route path='/signup' element={<Register />} />
//       <Route path='/signin' element={<Login />} />        
//       <Route path='/' element={<Home />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/order-history" element={<OrderHistory />} />
//       <Route path='/add' element={<AddProduct />} />
//         <Route path='/edit/:id' element={<EditProduct />} />
//         <Route path='/view/:id' element={<ViewProduct />} />
//       </Routes>
//       <Footer/>
//     </>
//   )
// }

// export default App



import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import { Route, Routes } from "react-router";
import Footer from "./Components/Footer";
import ViewProduct from "./Components/ViewProducts";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import OrderHistory from "./Components/OrderHistory";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import { useDispatch } from "react-redux";
import { loginSuc } from "./Servise/action/auth.action";
import Categories from "./Components/Categories";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // ✅ Initial loader

  useEffect(() => {
    // ✅ onAuthStateChanged to check if user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // ✅ User is authenticated, update state
        dispatch(
          loginSuc({
            displayname: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      }
      setLoading(false); // ✅ Stop loading after checking auth
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    // ✅ Show loader while checking authentication
    return (
      <div className="text-center mt-5">
        <h3>Checking Authentication...</h3>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Categories />
      <Routes>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/view/:id" element={<ViewProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
