import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import useItems from "./hooks/useItems";

const List = ({ item }) => {
  const [items, setItems] = useItems();

  const editItem = () => {
    console.log("edit");
  };
  const deleteItem = (id) => {
    // console.log("delete");
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      const url = `http://localhost:5000/items/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        })
      );
    }
  };

  return (
    <div className="align-items-center flex row d-flex w-1/3 p-3 text-2xl mx-auto bg-primary my-3 text-white">
      <div className="p-1 px-5 text-green-300 text-3xl ">
        <input type="checkbox" className="h-8 w-8" />
      </div>
      <div>
        <h2>{item.name}</h2>
      </div>
      <div
        onClick={editItem}
        className="p-1 px-5 text-green-300 text-3xl hover:text-yellow-500 "
      >
        <FiEdit />
      </div>
      <button
        onClick={() => deleteItem(item._id)}
        className="p-1 px-5 text-red-300 text-3xl hover:text-red-500"
      >
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
};

export default List;
