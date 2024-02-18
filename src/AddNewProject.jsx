import React, { useState } from 'react'

const AddNewProject = ({handleSaveProject, handleCancelProject}) => {
    const [projectDetails, setProjectDetails] = useState({
        "title": "",
        "description": "",
        "due_date": ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProjectDetails({
            ...projectDetails,
            [name]: value,
          });
        
           //console.log(projectDetails);
    }

    const handleSave = (e) => {
      e.preventDefault();
        const {title, description, due_date} = projectDetails;

        handleSaveProject(title, description, due_date);

    }


  return (
    <form className='add-form' method='POST'>
        <button onClick={handleCancelProject}>Cancel</button>
        <button onClick={handleSave}>Save</button>
        <label htmlFor="title">Title</label>
        <input type="text" id='title' value={projectDetails.title} onChange={handleChange} name='title'/>

        <label htmlFor="description">Description</label>
        <input type="text" id='description' value={projectDetails.description} onChange={handleChange} name='description' />

        <label htmlFor="due-date">Due Date</label>
        <input type="date" id='due-date' value={projectDetails.due_date} onChange={handleChange} name='due_date' />
    </form>
  )
}

export default AddNewProject