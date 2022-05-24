import { Box, Typography, IconButton, Popover, Button } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

export default function ProjectItem({ item }) {
  console.log(item)
  const [showOptions, setShowOptions] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  return (
    <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      borderBottom='1px solid gray'
      p={1}
    >
      <div>
        <Typography>{item.projectName}</Typography>
        <Typography sx={{ color: 'text.secondary' }} variant='subtitle2'>
          {item.date.toLocaleString()}
        </Typography>
      </div>

      <Typography>{item.projectManager}</Typography>
      <Typography>{item.assignedTo} </Typography>
      <Typography>{item.enabled}</Typography>
      <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        <Box display='flex' flexDirection='column'>
          <Button sx={{ color: 'text.secondary' }} startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button sx={{ color: 'text.secondary' }} startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Box>
      </Popover>
    </Box>
  )
}
