import Header from "./components/Header.js";
import { Tasks } from "./components/Tasks.js";
import { useState } from "react";
import AddTask from "./components/AddTask.js";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: " Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: " Feb _th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: " Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  // Add Task
  const addTask = (task) => {
    console.log(task);
  };
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleRemider = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <>
      <div className="container">
        <Header title={"joe"} />
        <AddTask onAdd={addTask} />
        {tasks.length === 0 ? (
          " No Tasks To Show"
        ) : (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider} />
        )}{" "}
      </div>
    </>
  );
}

export default App;
