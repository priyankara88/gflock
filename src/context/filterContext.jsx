import { createContext, useState } from "react";

export const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState({
    color: "black",
    size: "uk 4",
    category: "Denim",
    price: "0-1000",
  });
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
