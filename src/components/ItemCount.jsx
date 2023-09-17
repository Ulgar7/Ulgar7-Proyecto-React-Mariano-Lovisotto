import React from 'react'
import { useState, useEffect } from "react"
import {
    Button,
    Card,
    CardBody,
    Divider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,Box, Spacer,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ButtonGroup,
  } from '@chakra-ui/react'


const ItemCount = () => {

    const [contador, setContador] = useState(1)
        
    const onAdd = () => {
        alert(contador)
    }

    const sumar = () => { if(contador < 10){
      setContador(contador +1)
    }
  }
    const restar = () => { if(contador > 1){
      setContador(contador - 1)
    }
    }


  return (
    <>
    <div>
    <Flex justify=''> 
    
        <Card mt='' maxW='md'>
            <CardBody >
    
            <p align="center" justify="">{contador}</p>
            <Flex justify=''>
                 <ButtonGroup gap='4'>
                     <Button  width='33300' colorScheme='blue' onClick={sumar}>+</Button>
                      {/* <Spacer></Spacer> */}
                     <Button colorScheme='green' onClick={onAdd}>Añadir al carrito</Button>
                     {/* <Spacer></Spacer> */}
                     <Button  colorScheme='red' onClick={restar}>-</Button>

                </ButtonGroup>

             </Flex>
             </CardBody>
  
        </Card>
    </Flex>

    </div>
    </>
  )
}

export default ItemCount