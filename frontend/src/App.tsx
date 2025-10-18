import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => setRefresh(!refresh);

  return (
    <div className="container">
      <h1>CRUD de Tareas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <hr />
      <TaskList refresh={refresh} />
    </div>
  );
}

export default App;
