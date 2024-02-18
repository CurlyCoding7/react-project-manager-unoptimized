import React from 'react'

const TodoItem = ({task, index, handleDelete}) => {
  return (
    <div className='todo-item'>
        <span>{task}</span>
        <button onClick={() => handleDelete(index)}>Clear</button>
    </div>
  )
}

export default TodoItem