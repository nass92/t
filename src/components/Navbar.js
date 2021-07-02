import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
  } from "@chakra-ui/react"
 

const NavBar = () => {
return (
  
    <Container align='center' mt="30"  borderWidth="10px" variant="soft-rounded" borderRadius="full" fontSize="5xl">
      <Breadcrumb separator=" / ">

      <BreadcrumbItem>
        <BreadcrumbLink href="/" > Make Your NFT</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='expo' >See Your NFT </BreadcrumbLink>
      </BreadcrumbItem>
    
    <BreadcrumbItem>
        <BreadcrumbLink href="store"> NFT Store</BreadcrumbLink>
    </BreadcrumbItem>

    </Breadcrumb>
  </Container>
 
)
}
export default NavBar;