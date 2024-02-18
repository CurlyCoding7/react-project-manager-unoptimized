import { useState } from "react";
import Details from "./Details";
import Sidebar from "./Sidebar";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSelectedProject, setShowSelectedProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const [projects, setProjects] = useState([{
    "title": "Title",
    "description": "Description",
    "due_date": "date"
  }]);

  const handleCreateProject = () => {
    setShowAddForm(true);
}

const handleCancelProject = () => {
  setShowAddForm(false);
  setShowSelectedProject(false)
}

const handleShowProject = (project) => {
  setShowAddForm(false);
  setShowSelectedProject(true)
  setSelectedProject(project);
}

const handleSaveProject = (title, description, due_date) => {

  const newProject = {
    "title": title,
    "description": description,
    "due_date": due_date
  }

  setProjects([...projects, newProject])
  setShowAddForm(false)


}
  return (
    <div className="main-container">
      <Sidebar handleAddProject={handleCreateProject} projects={projects} setShowSelectedProject={setShowSelectedProject} handleShowProject={handleShowProject}/>
      <Details handleCreateProject={handleCreateProject} showAddForm={showAddForm} handleSaveProject={handleSaveProject} 
      showSelectedProject={showSelectedProject} handleCancelProject={handleCancelProject} selectedProject={selectedProject} />
    </div>
  );
}

export default App;
