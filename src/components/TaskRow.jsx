import React from "react";
import "./TaskList.css";

export const TaskRow = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4">
      {/* Task Details */}
      <div className="flex flex-col gap-2">
        <span
          className={`px-2 py-1 text-sm font-medium rounded-full ${
            task.priority === 'High Priority'
              ? 'bg-red-100 text-red-600'
              : task.priority === 'Medium Priority'
              ? 'bg-yellow-100 text-yellow-600'
              : 'bg-green-100 text-green-600'
          }`}
        >
          {task.priority}
        </span>
        <p className="text-gray-700 font-semibold">
          <span className="font-bold">Place: </span>
          {task.place}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Date: </span>
          {task.date}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Time: </span>
          {task.time}
        </p>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

// Helper functions to calculate styles dynamically
const calculateTop = (priority) => {
  switch (priority) {
    case "High Priority":
      return "10px";
    case "Medium Priority":
      return "20px";
    case "Low Priority":
      return "30px";
    default:
      return "0px";
  }
};

const getPriorityClass = (priority) => {
  switch (priority) {
    case "High Priority":
      return "bg-red-500";
    case "Medium Priority":
      return "bg-yellow-500";
    case "Low Priority":
      return "bg-green-500";
    default:
      return "";
  }
};
