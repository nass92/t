import "./App.css";
import React from "react";
import App from "./App";
import { useContract } from "web3-hooks";
import { texTokenAddress, texTokenAbi} from "./contracts/TexToken";


export const DappContext = React.createContext(null);

function Dapp() {
  const TXT = useContract(texTokenAddress, texTokenAbi);

  return (
    <DappContext.Provider value={TXT}>
        <App />
    </DappContext.Provider>
  );
}

export default Dapp;