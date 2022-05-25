import React, { useState } from 'react'

export const AppContext = React.createContext()

export default function Provider(props) {
  const [showSection, setShowSection] = useState(true)
  const [projects, setProjects] = useState([])
  const [editionMode, setEditionMode] = useState(false)
  const [projectToEdit, setProjectToEdit] = useState(null)

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

  const deleteProject = (id) => {
    setProjects((project) => project.filter((pr) => pr.id !== id))
  }

  const setToEdit = (id) => {
    setEditionMode(true)
    setShowSection(false)
    setProjectToEdit(projects.filter((pr) => pr.id === id))
  }

  const editProject = (
    projectName,
    description,
    projectManager,
    assignedTo,
    enabled
  ) => {
    projects.map((item) => {
      if (item.id === projectToEdit[0].id) {
        item.projectName = projectName
        item.description = description
        item.projectManager = projectManager
        item.assignedTo = assignedTo
        item.enabled = enabled
      }
    })
  }

  return (
    <AppContext.Provider
      value={{
        showSection,
        setShowSection,
        addProject,
        deleteProject,
        projects,
        editionMode,
        setEditionMode,
        setToEdit,
        editProject,
        projectToEdit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}
