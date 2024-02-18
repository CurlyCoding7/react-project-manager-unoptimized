import React, { useState } from 'react'
import TodoItem from './TodoItem';

const Todo = () => {
    const [task, setTask] = useState("");
    const [taskArr, setTaskArr] = useState([]);

    const handleChange = (e) => {
        e.target.value !== "" ?
            setTask(e.target.value)
            : alert("Please add task");
        

    }

    const handleAdd = () => {
        setTaskArr(prevTasks => [...prevTasks, task])
        setTask("");
    }

    const handleDelete = (index) => {
        const filteredArr = taskArr.filter((val, i) => {
            return i !== index;
        });


        setTaskArr(filteredArr);
    }
  return (
    <div className='todo'>
         <h2>Tasks</h2>
         <input type="text" id="add-todo" value={task} onChange={handleChange} />
         <button onClick={handleAdd}>Add</button>

         {
            taskArr.map((item, index) => {
                return <TodoItem key={index} task={item} index={index} handleDelete={handleDelete}/>
            })
         }
    </div>
  )
}

export default Todo