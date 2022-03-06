import { useState } from 'react'
import { Typography } from '@mui/material'
import { getLatestBlock } from '../../../../utils/base'
import BaseCard from '../../../BaseCard'

const LatestBlockCard = () => {
  const [progressing, setProgressing] = useState(false)
  const [latestBlock, setLatestBlock] = useState<string>('')

  const handleClick = async () => {
    setProgressing(true)

    const latestBlock = (await getLatestBlock()).toString()

    setProgressing(false)

    setLatestBlock(latestBlock)
  }

  return (
    <BaseCard
      title={'Latest Block Number'}
      actionButtonProps={{
        children: 'Get Latest Block Number',
        isProgressing: progressing,
        onClick: handleClick,
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 18 }}>
        Latest Block: {latestBlock}
      </Typography>
    </BaseCard>
  )
}

export default LatestBlockCard
