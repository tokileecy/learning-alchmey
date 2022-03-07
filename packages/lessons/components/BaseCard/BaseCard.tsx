import { ReactNode } from 'react'
import { Typography, Card, CardActions, CardContent } from '@mui/material'
import ProgressButton, { ProgressButtonProps } from '../ProgressButton'

export interface BaseCardProps {
  actionButtonProps?: ProgressButtonProps
  children?: ReactNode
  title?: ReactNode
}

const BaseCard = (props: BaseCardProps): JSX.Element => {
  const { actionButtonProps, title = '', children } = props

  return (
    <Card sx={{ p: 4 }}>
      <CardContent>
        <Typography
          variant="h4"
          sx={{
            color: 'text.secondary',
            fontWeight: '700',
          }}
        >
          {title}
        </Typography>
        {children}
      </CardContent>
      {actionButtonProps && (
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: 4,
          }}
        >
          <ProgressButton {...actionButtonProps} />
        </CardActions>
      )}
    </Card>
  )
}

export default BaseCard
