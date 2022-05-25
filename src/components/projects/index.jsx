import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import ProjectItem from '../project_item'

export default function Projects() {
  const { projects } = useContext(AppContext)

  return (
    <Box>
      <Box sx={{ boxShadow: 1 }}>
        <Box component='span' sx={{ display: { xs: 'none', md: 'block' } }}>
          <Grid container p={2} sx={{ bgcolor: 'grey.50' }}>
            <Grid item xs={3}>
              <Typography>Project Info</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Project Manager</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography>Assigned to</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>Status</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>Action</Typography>
            </Grid>
          </Grid>
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
