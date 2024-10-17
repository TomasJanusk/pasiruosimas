import { useState } from "react";

const AddTask = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    desc: "",
    priority: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      id: Math.random().toString(16).slice(2),
      [e.target.name]: e.target.value,
    });
  };

  const submithandler = (e) => {
    e.preventDefault();
    props.onSave(formData);
  };

  return (
    <form onSubmit={submithandler}>
      <div>
        <input
          type="text"
          placeholder="Pavadinimas"
          onChange={handleChange}
          value={formData.title}
          name="title"
        />
      </div>
      <div>
        <textarea
          tupe="text"
          placeholder="Aprasymas"
          onChange={handleChange}
          defaultValue={formData.desc}
          name="desc"
        ></textarea>
      </div>
      <div>
        <input
          type="text"
          placeholder="Prioritetas"
          onChange={handleChange}
          value={formData.priority}
          name="priority"
        />
      </div>
      <div>
        <button type="submit">Saugoti</button>
      </div>
    </form>
  );
};
export default AddTask;
