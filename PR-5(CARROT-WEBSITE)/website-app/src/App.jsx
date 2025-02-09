import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Navigate from './Component/Navigate';
import StyleOneProduct from './Component/Style1/StyleOneProduct';
import StyleTwoProduct from './Component/Style2/StyleTwoProduct';
import StyleThreeProduct from './Component/Style3/StyleThreeProduct';


function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <Navigate/>
      <StyleOneProduct/>
      <StyleTwoProduct/>
      <StyleThreeProduct/>
      <Footer/>
    </>
  )
}

export default App
