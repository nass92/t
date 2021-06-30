import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
  } from "@chakra-ui/react"
const NavBar = () => {
return (
  
    <Container align='center' mt="30"  borderWidth="10px" variant="soft-rounded" borderRadius="full" fontSize="5xl">
    <Breadcrumb separator=" / ">

    <BreadcrumbItem>
      <BreadcrumbLink href="#" > Make Your NFT</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
    <BreadcrumbLink href="#">See Your NFT </BreadcrumbLink>
  </BreadcrumbItem>
  
  <BreadcrumbItem>
    <BreadcrumbLink href="#">Sell Your NFT </BreadcrumbLink>
  </BreadcrumbItem>

  </Breadcrumb>
  </Container>
 
)
}
export default NavBar;