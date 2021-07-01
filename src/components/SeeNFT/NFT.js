import { Circle, Box } from "@chakra-ui/react"
import Content from "./Content"



const NFT = ({nft}) => {
  return (
  
    <Box  h="65vh" backgroundColor="#6C6B6B"  w="25rem" borderWidth="10px" borderRadius="xl" boxShadow="xl" p="8" overflow="hidden"  align="center">
    <Circle mb="-8" position="relative" bottom="1rem" left="-11rem"  size="16" fontWeight="bold" fontSize="40" color="#463A38" >
      {nft.id}
    </Circle>

    <Content nft = {nft} />
    
    </Box>
  
    )

}

export default NFT