import React, { useContext, useState } from 'react'
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Box,
  Button,
} from '@mui/material'
import { AppContext } from '../../context/context'
import SelectInput from './SelectInput'

export default function ProjectForm() {
  const { addProject } = useContext(AppContext)
  const [projectManager, setProjectManager] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [enabled, setEnabled] = useState('')
  const [projectName, setProjectName] = useState('')
  const [description, setDescription] = useState('')
  return (
    <Box
      sx={{ bgcolor: 'white', boxShadow: 2, borderRadius: 1 }}
      width='60%'
      m='auto'
      display='flex'
      flexDirection='column'
      p={6}
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
          onClick={() => {
            addProject(
              projectName,
              description,
              projectManager,
              assignedTo,
              enabled
            )
            setProjectName('')
            setDescription('')
            setEnabled('')
            setProjectManager('')
            setAssignedTo('')
          }}
        >
          Create project
        </Button>
      </div>
    </Box>
  )
}
