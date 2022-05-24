import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useContext } from 'react'
import { AppContext } from '../../context/context'

export default function Header() {
  const { setShowSection, showSection } = useContext(AppContext)
  return (
    <Box display='flex' justifyContent='space-between' p={1}>
      <Typography>My projects</Typography>
      <Button
        size='small'
        color='error'
        variant='contained'
        startIcon={<AddIcon />}
        onClick={() => setShowSection(!showSection)}
      >
        Add project
      </Button>
    </Box>
  )
}
