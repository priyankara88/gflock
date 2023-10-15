import { createContext, useContext, useState } from "react";

export const ColorContext = createContext({});

const ColorProvider = ({ children }) => {
  const [filterColor, setFilterColor] = useState([
    "Red",
    "Green",
    "Yellow",
    "Blue",
    "White",
    "Pink",
    "Black",
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
