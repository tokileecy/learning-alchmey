import { Box, Card, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  CONNECTED_STATUS,
  connectWallet,
  getCurrentWalletConnected,
} from '../../../utils/interact'
import ProgressButton from '../../ProgressButton'

const WalletConnectCard = () => {
  const [address, setAddress] = useState('')

  const [connectedStatus, setConnectedStatus] = useState<CONNECTED_STATUS>(
    CONNECTED_STATUS.NOT_CONNECTED
  )

  const handleConnectClick = async () => {
    setConnectedStatus(CONNECTED_STATUS.CONNECTING)

    const res = await connectWallet()

    setAddress(res.address)
    setConnectedStatus(res.status)
  }

  useEffect(() => {
    const getWalletConnected = async () => {
      setConnectedStatus(CONNECTED_STATUS.CONNECTING)

      const res = await getCurrentWalletConnected()

      setAddress(res.address)
      setConnectedStatus(res.status)
    }

    getWalletConnected()
  }, [])

  return (
    <Card
      sx={{
        p: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'text.secondary',
          fontWeight: '700',
        }}
      >
        MetaMask Wallet Connection
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          fontWeight: '700',
          width: ['100%', 'initial'],
        }}
      >
        Connected Status: {connectedStatus}
      </Typography>
      <Typography>Address: {address}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: 4,
          flexGrow: 1,
        }}
      >
        <ProgressButton
          isProgressing={connectedStatus === CONNECTED_STATUS.CONNECTING}
          onClick={handleConnectClick}
        >
          Connect to Wallet
        </ProgressButton>
      </Box>
    </Card>
  )
}

export default WalletConnectCard
