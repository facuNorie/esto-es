import {
  Box,
  Typography,
  IconButton,
  Popover,
  Button,
  Avatar,
  Chip,
  Grid,
  Modal,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import React, { useContext } from 'react'
import { AppContext } from '../../context/context'

export default function ProjectItem({ item }) {
  const { deleteProject, setToEdit } = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleDelete = () => {
    let response = confirm('Are you sure you want to delete this project?')
    if (response) deleteProject(item.id)
    else setAnchorEl(null)
  }

  return (
    <Grid container borderBottom='1px solid gray' p={2}>
      <Grid item xs={10} md={3}>
        <Typography>{item.projectName}</Typography>
        <Typography sx={{ color: 'text.secondary' }} variant='subtitle2'>
          Creation date: {item.date.toLocaleString()}
        </Typography>
      </Grid>

      <Grid
        item
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems='center'
        xs={3}
      >
        <Avatar
          sx={{ width: 24, height: 24, fontSize: '1rem', marginRight: '8px' }}
        >
          {item.projectManager.split('', 1)}
        </Avatar>
        <Typography>{item.projectManager}</Typography>
      </Grid>
      <Grid
        item
        display='flex'
        alignItems='center'
        textAlign='center'
        xs={10}
        md={3}
      >
        <Avatar
          sx={{ width: 24, height: 24, fontSize: '1rem', marginRight: '8px' }}
        >
          {item.assignedTo.split('', 1)}
        </Avatar>
        <Typography>{item.assignedTo} </Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: { xs: 'none', md: 'inline' } }}>
        <Chip label={item.enabled}></Chip>
      </Grid>
      <Grid item xs={2} md={1}>
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
            <Button
              sx={{ color: 'text.secondary' }}
              startIcon={<EditIcon />}
              onClick={() => {
                setToEdit(item.id)
              }}
            >
              Edit
            </Button>
            <Button
              sx={{ color: 'text.secondary' }}
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Popover>
      </Grid>
    </Grid>
  )
}
