import React from 'react'
import {Card,Image,Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading, Flex, Center, SimpleGrid,Container} from '@chakra-ui/react'
import ItemCount from './itemCount'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  console.log(producto)
  return (
    <div  >
      <Container maxW='1200' bg='purple.600' p='2'  mt='2'>
  
              
                <Card maxW='300' bg='purple.100' alignContent='center' >
                  <CardBody >
                  <Image
                    src={producto.image}
              
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                <Heading alignSelf='center' size='md'>{producto.nombre}</Heading>
                  <Text>
                
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                  </Text>
                    </Stack>
                  </CardBody>
                <Divider />
          <CardFooter alignSelf='center'>
            <ButtonGroup spacing='2'>
              <Link to={`/item/${producto.id}`}> 
              <Button   color={'black'} background={'lightblue'}>Detalle</Button>
              </Link>
                
            </ButtonGroup>
          </CardFooter>
        </Card>
        
      </Container>
      

    </div>
  )
}

export default Item


