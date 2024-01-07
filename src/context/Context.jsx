import React, { createContext, useState } from "react";

export const DataContext = createContext();
const Context = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowMore = (id) => {
    setShowMore((prev) => !prev);
    setSelectedItem(id);
  };
  return (
    <DataContext.Provider
      value={{ handleShowMore: handleShowMore, showMore: showMore, selectedItem: selectedItem }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default Context;
