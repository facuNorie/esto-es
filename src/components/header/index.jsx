import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useContext } from 'react'
import { AppContext } from '../../context/context'

export default function Header() {
  const { setShowSection, showSection, setEditionMode, editionMode } =
    useContext(AppContext)
  return (
    <Box display='flex' justifyContent='space-between' p={1}>
      <Typography variant='h6'>
        {showSection
          ? 'My Projects'
          : editionMode
          ? 'Edit project'
          : 'Add project'}
      </Typography>
      <Button
        size='small'
        color='error'
        variant='contained'
        startIcon={showSection ? <AddIcon /> : <ArrowBackIcon />}
        onClick={() => {
          setShowSection(!showSection)
          setEditionMode(false)
        }}
      >
        {showSection ? 'Add project' : 'Back'}
      </Button>
    </Box>
  )
}
