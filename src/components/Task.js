import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";

const Task = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-beyond-57135.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="text-center">
      <div>
        <h2 className="text-5xl font-bold">Todo List</h2>
      </div>

      <div>
        {items.map((item) => (
          <TaskList key={item._id} item={item}></TaskList>
        ))}
      </div>
    </div>
  );
};

export default Task;
