import {Container, Box, Text, Input, Spacer, Button} from '@chakra-ui/react'
import See from './SeeButton'

const Nft = () => {
    return(
        <>
        <Container align='center' >
        <Box  h="55vh" backgroundColor="#6C6B6B"  w="md" borderWidth="10px" borderRadius="xl" boxShadow="2xl" p="10" overflow="hidden"  align="center">
           
        <Text align="center" fontSize="3xl">Check The Containe Of your NFT</Text>
       
          <Box w="75%">
          <form  id="first-name" >
          <Text align="center" fontSize="3xl">Your Address</Text>
            <Input placeholder="Receiver" mb={2} 
            />
            <Spacer />
            
            <Text align="center" fontSize="3xl">The Id Of Your NFT</Text>
            <Input placeholder="Receiver" mb={2} 
            />
             <See />
           </form>
          </Box>
        </Box>

        </Container>
</>

    )
}
export default Nft;