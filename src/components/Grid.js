import TXT from "./CreateNFT/Text";
import { Grid, GridItem, Flex, Box, Spacer } from "@chakra-ui/react";
import Nft from "./SeeNFT/NFT";

const GridText = ()=> {  return (
    
      <>
      
  <Box p="170" mt="-130" >
    <TXT/>
  </Box>
  
  <Box p="170" mt="-130"  >
    <Nft/>
  </Box>
  

  </>

   
  );
};

export default GridText;