import { useState } from 'react'
import { Typography, Box, Card } from '@mui/material'
import { getLatestBlock } from '../../../utils'
import ProgressButton from '../../ProgressButton'

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
    <Card sx={{ p: 4 }}>
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: 'text.secondary',
            fontWeight: '700',
          }}
        >
          Latest Block Number
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ fontSize: 18 }}>
        Block number: {latestBlock}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: 4,
        }}
      >
        <ProgressButton isProgressing={progressing} onClick={handleClick}>
          Get Latest Block Number
        </ProgressButton>
      </Box>
    </Card>
  )
}

export default LatestBlockCard
