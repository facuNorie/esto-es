import React from 'react'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material'

export default function SelectInput({
  projectManager,
  enabled,
  assigned,
  options,
  setAssignedTo,
  setEnabled,
  setProjectManager,
}) {
  const handleChange = (e) => {
    if (enabled) setEnabled(e.target.value)
    else if (assigned) setAssignedTo(e.target.value)
    else setProjectManager(e.target.value)
  }
  return (
    <FormControl fullWidth sx={{ marginBottom: '8px' }}>
      <InputLabel id='selectPerson1' size='small'>
        {!enabled ? 'Select a person' : 'Enabled'}
      </InputLabel>
      <Select
        size='small'
        labelId='selectPerson1'
        id='selectPerson1'
        value={projectManager}
        label='Select a person'
        onChange={handleChange}
      >
        {options.map((option, i) => {
          return (
            <MenuItem value={option} key={i}>
              {option}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>
        {(enabled && 'Enabled') ||
          (assigned && ' Assigned to') ||
          'Project manager'}
      </FormHelperText>
    </FormControl>
  )
}
