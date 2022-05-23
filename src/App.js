import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Task  from "./components/Task/Task";
import TaskApp from "./components/TaskApp";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import Tasks from "./components/Tasks/Tasks"

function App() {
  return <div>
    {/* Code Here */
    <>
    <TaskApp></TaskApp>
    <TaskHeader></TaskHeader>
    <AddTask></AddTask>
    <Tasks></Tasks>
    <Task></Task>
    </>
  }
  </div>;
}

export default App;
