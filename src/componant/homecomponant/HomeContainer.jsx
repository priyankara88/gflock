import { useState } from "react";
import { useColor } from "../../context/ColorContext";
import useFilter from "../../hooks/useFilter";
import { Box, Slider } from "@mui/material";

const HomeContainer = () => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  const ColorChange = (event) => {
    setFilter((pre) => {
      const temp = { ...pre };
      if (event.target.id != "") {
        temp["color"] = event.target.id;
      }
      return temp;
    });
  };

  const SizeChange = (id) => {
    setFilter((pre) => {
      const temp = { ...pre };
      temp["size"] = id;
      return temp;
    });
  };

  const ChangeCategory = (id) => {
    setFilter((pre) => {
      const temp = { ...pre };
      temp["category"] = id;
      return temp;
    });
  };

  return (
    <div className="w-full">
      {/* container break into two parts  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[20%_80%] ">
        <div className="w-full">
          <ColorFilter onclick={ColorChange} />
          <hr />
          <FilterSize onChange={SizeChange} />
          <hr />
          <CategoryFIlter onChange={ChangeCategory} />
          <hr />
          <PriceFilter />
        </div>
        <div className="w-full bg-slate-800">container</div>
      </div>
    </div>
  );
};

export default HomeContainer;
// Color Componant
const ColorFilter = ({ onclick }) => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  const newColor = Object.entries(filterColor.Color);

  return (
    <div className="w-full p-2">
      <h1 className="text-left text-lg font-semibold">Color</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2">
        {/* left color */}
        {newColor.map((iColor, index) => {
          return (
            <div
              key={index}
              className="flex w-full gap-1 mt-1"
              onClick={onclick}
            >
              <div className="flex w-fit  h-fit p-1 border-2 border-indigo-500 rounded-full items-center justify-center">
                <div
                  className={`${iColor[1].code} w-[20px] h-[20px] border-2  rounded-full`}
                  id={iColor[1].name}
                />
              </div>

              <p>{iColor[1].name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// End Color Componant

// Sized Componant
const FilterSize = ({ onChange }) => {
  const [filterColor, setFilterColor] = useColor();
  const newSize = Object.entries(filterColor.Size);
  return (
    <div className="w-full p-2 ">
      <h1 className="text-left text-lg font-semibold">Size</h1>
      <div className="grid gap-1 w-full mt-2  grid-cols-1 lg:grid-cols-[50%_50%] ">
        {newSize.map((ele, index) => (
          <div
            className="flex gap-1 mt-2"
            key={index}
            onChange={(e) => onChange(e.target.id)}
          >
            <div className=" flex w-fit h-fit rounded-full p-1 hover:border-2   border-indigo-500 items-center">
              <input
                name="radio"
                id={ele[1]}
                className="w-[20px] h-[20px] border-2  rounded-full"
                type="radio"
              />
            </div>
            <p>{ele[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// End Sized Componant

//Category Componant
const CategoryFIlter = ({ onChange }) => {
  const [filterColor, setFilterColor] = useColor();
  const iCategory = Object.entries(filterColor.Category);
  return (
    <div className="w-full mt-2 p-2">
      <h1 className="text-left text-lg font-semibold">Category</h1>
      <div className="grid grid-cols-1 lg:grid-col-[50%_50%]">
        {iCategory.map((ele) => (
          <div
            className="flex gap-1 mt-2"
            key={ele[0]}
            onChange={(e) => onChange(e.target.id)}
          >
            <div className="flex w-fit h-fit p-1 border-2 border-indigo-500 rounded-full">
              <input
                name="Category"
                type="radio"
                id={ele[1]}
                className="w-[20px] h-[20px] p-1 border-2 rounded-full"
              />
            </div>
            <p>{ele[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//End Category Componant

//Price Componant

const PriceFilter = () => {
  const [filter, setFilter] = useFilter();
  const [price, setPrice] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setPrice(newValue);
    setFilter((pre) => {
      const temp = { ...pre };

      console.log("price", price[0]);
      temp["price"] = `${price[0] + "-" + price[1]} `;
      return temp;
    });
  };

  const valuetext = (valuetext) => {
    console.log("valuetext", valuetext);
    return valuetext;
  };

  return (
    <div className="p-2 w-full">
      <div className="text-left text-lg font-semibold">Price Range (LKR)</div>
      <div className="flex p-3">
        <Box sx={{ width: 300 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </div>
  );
};
