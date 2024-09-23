import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  // Load tasks from localStorage when the component is mounted
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addOrEditTask = () => {
    if (newTask.trim() && newDescription.trim()) {
      if (editingTaskIndex !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editingTaskIndex] = { text: newTask, description: newDescription, completed: false };
        setTasks(updatedTasks);
        setEditingTaskIndex(null); // End editing
      } else {
        setTasks([...tasks, { text: newTask, description: newDescription, completed: false }]);
      }
      setNewTask("");
      setNewDescription("");
    }
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setNewTask(taskToEdit.text);
    setNewDescription(taskToEdit.description);
    setEditingTaskIndex(index);  // Begin editing
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h2 className="title">To-Do List 📋</h2>
        <TaskForm
          newTask={newTask}
          newDescription={newDescription}
          setNewTask={setNewTask}
          setNewDescription={setNewDescription}
          addOrEditTask={addOrEditTask}
          isEditing={editingTaskIndex !== null}
        />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          editTask={editTask}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
}

export default App;
