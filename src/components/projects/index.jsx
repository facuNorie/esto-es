import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ProjectItem from '../project_item'

let number = [1, 2, 3, 4, 5]
export default function Projects() {
  return (
    <Box
      sx={{
        backgroundColor: '#F0F2F5',
        height: '100vh',
        padding: '32px',
      }}
    >
      <Box sx={{ boxShadow: 1 }}>
        <Box
          display='flex'
          justifyContent='space-around'
          p={1}
          sx={{ bgcolor: 'grey.50' }}
        >
          <Typography>Project Info</Typography>
          <Typography>Project Manager</Typography>
          <Typography>Assigen to</Typography>
          <Typography>Status</Typography>
          <Typography>Action</Typography>
        </Box>
        <Divider />
        <Box
          sx={{ bgcolor: 'white' }}
          display='flex'
          flexDirection='column'
          p={1}
        >
          {number.map((item) => {
            return <ProjectItem key={item} />
          })}
        </Box>
      </Box>
    </Box>
  )
}
