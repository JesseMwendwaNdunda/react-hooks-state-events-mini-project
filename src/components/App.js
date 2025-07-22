import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  // state for all tasks
  const [tasks, setTasks] = useState(TASKS);

  // state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // filter tasks based on selected category
  const tasksToDisplay = tasks.filter(function (task) {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  // delete a task by text match
  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter(function (task) {
      return task.text !== taskText;
    });
    setTasks(updatedTasks);
  }

  // add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // change selected category
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>

      {/* filter buttons */}
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* form to add a new task */}
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />

      {/* task list */}
      <TaskList
        tasks={tasksToDisplay}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

