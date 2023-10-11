import { TbFilterFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import useFilter from "../../hooks/useFilter";

const HomeCard = () => {
  const [filter, setFilter] = useFilter();

  return (
    <div className="w-full">
      <div className="bg-neutral-300 w-full p-5">
        <div className="w-full flex">
          <div className="text-white font-bold ">
            Dresses <span className="text-sm font-normal">(358 Products)</span>
          </div>
          <div className="flex-1" />
          <div className="flex justify-center items-center mt-2 text-slate-900 lg:hidden">
            <TbFilterFilled color="gray" />
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          <FilterButton />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;

const FilterButton = () => {
  return (
    <div>
      <div className="flex border border-gray-700 rounded-full py-0 px-2  font-semibold from-neutral-600 items-center">
        Size:UK4
        <div className="flex w-[15px] h-[15px] rounded-full bg-slate-500 hover:bg-slate-700 items-center">
          <IoClose className=" m-1 text-lg text-white " />
        </div>
      </div>
    </div>
  );
};
