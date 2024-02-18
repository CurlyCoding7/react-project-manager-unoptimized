import React from 'react'
import Todo from './components/Todo'

const ProjectDetails = ({title, description, dueDate}) => {
  return (
    <div className='project-details'>
        <h1>{title}</h1>
        <span>{dueDate}</span>
        <p>{description}</p>
        <hr />
        <Todo/>
    </div>
  )
}

export default ProjectDetails