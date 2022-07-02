import React, { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;
