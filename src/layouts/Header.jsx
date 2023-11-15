import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

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
        <div className="flex-1 lg:hidden"></div>
        <div className="relative flex items-center justify-center gap-3 ">
          <BsCart3 className="text-[25px]" />
          <div className=" flex absolute rounded-full bg-red-700 w-4 h-4 -top-1 justify-center items-center">
            3
          </div>
          <BiSolidUser className="text-[25px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
