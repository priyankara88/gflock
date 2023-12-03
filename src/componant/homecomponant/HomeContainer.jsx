import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import FilterSection from "../FilterSection";
import { ItemFetch } from "../../libs/shoppingitem";
import { useCurrence } from "../../context/Currancycontext";
import ItemAddModel from "./ItemAddModel";

const HomeContainer = () => {
  return (
    <div className="w-full px-[70px] mt-4">
      {/* container break into two parts  */}
      <div className={`w-full grid grid-cols-1 md:grid-cols-[20%_80%]  `}>
        <FilterSection />
        <div className="w-full bg-white pl-4 ">
          <div className="w-full  grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {ItemFetch.map((ele, index) => {
              return (
                <Card
                  key={ele.productId}
                  itemId={ele.productId}
                  img={ele.productImage}
                  itemName={ele.productTitle}
                  price={ele.productPrice}
                  discountPrice={ele.productPrice}
                  productColor={ele.productcolor}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

const Card = ({
  itemId,
  img,
  itemName,
  price,
  discountPrice,
  productColor,
}) => {
  const [buttonflag, setbuttonFlag] = useState(false);
  const [heartflag, setHeartFlag] = useState(false);
  const [selectColor, setSelectedColor] = useState("");
  const [selectColorImg, setSelectedColorImg] = useState("");
  const [CurrancyRate, setCurrancyRate, slectedCurrancy, setSlectedCurrancy] =
    useCurrence();

  const [Nav, setNav] = useState(true);

  const [open, setOpen] = useState({
    open: false,
    itemId: "",
  });
  const handleOpen = (itemId) =>
    setOpen({
      open: true,
      itemId,
    });
  const handleClose = () =>
    setOpen({
      open: false,
    });

  console.log("productColor ele.productColor", CurrancyRate[slectedCurrancy]);

  const ColorWiseDress = (value, img) => {
    setSelectedColor(value);
    setSelectedColorImg(img);
  };

  return (
    <div className="w-full h-fit">
      <ItemAddModel open={open} handleClose={handleClose} />
      <div
        onClick={Nav ? () => console.log("ttttt") : null}
        onMouseOver={() => setbuttonFlag(true)}
        onMouseLeave={() => setbuttonFlag(false)}
        className="w-full relative  "
      >
        <img
          className="object-contain"
          src={selectColor == "" ? img : selectColorImg}
          alt="img"
        />
        <div className="w-full h-full absolute flex justify-end top-1 right-1">
          <div
            onMouseOver={() => setHeartFlag(true)}
            onMouseLeave={() => setHeartFlag(false)}
            className="cursor-pointer flex items-center justify-center w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full hover:bg-gray-100 bg-gray-50 opacity-80"
          >
            <CiHeart
              className={`${
                heartflag == true
                  ? "text-2xl border-1 text-orange-400"
                  : "text-2xl"
              }`}
            />
          </div>

          <div
            id={itemId}
            className=" flex w-full h-full absolute top-0 left-0 flex-col items-center justify-end  "
          >
            <button
              onClick={() => {
                handleOpen(itemId);
              }}
              onMouseOver={() => setNav(false)}
              onMouseLeave={() => {
                setNav(true);
              }}
              className={`${
                buttonflag == true
                  ? "block cursor-pointer mb-10 px-5 py-1 bg-red-500 rounded-md opacity-80 font-semibold"
                  : "hidden cursor-pointer mb-10 px-5 py-1 bg-red-500 rounded-md opacity-80 font-semibold"
              }   `}
            >
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
      <p className="mt-2">{itemName}</p>
      <p className="mt-1 flex flex-col  md:flex-row text-base">
        {slectedCurrancy}
        {(price * CurrancyRate[slectedCurrancy]).toFixed(2)}
        <span className="line-through text-xs">
          {slectedCurrancy}

          {(discountPrice * CurrancyRate[slectedCurrancy]).toFixed(2)}
        </span>
      </p>
      <div className="w-full flex mt-2 gap-1 cursor-pointer">
        {/* bg-green-500 */}
        {productColor.map((ele, index) => {
          return (
            <div
              key={index}
              className={`${
                selectColor == ele.name
                  ? "w-[25px] h-[25px] flex rounded-full border-2 border-blue-700  items-center justify-center"
                  : "w-[25px] h-[25px] flex rounded-full border-2  items-center justify-center"
              }`}
              onClick={() => ColorWiseDress(ele.name, ele.image)}
            >
              <div
                key={ele.id}
                className={`${ele.code} w-[17px] h-[17px] rounded-full`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
