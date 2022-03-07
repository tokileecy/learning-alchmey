import BaseCard from '../../../BaseCard'
import {
  FormControl,
  Input,
  InputAdornment,
  TextField,
  Box,
  InputLabel,
} from '@mui/material'
import { useState, useEffect } from 'react'
import {
  CONNECTED_STATUS,
  getCurrentWalletConnected,
} from '../../../../utils/interact'

const TransfersCard = () => {
  // const [connectedStatus, setConnectedStatus] = useState<CONNECTED_STATUS>(
  //   CONNECTED_STATUS.NOT_CONNECTED
  // )

  const [address, setAddress] = useState('')
  const [targetAddress, setTargetAdress] = useState('')
  const [ethAmount, setEthAmount] = useState(0)
  // const [txHash, setTxHash] = useState('')

  const handleSendEth = async () => {
    if (window.ethereum === undefined) {
      console.error(`wallet`)
      return
    }

    const transactionParameters = {
      from: address,
      to: ethAmount,
      value: '0x29a2241af62c00',
      gasPrice: '0x09184e72a0',
      data: '0xlalapie',
      gas: '0x10710',
    }

    const txHash = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [transactionParameters],
    })

    console.log(txHash)
  }

  useEffect(() => {
    const getWalletConnected = async () => {
      // setConnectedStatus(CONNECTED_STATUS.CONNECTING)

      const res = await getCurrentWalletConnected()

      setAddress(res.address)
      // setConnectedStatus(res.status)
    }

    getWalletConnected()
  }, [])

  return (
    <BaseCard
      title="Transfer ETH"
      actionButtonProps={{
        children: 'Transfer ETH',
        onClick: handleSendEth,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          id="transfer_eth_wallet"
          label="Target Wallet"
          variant="standard"
          value={targetAddress}
          onChange={(e) => {
            setTargetAdress(e.target.value)
          }}
        />
        {/* <FormControl sx={{ mt: 3 }}>
          <InputLabel htmlFor="transfer_eth_amount">ETH Amount</InputLabel>
          <Input
            id="transfer_eth_amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            type="number"
            value={'0x111'}
            onChange={(e) => {
              setEthAmount(Number(e.target.value))
            }}
          ></Input>
        </FormControl> */}
      </Box>
    </BaseCard>
  )
}

export default TransfersCard
