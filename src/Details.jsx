import React, { useState } from 'react'
import img from "./assets/no-projects.png"
import AddNewProject from './AddNewProject'
import NoProject from './NoProject'
import ProjectDetails from './ProjectDetails'

const Details = ({handleCreateProject, showAddForm, handleSaveProject, showSelectedProject, handleCancelProject, selectedProject}) => {
  
  let layout;

  if(showAddForm){
    layout = <AddNewProject handleSaveProject={handleSaveProject} handleCancelProject={handleCancelProject}/>
  }
  else if(showSelectedProject){
    layout = <ProjectDetails title={selectedProject.title} dueDate={selectedProject.dueDate} description={selectedProject.description}/> 
  }else{
    layout = <NoProject handleCreateProject={handleCreateProject}/>
  }


  return (
    <div className='details'>  
    {
        // showAddForm ? <AddNewProject handleSaveProject={handleSaveProject}/> :  <NoProject handleCreateProject={handleCreateProject}/> 
        layout

    } 
       {/* <ProjectDetails title="Title" dueDate="25/5/2024" description="This is description."/> */}
    </div>
  )
}

export default Details