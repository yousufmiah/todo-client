import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const List = ({ item }) => {
  const editItem = () => {
    console.log("edit");
  };
  const deleteItem = () => {
    console.log("delete");
  };

  return (
    <div className="align-items-center flex row d-flex w-1/3 p-3 text-2xl mx-auto bg-primary my-3 text-white">
      <div className="p-1 px-5 text-green-300 text-3xl ">
        <input type="checkbox" className="h-8 w-8" />
      </div>
      <div>
        <h2>{item}</h2>
      </div>
      <div onClick={editItem} className="p-1 px-5 text-green-300 text-3xl ">
        <FiEdit />
      </div>
      <div onClick={deleteItem} className="p-1 px-5 text-red-300 text-3xl ">
        <RiDeleteBin6Fill />
      </div>
    </div>
  );
};

export default List;
