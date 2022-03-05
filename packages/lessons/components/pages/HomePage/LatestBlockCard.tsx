import { useState } from 'react'
import { Typography, Box, Button, Card } from '@mui/material'
import { getLatestBlock } from '../../../utils'

const LatestBlockCard = () => {
  const [latestBlock, setLatestBlock] = useState<string>(
    'Click Button to get Latest Block Number'
  )

  const handleClick = async () => {
    const latestBlock = (await getLatestBlock()).toString()

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
        {latestBlock}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: 4,
        }}
      >
        <Button variant="contained" onClick={handleClick}>
          Get Latest Block Number
        </Button>
      </Box>
    </Card>
  )
}

export default LatestBlockCard
