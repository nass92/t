import TXT from "./CreateNFT/Text";
import { Box  } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react"
import Exp from "./SeeNFT/Expo";
import Store from "./Store/NFT-Store";
const GridText = ()=> {  return (
    
  <Router>

      <Switch>

         <Box p="170" mt="-130" >
            <Route path='/' exact component={TXT} /> 
         
            <Route exact path='/expo'>
              <Exp/>
            </Route>
            <Route exact path='/store'>
              <Store/>
            </Route>
        </Box>

      </Switch>

</Router>

 

   
  );
};

export default GridText;