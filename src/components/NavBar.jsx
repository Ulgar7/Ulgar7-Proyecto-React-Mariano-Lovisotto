import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,Box, Spacer,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

        <Flex  backgroundColor='black'> 
            <Box p='4'  color='white' >
                <Menu>
                    <MenuButton >
                        Categories
                    </MenuButton>
                    <MenuList color='black'>
                        <MenuItem>Category A</MenuItem>
                        <MenuItem>Category B</MenuItem>
                        <MenuItem>Category C</MenuItem>
      
                     </MenuList>
                 </Menu>
                
            </Box>
            <Spacer />
            <Box p='4' color='white' fontSize={24}>
                
            <h3>NBA-Store</h3>
                 
            </Box>
            <Spacer />
            <Box p='4' color='white'>
            <CartWidget/>

            </Box>
        </Flex>
    
  </div>
  )
}

export default NavBar