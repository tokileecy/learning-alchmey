import { Box, Grid } from '@mui/material'
import Layout from '../../Layout'
import LatestBlockCard from './LatestBlockCard'

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
          <Grid item sm={6}>
            <LatestBlockCard />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default HomePage