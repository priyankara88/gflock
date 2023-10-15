import { createContext, useContext, useState } from "react";

export const ColorContext = createContext({});

const ColorProvider = ({ children }) => {
  const [filterColor, setFilterColor] = useState([
    { name: "Pink", code: "bg-pink-500" },
    { name: "Purple", code: "bg-purple-700" },
    { name: "Red", code: "bg-red-700" },
    { name: "Yellow", code: "bg-yellow-500" },
    { name: "Green", code: "bg-green-500" },
    { name: "Orange", code: "bg-orange-500" },
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
