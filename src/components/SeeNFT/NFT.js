import { Center, Container, Circle } from "@chakra-ui/react"

import Tab2 from "./tab"



const NFT = ({nft}) => {

  return (
  <Container backgroundColor="purple.400" borderRadius="3rem" height="30rem" width="24rem" >
    <Circle mb="-8" position="relative" bottom="1rem" left="-11rem"  size="16" fontWeight="bold" fontSize="40" color="white">
      {nft.id}
    </Circle>

    <Tab2 nft = {nft} />

  </Container>
    )

}

export default NFT