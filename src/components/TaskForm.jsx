import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(newTask)
    createTask({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-white mb-3">Crea tu tarea:</h2>
        <input
          placeholder="Escribe tarea: "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Descripcion de la tarea: "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
