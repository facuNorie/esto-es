import logo from './logo.png'
import Header from './components/header'
import Projects from './components/projects'
import { Box, Divider } from '@mui/material'

function App() {
  return (
    <main>
      <Box p={1}>
        <img src={logo} alt='Logo Estoes' style={{ height: '30px' }} />
      </Box>
      <Divider />
      <Header />
      <Projects />
    </main>
  )
}

export default App
