
import { Center, Heading, Image, Container, Button, VStack, HStack, Box, CloseButton} from "@chakra-ui/react"
import ContentModal from "../SeeNFT/SeeContent"
import {useToast} from "@chakra-ui/react"
import { DappContext } from "../../Dapp"
import { useState, useContext } from "react"
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers"

const List = ({nft}) => {
  const Store = useContext(DappContext)
  const [web3State] = useContext(Web3Context);
  const toast = useToast()
  const [loading, setLoading] = useState(false)
 
  const handleBuyButton = async () => {
    try {
      setLoading(true)
      const tx = await Store.buyNFT(nft.id, {value: ethers.utils.parseEther(nft.price)})
      const network = web3State.networkName.toLowerCase()
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`
     
      toast({
        title: 'Transaction sent successfully !',
         render: () => (
            <Box color="white" p={3} bg="green.500" rounded={20}>
              <CloseButton />
              <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p>
              <br />You can view your pending transaction at hash :
              <br /><a target="blank" style={{color: "orange"}} href={link}>{tx.hash}</a>
            </Box>),
        position: 'bottom',
        duration: 9000,
        isClosable: true,
      })
      await tx.wait()
    } catch (e) {
       toast({
        title: 'Error',
        description: e.error ? e.error.message : e.message,
        status: 'error',
        position: 'top-right',
        duration: 9000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

return(
  <Container>
    <VStack spacing="20px">
      <Center mt="-5" position="relative">
        <Heading as="h1" size="lg">{nft.title}</Heading>
      </Center>

      <Center>
        <Image
          boxSize={nft.url ? "200px": ""}
          objectFit="cover"
          src={nft.url}
          alt={nft.url ? nft.title : ""}
          borderRadius="xl"
        />
      </Center>

      <Center mt="-5" position="relative">
        <Heading as="h1" size="lg" color="yellow.400">{nft.price} ETH</Heading>
      </Center>

      <Center>
        <HStack mt="3" spacing="10">
          <ContentModal txt={nft.txt}/>
          <Button
            onClick={handleBuyButton}
            isFullWidth
            isLoading={loading}
            colorScheme="whatsapp"
          >
            Buy
          </Button>
        </HStack>
      </Center>
      
      </VStack>
    </Container>
  )
}

export default List


