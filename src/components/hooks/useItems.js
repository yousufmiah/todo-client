import React, { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  useEffect(() => {
    fetch("https://sheltered-beyond-57135.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;
