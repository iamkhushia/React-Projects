
import { Route, Routes } from 'react-router'
import './App.css'
import AddBook from './Components/AddBook'
import Header from './Components/Header'
import Home from './Components/Home '
import EditBook from './Components/EditBook'
import ViewBook from './Components/ViewBook'

function App() {

  return (
    <>
     <Header/>
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route path="/view/:id" element={<ViewBook />} />
        </Routes>

    
    </>
  )
}

export default App
