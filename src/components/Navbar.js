import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Container,
  } from "@chakra-ui/react"
const NavBar = () => {
return (
    <Container align='center' >
    <Breadcrumb separator="-">
    <BreadcrumbItem>
      <BreadcrumbLink href="#" > TextNFT</BreadcrumbLink>
    </BreadcrumbItem>
  
    
  </Breadcrumb>
  </Container>
)
}
export default NavBar;