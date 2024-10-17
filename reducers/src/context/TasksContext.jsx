import { useContext, useReducer } from "react";
import React from "react";
import TodoReducer from "../reducers/TodoReducer";
import {
  deleteTask,
  openForm,
  newTask,
  completeTask,
  showList,
} from "../actions/TodoActions";

const AppContext = React.createContext();

const initialState = {
  tasks: [
    {
      id: 1,
      title: "test task 1",
      description: "Test task 1 description",
    },
    {
      id: 2,
      title: "test task 2",
      description: "Test task 2 description",
    },
    {
      id: 3,
      title: "test task 3",
      description: "Test task 3 description",
    },
  ],
  isOpen: false,
  showCompleted: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const handleForm = (formStatus) => {
    dispatch(openForm(formStatus));
  };

  const addTask = (data) => {
    dispatch(newTask(data));
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  const finishedTask = (id) => {
    dispatch(completeTask(id));
  };

  const toggleShowCompleted = (listStatus) => {
    dispatch(showList(listStatus));
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleForm,
        addTask,
        removeTask,
        finishedTask,
        toggleShowCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
