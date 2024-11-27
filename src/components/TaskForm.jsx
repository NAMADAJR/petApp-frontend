import React, { useState } from 'react';
import './TaskList.css'

const TaskForm = ({ onAddTask, onCancel}) => {
 
  const [task, setTask] = useState({
    id: Date.now(),
    priority: 'Medium Priority',
    place: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name}: ${value}`);
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.place || !task.date || !task.time) {
      alert('All fields are required!');
      return;
    }
    onAddTask(task); // Pass the new task back to the parent component
    setTask({ id: Date.now(), priority: 'Medium Priority', place: '', date: '', time: '' });
  };

  return (
    <div className="task-form-modal">
      <form onSubmit={handleSubmit} className="task-form">
        <h3>Add New Task</h3>
        <label>
          Priority:
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
          </select>
        </label>
        <label>
          Place:
          <input type="text" name="place" value={task.place} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={task.date} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={task.time} onChange={handleChange} />
        </label>
        <button type="submit">Add Task</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TaskForm;
