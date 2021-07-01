import { Center, Heading, SimpleGrid, Button, Text, Spacer } from "@chakra-ui/react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react"

const Info = ({ nft }) => {
  return (
    <>
      <Center mt="-4">
        <Heading as="h1" size="lg">{nft.title}</Heading>
      </Center>

      <SimpleGrid columns={1} spacing={4} mt="2"  fontSize="1rem" >
        <Center>
          <Text fontWeight="bold">Name</Text>
          <Spacer />
          <Text >{nft.title}</Text>
        </Center>
          
        <Center>
          <Text  fontWeight="bold">NFT id</Text>
          <Spacer />
          <Text >{nft.id}</Text>
        </Center>
        
        <Center>
          <Text fontWeight="bold">Hash</Text>
          <Spacer />
            <Popover>
              <PopoverTrigger>
                <Button>Click</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>{nft.hash}</PopoverBody>
              </PopoverContent>
            </Popover>
        </Center>
        
        <Center>
          <Text fontWeight="bold">content length</Text>
          <Spacer />
          <Text>{nft.txt.length}</Text>
        </Center>
        
        <Center>
          <Text  fontWeight="bold">Author</Text>
          <Spacer />
          <Text>{nft.author}</Text>
        </Center>
        
        <Center>
          <Text fontWeight="bold">Image url</Text>
          <Spacer />
            <Popover>
              <PopoverTrigger>
                <Button>Click</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>{nft.url}</PopoverBody>
              </PopoverContent>
            </Popover>
        </Center>
          
      </SimpleGrid>
    </>
  )
}

export default Info