import { useState } from "react";

import { CiHeart } from "react-icons/ci";
import FilterSection from "../FilterSection";

const HomeContainer = () => {
  return (
    <div className="w-full px-[70px] mt-4">
      {/* container break into two parts  */}
      <div className={`w-full grid grid-cols-1 md:grid-cols-[20%_80%]  `}>
        <FilterSection />
        <div className="w-full bg-white ">
          <div className="w-full p-4 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

const Card = () => {
  const [buttonflag, setbuttonFlag] = useState(false);
  const [heartflag, setHeartFlag] = useState(false);

  console.log("heartflag", heartflag);

  return (
    <div className="w-full h-fit">
      <div
        onMouseOver={() => setbuttonFlag(true)}
        onMouseLeave={() => setbuttonFlag(false)}
        className="w-full relative  "
      >
        <img
          className="object-contain"
          src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/gallery/5a50c1c513a74437baaf583d77810f3f7790ef05.jpg"
          alt="img"
        />
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
      <p className="mt-2">Nori Strappy Frill Dress</p>
      <p className="mt-1">
        LKR 3136.50<span className="line-through">LKR 3690.50</span>
      </p>
      <div className="w-full flex mt-2 gap-1 cursor-pointer">
        <div className="w-[25px] h-[25px] flex rounded-full border-2  items-center justify-center">
          <div className="w-[17px] h-[17px] rounded-full bg-green-500"></div>
        </div>
        <div className="w-[25px] h-[25px] flex rounded-full border-2  items-center justify-center">
          <div className="w-[17px] h-[17px] rounded-full bg-amber-500"></div>
        </div>
        <div className="w-[25px] h-[25px] flex rounded-full border-2  items-center justify-center">
          <div className="w-[17px] h-[17px] rounded-full bg-rose-800"></div>
        </div>
      </div>
    </div>
  );
};
