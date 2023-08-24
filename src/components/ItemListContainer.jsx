import React from 'react'
import { Divider, Flex, Box } from '@chakra-ui/react'


const ItemListContainer = ({greeting}) => {
  return (
    <Flex align="center" justify="center" m={20}>
        <Box fontSize={32} >
            <h1 >{greeting}</h1>

        </Box>

    </Flex>
  )
}

export default ItemListContainer