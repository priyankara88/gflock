import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import FilterSection from "../FilterSection";
import { ItemFetch } from "../../libs/shoppingitem";

const HomeContainer = () => {
  console.log("ItemFetch", ItemFetch);

  return (
    <div className="w-full px-[70px] mt-4">
      {/* container break into two parts  */}
      <div className={`w-full grid grid-cols-1 md:grid-cols-[20%_80%]  `}>
        <FilterSection />
        <div className="w-full bg-white ">
          <div className="w-full  grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {ItemFetch.map((ele, index) => {
              return (
                <Card
                  key={ele.productId}
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

const Card = ({ key, img, itemName, price, discountPrice, productColor }) => {
  const [buttonflag, setbuttonFlag] = useState(false);
  const [heartflag, setHeartFlag] = useState(false);
  const [selectColor, setSelectedColor] = useState("");

  console.log("productColor ele.productColor", productColor);

  const ColorWiseDress = (value) => {
    console.log("Target Value", value);
  };

  return (
    <div className="w-full h-fit">
      <div
        onMouseOver={() => setbuttonFlag(true)}
        onMouseLeave={() => setbuttonFlag(false)}
        className="w-full relative  "
      >
        <img className="object-contain" src={img} alt="img" />
        <div className="w-full h-full absolute flex justify-end top-1 right-1 z-10">
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
        </div>
        <div className=" flex w-full h-full absolute top-0 left-0 flex-col items-center justify-end  ">
          {buttonflag === true ? (
            <button className=" mb-10 px-5 py-1 bg-white rounded-md opacity-80 font-semibold ">
              ADD TO BAG
            </button>
          ) : (
            <button className=" hidden mb-10 px-5 py-1 bg-white rounded-md opacity-80 font-semibold ">
              ADD TO BAG
            </button>
          )}
        </div>
      </div>
      <p className="mt-2">{itemName}</p>
      <p className="mt-1">
        LKR {price}
        <span className="line-through">LKR {discountPrice}</span>
      </p>
      <div className="w-full flex mt-2 gap-1 cursor-pointer">
        {/* bg-green-500 */}
        {productColor.map((ele, index) => {
          return (
            <div
              key={index}
              className="w-[25px] h-[25px] flex rounded-full border-2  items-center justify-center"
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
