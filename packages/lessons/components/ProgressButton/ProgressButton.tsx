import {
  Button,
  ButtonProps,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material'

export interface ProgressButtonProps extends ButtonProps {
  isProgressing?: boolean
}

const ProgressButton = (inProps: ProgressButtonProps): JSX.Element => {
  const { children, isProgressing = false, ...props } = inProps

  return (
    <Box sx={{ ml: [0, 4], position: 'relative' }}>
      <Button variant="contained" {...props}>
        <Typography
          sx={{
            visibility: isProgressing ? 'hidden' : 'visible',
          }}
        >
          {children}
        </Typography>
      </Button>
      {isProgressing && (
        <CircularProgress
          size={24}
          sx={{
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
          }}
        />
      )}
    </Box>
  )
}

export default ProgressButton
