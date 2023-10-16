import { createContext, useContext, useState } from "react";

export const ColorContext = createContext({});

const Color = [
  { name: "Pink", code: "bg-pink-500" },
  { name: "Purple", code: "bg-purple-700" },
  { name: "Red", code: "bg-red-700" },
  { name: "Yellow", code: "bg-yellow-500" },
  { name: "Green", code: "bg-green-500" },
  { name: "Orange", code: "bg-orange-500" },
];

const Size = [
  "UK 4",
  "UK 6",
  "UK 8",
  "UK 10",
  "UK 12",
  "UK 14",
  "UK 16",
  "UK 20",
  "UK 18",
];

const Category = [
  "Work Wear",
  "Dresses",
  "Denims",
  "Tops",
  "Casuals",
  "Gift her",
  "Vouchers",
  "Pants",
  "Linen",
  "Premium Dresses",
];

const ColorProvider = ({ children }) => {
  const [filterColor, setFilterColor] = useState({
    Color,
    Size,
    Category,
  });
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
