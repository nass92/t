import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box, Input, Button, Spacer,  FormLabel 
  } from "@chakra-ui/react"
import { useContext, useState, useEffect } from "react";
import { Web3Context } from "web3-hooks"
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react"
import { DappContext } from "../../Dapp"
import { ethers } from "ethers";
import { CircularProgress } from "@chakra-ui/react"
import { storeAddress } from "../../contracts/Store"
import {useDisclosure} from "@chakra-ui/react"
import {useRef} from "react"



const Sell = ({nft}) => {
  const [web3State] = useContext(Web3Context)
  
  const [loading, setLoading] = useState(false)
  const { handleSubmit } = useForm();
  const toast = useToast()
  const TXT = useContext(DappContext)
  const [value, setValue] = useState()

  const handleSubmitButton = async () => {
    try {
      setLoading(true)
      const tx = await TXT.listNFT(storeAddress , nft.id, ethers.utils.parseEther(value))
      const network = web3State.networkName.toLowerCase()
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`
      toast({title: 'Confirmed transaction',
            render: () => (
              <Box color="white" p={3} bg="green.500" rounded={20}>
                  <p style={{fontWeight: "bold", fontSize: "20px"}}>Transaction sent successfully !</p><br />You can view your transaction pending at hash :<br /><a target="blank" href={link}>{tx.hash}</a>
                </Box>),
            duration: 9000,
            isClosable: true,
      })
      await tx.wait()
    } catch (e) {
      toast({
          title: 'Error',
          description: `${e.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // si simpleStorage est pas null alors
    if (TXT) {
      const cb = (owner, spender, value) => {
        if(spender === web3State.account.toLowerCase()){
           toast({
            title: 'New approval',
            description: `You are now allowed to spend ${ethers.utils.formatEther(value)}  from ${owner}`,
            status: 'info',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        } else if (owner.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: 'Approved',
            description: `You have allowed ${spender} to spend ${ethers.utils.formatEther(value)} from your wallet`,
            status: 'info',
            position: 'top-right',
            duration: 9000,
            isClosable: true,
          })
        }
      }

      // ecouter sur l'event DataSet
      TXT.on('Approval', cb)
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
      TXT.off('Approval', cb)
      }
    }
  }, [TXT, toast, web3State.account])
  const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  return (<>
    <Button mt={3} ref={btnRef} onClick={onOpen}>
    Sell IT 
  </Button>

    <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
          <form onSubmit={handleSubmit(handleSubmitButton)} m={2}>
          <FormLabel>Price</FormLabel>
            <ModalCloseButton />
            <ModalBody>
            <Input onChange={(e) => setValue(e.target.value)} placeholder="Amount in ETH"  mb="5" isRequired/>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" colorScheme="teal" variant="solid" size="lg" m={2} mb={3} disabled={loading || nft.isApprove}>{loading ? (<><CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" /><Spacer /><p>Sending...</p></>) : `${value ? "List for " + value + " ETH" : "List"}`}</Button>
              <Button colorScheme="teal" onClick={onClose}>Close</Button>
            </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

    </>
  );
};

export default Sell;