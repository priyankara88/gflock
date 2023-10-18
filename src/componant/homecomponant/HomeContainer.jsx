import { useState } from "react";
import { useColor } from "../../context/ColorContext";
import useFilter from "../../hooks/useFilter";
import { Box, Slider } from "@mui/material";
import { ItemFetch } from "../../libs/shoppingitem";
import { BsHeart } from "react-icons/bs";

const HomeContainer = () => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  const ItemCardData = Object.entries(ItemFetch);

  // console.log("ItemCardData", ItemCardData[0].productcolor);

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
    <div className="w-full px-[70px]">
      {/* container break into two parts  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[20%_80%]  ">
        <div className="w-full">
          <ColorFilter onclick={ColorChange} />
          <hr />
          <FilterSize onChange={SizeChange} />
          <hr />
          <CategoryFIlter onChange={ChangeCategory} />
          <hr />
          <PriceFilter />
        </div>
        <div className="w-full bg-white">
          <div className="w-full m-4 grid grid-cols-1 max-md:grid-cols-[50%_50%] lg:grid-cols-[25%_25%_25%_25%]">
            {ItemCardData.map((ele, index) => (
              <ItemCard
                key={index}
                title={ele[1].productTitle}
                price={ele[1].productPrice}
                img={ele[1].productImage}
                stock={ele[1].productStock}
              />
            ))}
          </div>
        </div>
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

  console.log("newColor", filter.color);

  return (
    <div className="w-full p-2">
      <h1 className="text-left text-lg font-semibold">Color</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2">
        {/* left color */}
        {newColor.map((iColor, index) => {
          return (
            <div
              key={index}
              className="flex w-full gap-1 mt-1 cursor-pointer"
              onClick={onclick}
            >
              <div
                className={`${
                  iColor[1].name === filter.color
                    ? "border-2 border-rose-950 bg-white"
                    : "border border-indigo-300"
                }flex w-fit  h-fit p-1  rounded-full items-center justify-center`}
              >
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
                className="w-[20px] h-[20px] border-2  rounded-full cursor-pointer"
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
            className="flex gap-1 mt-2 cursor-pointer"
            key={ele[0]}
            onChange={(e) => onChange(e.target.id)}
          >
            <div className="flex w-fit h-fit p-1 border-none border-2 border-indigo-500 rounded-full ">
              <input
                name="Category"
                type="radio"
                id={ele[1]}
                className="w-[20px] h-[20px] p-1 border-2 rounded-full cursor-pointer"
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
  const [price, setPrice] = useState([1000, 100000]);
  const handleChange = (event, newValue) => {
    setFilter((pre) => {
      const temp = { ...pre };

      console.log("price", price[0]);
      temp["price"] = `${newValue[0]} - ${newValue[1]}`;
      return temp;
    });

    setPrice(newValue);
  };

  return (
    <div className="p-2 w-full">
      <div className="text-left text-lg font-semibold">Price Range (LKR)</div>
      <div className="flex p-3">
        <Box sx={{ width: 300 }}>
          <Slider
            min={100}
            max={100000}
            value={price}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
};

//End Price Container

//Item Card

const ItemCard = ({ title, price, img, stock }) => {
  return (
    <div className="w-full relative  ">
      <div className="w-full group">
        <div className="flex relative items-center justify-center w-60 h-[308px] mt-2 bg-slate-300">
          <img src={img} alt="test" />
          <ItemAddButton />
          <LastItemMsg prostk={stock} />
        </div>
        <div className="w-[40px] h-[40px] p-1 absolute top-5 right-12 z-40 cursor-pointer flex item-center justify-center border bg-stone-100 hover:bg-white rounded-full">
          <BsHeart className=" flex text-center justify-center mt-[5px] text-[20px] text-black hover:text-orange-500" />
        </div>
      </div>
      <p className="mt-1">{title}</p>
      <p className="mt-1">{price}</p>

      <div
        className="flex p-1 items-center w-fit h-fit
       border-2 rounded-full mt-1"
      >
        <div className="w-[20px] h-[20px] border-2 rounded-full bg-yellow-400"></div>
      </div>
    </div>
  );
};

//End Item Card

//Item Card Add to box button
const ItemAddButton = () => {
  return (
    <div className=" hidden group-hover:flex cursor-pointer w-full flex flex-col items-center justify-center bottom-12 left-0 absolute z-90">
      <div className="w-44 h-10 text-center flex items-center justify-center  text-black border-2 font-semibold bg-white opacity-95">
        ADD TO BAG
      </div>
    </div>
  );
};

//End
//Item Card Add to box button

//
//Item Card Last Item Card
const LastItemMsg = ({ prostk }) => {
  return (
    <div className="w-full absolute ">
      <div
        className={`${
          prostk <= "3"
            ? "flex w-20 h-8 bg-green-500 opacity-95  items-center justify-center text-white"
            : "hidden"
        }  `}
      >
        <p className="text-sm font-semibold">
          {prostk === "1" ? "Last Item" : `Last ${prostk} Items`}
        </p>
      </div>
    </div>
  );
};
//End Item Card Last Item Card
