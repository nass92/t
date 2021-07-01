import { Container, SimpleGrid, Heading, Circle } from "@chakra-ui/react"
import { DappContext } from "../../Dapp"
import { useState, useEffect, useContext } from "react"
import { Web3Context } from "web3-hooks";
import { storeAddress } from "../../contracts/Store"
import { ethers } from "ethers";
import List from "./List"

const Store= ({nft}) => {
  const [web3State] = useContext(Web3Context);
  const [list, setlisting] = useState([]);
  const [etherBalance, setEtherBalance] = useState(0);
  const TXT = useContext(DappContext)
  const Store = useContext(DappContext)

 
  useEffect(() => {
    if(web3State.chainId === 4) {
      const getNFT = async () => {
        try {
          const listingApproved = []
          const totalSupply = await TXT.totalSupply()
          const name = await TXT.name()
          const ethBalance = await Store.getEtherBalance()
          for(let i = 1; i <= totalSupply.toString(); i++ ) {
            let approved = await TXT.getApproved(i)
            if (approved === storeAddress) {
              const nft = await TXT.getTXTById(i)
              const price = await TXT.getPrice(i)
              listingApproved.push({
                name: name,
                hash: nft.contentHash,
                content: nft.content,
                title: nft.title,
                author: nft.author,
                url: nft.url,
                id: i,
                price: ethers.utils.formatEther(price),
              })
            } 
          }
          setlisting(listingApproved)
          setEtherBalance(ethers.utils.formatEther(ethBalance))
        } catch (e) {
          console.log(e.message)
        }
      }
        getNFT()
    }   
  }, [TXT, Store, web3State])

  return (
  <Container centerContent maxW="container.xl" py="10">
    <Heading mb="5">NFT STORE</Heading>
    <SimpleGrid columns={[1, 1, 1, 2, 3]} gap="8">
      {list.map((el, index) => {
        return <Container backgroundColor="purple.400" borderRadius="3rem" height="30rem" width="24rem" >
        <Circle mb="-8" position="relative" bottom="1rem" left="-11rem"  size="16" fontWeight="bold" fontSize="40" bg={nft.isApprove ? "gray.500" : "tomato"} color="white">
          {nft.id}
        </Circle>
        
        <List key={index} nft={el}></List>
              
    
   
      </Container>
      })}
    </SimpleGrid>
  </Container>
  )
}

export default Store


