import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import {
  CONNECTED_STATUS,
  connectWallet,
  getCurrentWalletConnected,
} from '../../../../utils/interact'
import BaseCard from '../../../BaseCard'

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
    <BaseCard
      title={' MetaMask Wallet Connection'}
      actionButtonProps={{
        isProgressing: connectedStatus === CONNECTED_STATUS.CONNECTING,
        onClick: handleConnectClick,
        children: 'Connect to Wallet',
      }}
    >
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
    </BaseCard>
  )
}

export default WalletConnectCard
