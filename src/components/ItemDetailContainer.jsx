import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const productos = [
        {id:1, nombre:'Producto A', descripcion: 'Descripcion del producto A', stock: 5, categoria:'A'},
        {id:2, nombre:'Producto B', descripcion: 'Descripcion del producto B', stock: 10, categoria:'A'},
        {id:3, nombre:'Producto C', descripcion: 'Descripcion del producto C', stock: 20, categoria:'B'},
        {id:4, nombre:'Producto D', descripcion: 'Descripcion del producto D', stock: 25, categoria:'B'},
        {id:5, nombre:'Producto E', descripcion: 'Descripcion del producto E', stock: 30, categoria:'C'},
        {id:6, nombre:'Producto F', descripcion: 'Descripcion del producto F', stock: 35, categoria:'C'}
    ]

    const getProductos = new Promise((resolve, reject)=> {
        if (productos.length > 0){
            setTimeout(()=>{
                resolve(productos)
            },2000)
        }else{
            reject(new Error('No hay datos'))
        }
    })

    getProductos
    .then((res)=> {
    })
    .catch((error)=>{
        console.log(error)
    })






  return (
    <>
        <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer