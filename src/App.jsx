import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { useState, useEffect } from "react"

const  App = () => {

    return (
        <> 
          
          <NavBar/>
           <ItemListContainer greeting={'Bienvenido a tu centro de compras de articulos de NBA'}/>
    
    
        </>
  )
}

export default App
