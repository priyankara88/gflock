import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className=" sticky top-0 left-0 w-full bg-black p-5 text-orange-500 z-[100]">
      <div className="flex w-full justify-between">
        {/* MEnue Left Side */}
        <div className="flex items-center">
          <GiHamburgerMenu />
        </div>
        {/* MEnue Right Side */}
        <div className="flex items-center gap-x-2">
          <div className="flex w-[200px] items-center rounded-full px-3 py-2">
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none  text-xs"
            />
          </div>

          <BiSolidUser />
          <BsCart3 />
        </div>
      </div>
    </div>
  );
};

export default Header;
