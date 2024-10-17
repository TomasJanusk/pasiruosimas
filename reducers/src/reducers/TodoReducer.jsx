const TodoReducer = (state, action) => {
  switch (action.type) {
    case "Add task":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "Remove task":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "Open form":
      return {
        ...state,
        isOpen: action.payload,
      };
    case "Complete task":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "Show list":
      return {
        ...state,
        showCompleted: action.payload,
      };
    default:
      return state;
  }
};
export default TodoReducer;
