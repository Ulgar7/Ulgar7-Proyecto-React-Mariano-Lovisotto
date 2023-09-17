import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Heading, Text,Center} from '@chakra-ui/react'
import ItemCount from './itemCount'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {
    const {id} = useParams()

    const filteredProducts = productos.filter((producto) => producto.id == id)

    // const filteredProdcuts = productos.filter((producto) => producto.id ==id)
    
  return (
    <div>
        {filteredProducts.map((p) => {

        return(
            <div key={p.id}>
                <Center p='1rem'>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{p.nombre}</Heading> 
                        </CardHeader>
                        <CardBody>
                            <Text>{p.descripcion}</Text>
                            <Text>{p.categoria}</Text>
                        </CardBody>
                        <CardFooter>
                            <ItemCount/>
                        </CardFooter>
                    </Card>

                </Center>


             </div>
        )
        })}
        {/* {productos.map((p)=>{})} */}
    </div>
  )
}

export default ItemDetail