import React from 'react'
import CartWidget from './CartWidget'
import {  Menu,Button,MenuButton,MenuList,MenuItem,Flex,Box, Spacer,MenuItemOption,MenuGroup,MenuOptionGroup,MenuDivider,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  
  return (
    <div>

        <Flex  backgroundColor='darkblue'> 
            <Box p='4'  color='white' >
                <Menu  >
                    <MenuButton   >
                        Categorias
                    </MenuButton>
                    <MenuList background='darkred'  color='white'>
                        <Link to={`/categoria/A`}>
                        <MenuItem background='darkred'>Categoria A</MenuItem>
                        </Link>
                        <Link to={`/categoria/B`}>
                        <MenuItem background='darkred'>Categoria B</MenuItem>
                        </Link>
                        <Link to={`/categoria/C`}>
                        <MenuItem background='darkred'>Categoria C</MenuItem>
                        </Link>
      
                     </MenuList>
                 </Menu>
                
            </Box>
            <Spacer />
            <Box p='4' color='white' fontSize={24}>
            <Link to={'/'}>
            <h3>NBA-Store</h3>
            </Link>
            
                 
            </Box>
            <Spacer />
            <Box p='4' color='white'>
              <Link to={'/cart'}>
                <CartWidget/>
              </Link>

            </Box>
        </Flex>
    
  </div>
  )
}

export default NavBar