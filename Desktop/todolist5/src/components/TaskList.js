import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, editTask, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          index={index}
          task={task}
          toggleComplete={toggleComplete}
          editTask={editTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
