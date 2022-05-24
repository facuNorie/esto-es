import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
export default function Header() {
  return (
    <Box display='flex' justifyContent='space-between' p={1}>
      <Typography>My projects</Typography>
      <Button
        size='small'
        color='error'
        variant='contained'
        startIcon={<AddIcon />}
      >
        Add project
      </Button>
    </Box>
  )
}
