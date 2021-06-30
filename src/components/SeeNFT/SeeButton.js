import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Button,
    Box,
    CloseButton,
  } from "@chakra-ui/react"
  import {useDisclosure, useToast} from "@chakra-ui/react"
  import { DappContext} from "../../Dapp"
  import { useState, useContext, React } from "react"
  import { Web3Context } from "web3-hooks";
  import { ethers } from "ethers";
import Tab2 from "./tab";

const See= ({ nft }) => {
 

    const { isOpen, onOpen, onClose } = useDisclosure()
  

    return (
      <>
        <Button onClick={onOpen}>Create NFT</Button>
       
  
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your NFT</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Tab2 nft={nft} />
             
            </ModalBody>
  
            <ModalFooter>
              <Button  onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default See;