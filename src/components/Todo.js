import React, { useEffect, useState } from "react";
import List from "./List";

const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  // console.log(inputItem);

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://sheltered-beyond-57135.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [items]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputItem(value);
  };

  const handlerAdd = () => {
    const newItem = { name: inputItem };

    if (!inputItem) {
      alert("Please type your list.");
    } else {
      fetch("https://sheltered-beyond-57135.herokuapp.com/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data);
        });
    }
  };

  return (
    <div className="text-center">
      <div>
        <h2 className="text-5xl font-bold">Todo List</h2>
      </div>
      <div className="my-10">
        <div class=" sm:w-full md:w-full-xl md:mx-auto sm:mx-auto items-center form-control w-full max-w-xl">
          <input
            value={inputItem}
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xl text-xl"
          />
        </div>
        <div>
          <button onClick={handlerAdd} className="btn btn-primary text-xl my-5">
            Add to list
          </button>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <List key={item._id} item={item}></List>
        ))}
      </div>
    </div>
  );
};

export default Todo;
