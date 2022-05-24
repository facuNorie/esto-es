import React, { useState } from 'react'

export const AppContext = React.createContext()

export default function Provider(props) {
  const [showSection, setShowSection] = useState(true)
  const [projects, setProjects] = useState([])

  const addProject = (
    projectName,
    description,
    projectManager,
    assignedTo,
    enabled
  ) => {
    setProjects([
      ...projects,
      {
        id: new Date().getTime(),
        projectName: projectName,
        description: description,
        projectManager: projectManager,
        assignedTo: assignedTo,
        enabled: enabled,
        date: new Date(),
      },
    ])
  }
  return (
    <AppContext.Provider
      value={{ showSection, setShowSection, addProject, projects }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
