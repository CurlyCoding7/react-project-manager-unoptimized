import React from 'react'

const Sidebar = ({handleAddProject, projects, handleShowProject}) => {
  return (
    <div className='sidebar'>
        <h1>Your Projects</h1>
        <button onClick={handleAddProject}>+ Add Project</button>
        {
            projects.map((item, idx) => {
                return <button key={idx} onClick={() => handleShowProject(item)} >{item.title}</button>
            })
        }
    </div>
  )
}

export default Sidebar