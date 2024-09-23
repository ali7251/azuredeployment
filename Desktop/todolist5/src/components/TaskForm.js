import React from 'react';

function TaskForm({ newTask, newDescription, setNewTask, setNewDescription, addOrEditTask, isEditing }) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Add your task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Add description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="btn btn-add" onClick={addOrEditTask}>
        {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default TaskForm;
