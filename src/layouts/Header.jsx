import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className=" sticky top-0 left-0 w-full bg-black p-5 text-orange-500 z-[100]">
      <div className="flex w-full">
        {/* MEnue Left Side */}
        <div className="flex items-center gap-x-6">
          <GiHamburgerMenu size={17} />
          <p className="">Shop Now</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>

        {/* MEnue Right Side */}
        <div className="flex items-center gap-x-2">
          <div className="flex-1 hidden lg:block " />
          <div className="flex w-[200px] bg-white items-center rounded-full px-3 py-2">
            <MdSearch size={17} />
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none  text-xs"
            />
          </div>

          <div className="flex-1 md:block" />
          <div className="relative">
            <BsCart3 size={17} />
            <div className=" absolute rounded-full bg-red-700 -right-3 -top-3 p-1 px-[1px] py-[1px] w-4 h-4 ">
              3
            </div>
          </div>
          <BiSolidUser size={17} />
        </div>
      </div>
    </div>
  );
};

export default Header;
