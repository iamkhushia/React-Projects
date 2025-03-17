
// import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Components/Home'
import Header from './Components/Header'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import { Route, Routes } from 'react-router'
import Categories from './Components/Categories'
import Footer from './Components/Footer'

function App() {

  return (
    <>
        <Header />
        <Categories/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
