import React from 'react';

function TaskItem({ task, index, toggleComplete, editTask, removeTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className={`task-circle ${task.completed ? 'checked-circle' : ''}`} onClick={() => toggleComplete(index)}>
        {task.completed && '✔'}
      </span>
      <div className="task-content">
        <span className="task-text" onClick={() => editTask(index)}>
          {task.completed ? <del>{task.text}</del> : task.text}
        </span>
        <span className="task-desc" onClick={() => editTask(index)}>
          {task.completed ? <del>{task.description}</del> : task.description}
        </span>
      </div>
      <button className="btn btn-delete" onClick={() => removeTask(index)}>
        ✖
      </button>
    </li>
  );
}

export default TaskItem;
