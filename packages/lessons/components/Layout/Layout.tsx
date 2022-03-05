import AppBar from '@mui/material/AppBar'
import { Container, Typography, Toolbar, Box } from '@mui/material'
import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Lessons
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        sx={{
          paddingTop: 4,
        }}
      >
        {children}
      </Container>
    </Box>
  )
}

export default Layout
