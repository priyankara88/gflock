import { createContext, useContext, useState } from "react";

export const ColorContext = createContext({});

const Color = [
  { name: "Pink", code: "bg-pink-500" },
  { name: "Purple", code: "bg-purple-700" },
  { name: "Red", code: "bg-red-700" },
  { name: "Yellow", code: "bg-yellow-500" },
  { name: "Green", code: "bg-green-500" },
  { name: "Orange", code: "bg-orange-500" },
  { name: "Lime", code: "bg-lime-600" },
  { name: "Teal", code: "bg-teal-500" },
  { name: "Stone", code: "bg-stone-700" },
  { name: "Gray", code: "bg-gray-500" },
  { name: "Blue", code: "bg-blue-700" },
  { name: "Amber", code: "bg-amber-700" },
];

const Size = [
  { ID: 1, name: "UK 4" },
  { ID: 2, name: "UK 6" },
  { ID: 3, name: "UK 10" },
  { ID: 4, name: "UK 12" },
  { ID: 5, name: "UK 14" },
  { ID: 6, name: "UK 16" },
  { ID: 7, name: "UK 18" },
  { ID: 8, name: "UK 20" },
  { ID: 9, name: "24" },
  { ID: 10, name: "25" },
  { ID: 11, name: "26" },
  { ID: 12, name: "27" },
  { ID: 13, name: "28" },
  { ID: 14, name: "29" },
  { ID: 15, name: "30" },
  { ID: 16, name: "31" },
  { ID: 17, name: "32" },
  { ID: 18, name: "33" },
  { ID: 19, name: "34" },
  { ID: 20, name: "35" },
  { ID: 21, name: "S" },
  { ID: 22, name: "M" },
  { ID: 23, name: "L" },
  { ID: 24, name: "XL" },
  { ID: 25, name: "XXL" },
  { ID: 26, name: "XS" },
  { ID: 27, name: "Free Size" },
];

const Category = [
  { ID: 1, name: "Work Wear" },
  { ID: 2, name: "Dresses" },
  { ID: 3, name: "Denims" },
  { ID: 4, name: "Tops" },
  { ID: 5, name: "Casuals" },
  { ID: 6, name: "Gift her" },
  { ID: 7, name: "Vouchers" },
  { ID: 8, name: "Pants" },
  { ID: 9, name: "Linen" },
  { ID: 10, name: "Premium Dresses" },
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
