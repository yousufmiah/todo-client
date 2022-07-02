import React, { useEffect, useState } from "react";
import List from "./List";
// import TaskList from "./TaskList";

const Task = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-beyond-57135.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);

  return (
    <div className="text-center">
      <div>
        <h2 className="text-5xl font-bold">Todo List</h2>
      </div>

      <div>
        {items.map((item) => (
          // <TaskList key={item._id} item={item}></TaskList>
          <List key={item._id} item={item}></List>
        ))}
      </div>
    </div>
  );
};

export default Task;
