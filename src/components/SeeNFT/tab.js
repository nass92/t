import { Center, Heading, Image, Container, VStack} from "@chakra-ui/react"
import ContentModal from "./SeeContent"


const Tab2 = ({nft}) => {
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
        borderRadius="xl"
      />
    </Center>

    <Center>
      <ContentModal txt={nft.txt}/>
    </Center>
    
  </VStack>
  </Container>
)
}

export default Tab2