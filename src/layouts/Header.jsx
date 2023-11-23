import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";
import { useCurrence } from "../context/Currancycontext";
import { CountryFlag } from "../libs/shoppingitem";

const MenueTitle = [
  {
    name: "Shop-Now",
    value: "Shop Now",
  },
  {
    name: "Single-Product",
    value: "SingleProduct",
  },
  {
    name: "Contact-Us",
    value: "Contact Us",
  },
  {
    name: "New-Arrival",
    value: "New Arrival",
  },
];

const Header = () => {
  const [displayCurrency, setDisplayCurrency] = useState(false);
  const { pathname } = useLocation();
  const [CurrancyRate, setCurrancyRate, slectedCurrancy, setSlectedCurrancy] =
    useCurrence();

  const [CHangeCurrancy, setCHangeCurrancy] = useState("LKR");
  const [ChangeFlag, setChangeFlag] = useState("LKR");

  const DisplayCurrancy = () => {
    if (displayCurrency == true) {
      setDisplayCurrency(false);
    } else {
      setDisplayCurrency(true);
    }
  };

  const ChangeCurrence = (currancy, flag) => {
    setCHangeCurrancy(currancy);
    setChangeFlag(flag);
    // hide currancy dropdown
    setDisplayCurrency(false);
    //set selected currancy to drop down
    setSlectedCurrancy(currancy);
  };

  return (
    <div className=" sticky top-0 left-0 w-full bg-black p-5 text-orange-500 z-[100]">
      <div className="flex w-full">
        {/* MEnue Left Side */}
        <div className="flex items-center gap-x-6">
          <GiHamburgerMenu className="lg:hidden text-[25px]" />
          <div className="  hidden lg:block ">
            <nav className="flex gap-3 font-bold border-bt border-b-orange-500">
              {MenueTitle.map((ele) => {
                return (
                  <Link
                    className={`${
                      pathname === `/${ele.name}`
                        ? "text-white border-b-4 border-orange-500"
                        : "text-orange-500"
                    }`}
                    key={ele.name}
                    to={`/${ele.name}`}
                  >
                    {ele.value}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        <div className="flex-1  max-lg:hidden " />
        {/* MEnue Right Side */}
        <div className="flex items-center gap-x-2">
          <div className="flex w-[200px] bg-white items-center rounded-full px-3 py-2">
            <MdSearch className="text-[25px]" />
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none  text-xs"
            />
          </div>
          <div className="flex-1 block lg:block" />
        </div>
        <div className="flex-1 lg:hidden" />

        <div className="relative flex items-center justify-center  gap-3 ">
          {displayCurrency === true ? (
            <div className="absolute w-full h-full mr-20 mt-28">
              {CountryFlag.map((ele, index) => {
                return (
                  <div
                    id={index}
                    onClick={() => ChangeCurrence(ele.currency, ele.flag)}
                    key={index}
                    className="cursor-pointer pl-4 pt-1 pb-1 hover:bg-white pr-2 gap-2 flex flex-row bg-gray-500/50 border-2 border-b-gray-500/80  "
                  >
                    <img src={ele.flag} alt="" />
                    <p className="  text-base text-black font-semibold">
                      {ele.currency}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          <div
            onClick={DisplayCurrancy}
            className=" w-full flex flex-row gap-1 items-center justify-center"
          >
            <div>
              {ChangeFlag == "LKR" ? (
                <img
                  src="https://kellyfelder-revamp.s3.ap-southeast-1.amazonaws.com/web/icons/LKR.png"
                  alt="sl"
                />
              ) : (
                <img src={ChangeFlag} alt="sl" />
              )}
            </div>
            <div className="text-base font-semibold text-white cursor-pointer">
              {CHangeCurrancy == "LKR" ? "LKR" : CHangeCurrancy}
            </div>
            <div className="cursor-pointer text-2xl text-white">
              {displayCurrency === false ? (
                <TiArrowSortedDown />
              ) : (
                <TiArrowSortedUp />
              )}
            </div>
          </div>
          <div>
            <BsCart3 className="text-[25px] cursor-pointer" />
            <div className="w-fit flex absolute rounded-full bg-red-600 text-white h-fit  pr-1 pl-1 -top-2 ml-4 justify-center items-center cursor-pointer">
              3
            </div>
          </div>
          <div>
            <BiSolidUser className="text-[25px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
