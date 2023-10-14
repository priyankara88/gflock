import { createContext, useContext, useState } from "react";

export const ColorContext = createContext({});

const ColorProvider = ({ children }) => {
  const [filterColor, setFilterColor] = useState([
    [
      { Color: "Red", age: 25 },
      { Color: "Green", age: 30 },
      { Color: "Blue", age: 35 },
      { Color: "White", age: 35 },
    ],
  ]);
  return (
    <ColorContext.Provider value={{ filterColor, setFilterColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;

export const useColor = () => {
  const { filterColor, setFilterColor } = useContext(ColorContext);
  return [filterColor, setFilterColor];
};
