import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  //const valor = useContext(TaskContext);
  //console.log(valor);
  /*return (
    <tr>
      <td>{task.title}</td>
      <td>
        <p>{task.description}</p>
      </td>
      <td>
        <p>
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
        </p>
      </td>
    </tr>
  );*/
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-b-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}
