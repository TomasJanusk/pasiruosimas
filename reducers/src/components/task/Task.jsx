import { useGlobalContext } from "../../context/TasksContext";

export const Task = (props) => {
  const { removeTask, finishedTask } = useGlobalContext();

  return (
    <div className="container">
      <ul
        className="list-group-item"
        style={{
          textDecoration: props.completed ? "line-through" : "none",
        }}
      >
        <strong>{props.title}</strong>:{props.description}
        <button
          className="btn btn-danger"
          onClick={() => {
            removeTask(props.id);
          }}
        >
          Salinti
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            finishedTask(props.id);
          }}
        >
          {props.completed ? "Atlikta" : "Neatlikta"}
        </button>
      </ul>
    </div>
  );
};
