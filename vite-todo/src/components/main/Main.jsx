import { useEffect, useState } from "react";
import AddTask from "../addTask/AddTask";
import Article from "../article/Article";
import Search from "../search/Search";
import Tasks from "../tasks/Tasks";

const Main = () => {
  const [addForm, setAddForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const handleTaskData = (data) => {
    setTasks((prevData) => {
      const updatedTasks = [data, ...prevData];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
    setAddForm(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredTasks = tasks.filter((task) => {
    return task.title.includes(searchTerm);
  });

  return (
    <>
      <header>
        <Search name="search" onSearch={handleInputChange} val={searchTerm}/>
        <Tasks data={filteredTasks} />
      </header>
      <section>
        <button onClick={() => setAddForm(true)}>Prideti nauja uzduoti</button>
        {addForm && <AddTask onSave={handleTaskData} />}
      </section>
      <main>
        {tasks.map((task) => (
          <Article
            key={task.id}
            title={task.title}
            description={task.desc}
            priority={task.priority}
          />
        ))}
      </main>
    </>
  );
};
export default Main;
