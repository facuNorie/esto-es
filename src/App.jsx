import logo from './logo.png'
import Header from './components/header'
import Projects from './components/projects'
import { Box, Divider } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from './context/context'
import ProjectForm from './components/project_form'

function App() {
  const { showSection } = useContext(AppContext)
  return (
    <main>
      <Box p={1}>
        <img src={logo} alt='Logo Estoes' style={{ height: '30px' }} />
      </Box>
      <Divider />
      <Header />
      <Box
        sx={{
          backgroundColor: '#F0F2F5',
          height: '100vh',
          padding: '32px',
        }}
      >
        {showSection ? <Projects /> : <ProjectForm />}
      </Box>
    </main>
  )
}

export default App
