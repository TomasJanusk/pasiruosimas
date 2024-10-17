import React from "react";
import Article from "../article/Article";

const Tasks = ({ data }) => {
  return (
    <section className="p-4">
      <div className="container">
        <div className="row">
          {data.map((task) => (
            <Article
              key={task.id}
              title={task.title}
              description={task.desc}
              priority={task.priority}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
