import { Box, Grid } from '@mui/material'
import Layout from '../../Layout'
import LatestBlockCard from './Cards/LatestBlockCard'
import WalletConnectCard from './Cards/WalletConnectCard'

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
          <Grid item sm={8}>
            <LatestBlockCard />
          </Grid>
          <Grid
            item
            sm={8}
            sx={{
              mt: 4,
            }}
          >
            <WalletConnectCard />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default HomePage
