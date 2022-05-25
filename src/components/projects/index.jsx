import { Box, TextField, Divider, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import ProjectItem from '../project_item'

import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export default function Projects() {
  const { projects } = useContext(AppContext)
  const [inputFilter, setInputFilter] = React.useState('')
  const handleInput = (e) => {
    setInputFilter(e.target.value)
  }
  return (
    <Box>
      <Box sx={{ marginBottom: '10px' }} px={1}>
        <TextField
          fullWidth
          color='error'
          type='text'
          label='search...'
          onChange={handleInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

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
            let toCompare = item?.projectName?.toLowerCase()
            if (inputFilter.length === 0)
              return <ProjectItem key={item.id} item={item} />
            else if (toCompare.includes(inputFilter.toLowerCase())) {
              return <ProjectItem key={item.id} item={item} />
            } else return <span></span>
          })}
        </Box>
      </Box>
    </Box>
  )
}
