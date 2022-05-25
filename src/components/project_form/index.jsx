import React, { useContext, useEffect, useState } from 'react'
import { TextField, InputLabel, Box, Button } from '@mui/material'
import { AppContext } from '../../context/context'
import SelectInput from './SelectInput'

export default function ProjectForm() {
  const {
    addProject,
    editionMode,
    projectToEdit,
    editProject,
    setEditionMode,
    setShowSection,
  } = useContext(AppContext)
  const [projectManager, setProjectManager] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [enabled, setEnabled] = useState('')
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')

  const cleanInput = () => {
    setProjectName('')
    setDescription('')
    setEnabled('')
    setProjectManager('')
    setAssignedTo('')
  }

  const add = () => {
    addProject(projectName, description, projectManager, assignedTo, enabled)
    cleanInput()
  }
  const edit = () => {
    editProject(projectName, description, projectManager, assignedTo, enabled)
    cleanInput()
    setEditionMode(false)
    setTimeout(() => {
      setShowSection(true)
    }, 1000)
  }

  useEffect(() => {
    if (editionMode) {
      setProjectName(projectToEdit[0].projectName)
      setEnabled(projectToEdit[0].enabled)
      setProjectManager(projectToEdit[0].projectManager)
      setDescription(projectToEdit[0].description)
      setAssignedTo(projectToEdit[0].assignedTo)
    }
  }, [])

  return (
    <Box
      sx={{
        bgcolor: 'white',
        boxShadow: 2,
        borderRadius: 1,
        width: { xs: '95%', sm: '60%' },
        padding: { xs: 1, sm: 6 },
      }}
      m='auto'
      display='flex'
      flexDirection='column'
      component='form'
    >
      <Box mb={4}>
        <InputLabel id='projectName'>Project name</InputLabel>
        <TextField
          id='projectName'
          variant='outlined'
          fullWidth
          size='small'
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </Box>
      <Box mb={4}>
        <InputLabel id='description'>Description</InputLabel>
        <TextField
          autoComplete='off'
          id='description'
          variant='outlined'
          fullWidth
          value={description}
          size='small'
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <SelectInput
        projectManager={projectManager}
        setProjectManager={setProjectManager}
        options={['Walt Cosani', 'German Beder']}
      />
      <SelectInput
        projectManager={assignedTo}
        setAssignedTo={setAssignedTo}
        options={['Ignacio Truffa', 'Jazmin Badia']}
        assigned
      />
      <SelectInput
        projectManager={enabled}
        setEnabled={setEnabled}
        options={['Enabled', 'Disabled']}
        enabled
      />
      <div style={{ marginTop: '24px' }}>
        <Button
          color='error'
          variant='contained'
          disabled={
            assignedTo === '' ||
            enabled === '' ||
            projectManager === '' ||
            projectName === '' ||
            description === ''
              ? true
              : false
          }
          onClick={() => {
            editionMode ? edit() : add()
          }}
        >
          {editionMode ? 'Save changes' : 'Create project'}
        </Button>
      </div>
    </Box>
  )
}
