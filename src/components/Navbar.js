import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
  } from "@chakra-ui/react"
 import { Link as ReachLink } from "react-router-dom"

const NavBar = () => {
return (
  
    <Container align='center' mt="30"  borderWidth="10px" variant="soft-rounded" borderRadius="full" fontSize="5xl">
      <Breadcrumb separator=" / ">

      <BreadcrumbItem>
        <BreadcrumbLink href="home" > Make Your NFT</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='expo' >See Your NFT </BreadcrumbLink>
      </BreadcrumbItem>
    
    <BreadcrumbItem>
        <BreadcrumbLink href="">Sell Your NFT </BreadcrumbLink>
    </BreadcrumbItem>

    </Breadcrumb>
  </Container>
 
)
}
export default NavBar;