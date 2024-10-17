import { Task } from "../task/Task";
import AddTask from "../addTask/AddTask";
import { useGlobalContext } from "../../context/TasksContext";

export const Tasks = () => {
  const { tasks, isOpen, handleForm, showCompleted, toggleShowCompleted } =
    useGlobalContext();
  const filteredTasks = tasks.filter((task) =>
    showCompleted ? task.completed : !task.completed
  );

  console.log(tasks);
  return (
    <div className="container">
      <h2 className="m-5 text-center">Tasks list</h2>
      <div className="text-center m-5">
        {!isOpen && (
          <button
            className="btn btn-primary"
            onClick={() => {
              handleForm(true);
            }}
          >
            Add task
          </button>
        )}
      </div>
      <div className="text-center m-5">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            toggleShowCompleted(!showCompleted);
          }}
        >
          {showCompleted ? "Neatlikta" : "Atlikta"}
        </button>
      </div>
      <div className="text-center m-5">
        {isOpen ? (
          <AddTask />
        ) : (
          <ul className="list-group">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, i) => (
                <Task
                  key={i}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  completed={task.completed}
                />
              ))
            ) : (
              <p>No tasks to show.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
