import TXT from "./CreateNFT/Text";
import { Grid, GridItem, Flex, Box, Spacer } from "@chakra-ui/react";
import Nft from "./SeeNFT/NFT";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react"
import Exp from "./SeeNFT/Expo";
const GridText = ()=> {  return (
    
  <Router>

      <Switch>

         <Box p="170" mt="-130" >
            <Route path='/home' exact component={TXT} /> 
         
            <Route exact path='/expo'>
              <Exp/>
            </Route>
        </Box>

      </Switch>

</Router>

 

   
  );
};

export default GridText;