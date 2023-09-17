import CounterComponent from "./CounterComponent"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Cart from './components/Cart'
import ItemList from "./components/ItemList"
// import ProductDetail from "./components/ProductDetail"



const  App = () => {



    return (
        <BrowserRouter> 
          
          <NavBar/>


          <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
             {/* <ItemListContainer /> */}
            {/* <ItemDetailContainer/>  */}
            {/* <Route exact path='/about' element={<About/>}/> */}
            {/* <Route exact path='/cart' element={<Cart/>}/> */} 
            {/* <Route path='/product/:id' element={<ProductDetail/>}/> */}
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route exact path='/categoria/:categoria' element={<ItemListContainer/>} />
            
            

          </Routes>

        </BrowserRouter>
  )
}

export default App
