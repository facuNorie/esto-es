import { Box, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import ProjectItem from '../project_item'

export default function Projects() {
  const { projects } = useContext(AppContext)

  return (
    <Box>
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
        <Box sx={{ bgcolor: 'white' }} display='flex' flexDirection='column'>
          {projects.map((item) => {
            return <ProjectItem key={item.id} item={item} />
          })}
        </Box>
      </Box>
    </Box>
  )
}
