import {  Container, Circle, Box } from "@chakra-ui/react"
import Content from "./Content"



const NFT = ({nft}) => {
  return (
  <Container >
    <Box  h="65vh" backgroundColor="#6C6B6B"  w="20rem" borderWidth="10px" borderRadius="xl" boxShadow="2xl" p="10" overflow="hidden"  align="center">
    <Circle mb="-8" position="relative" bottom="1rem" left="-11rem"  size="16" fontWeight="bold" fontSize="40" color="white">
      {nft.id}
    </Circle>

    <Content nft = {nft} />
    
    </Box>
  </Container>
    )

}

export default NFT