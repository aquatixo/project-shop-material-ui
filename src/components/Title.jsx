import { Typography } from '@mui/material'
import React from 'react'

const Title = ({title}) => {
  return (
    <Typography 
    variant="h4"
    align="center"
    fontWeight={600}
    sx={{
      // textTransform: 'uppercase',
      letterSpacing: '2px',
      color: 'black',
      // borderBottom: '3px solid #ddd',
      // paddingBottom: '8px',
      marginTop: '24px',
      marginBottom: '24px',
    }}
    >
      {title}
    </Typography>
  )
}

export default Title