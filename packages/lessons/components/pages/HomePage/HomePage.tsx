import { Box, Grid } from '@mui/material'
import Layout from '../../Layout'
import LatestBlockCard from './Cards/LatestBlockCard'
import WalletConnectCard from './Cards/WalletConnectCard'
import TransfersCard from './Cards/TransfersCard'

const HomePage = () => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            sm={8}
            sx={{
              display: 'grid',
              gridTemplateAreas: '1fr',
              gridAutoRows: 'minmax(250px, auto)',
              gap: 4,
            }}
          >
            <LatestBlockCard />
            <WalletConnectCard />
            <TransfersCard />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default HomePage
