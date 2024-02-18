import React from 'react'
import img from "./assets/no-projects.png"

const NoProject = ({handleCreateProject}) => {
  return (
    <div className='no-project'>
        <img src={img} alt="no-projects" />
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <button onClick={handleCreateProject}>Create new project</button>
    </div>
  )
}

export default NoProject