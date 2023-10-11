import { TbFilterFilled } from "react-icons/tb";

const HomeCard = () => {
  return (
    <div className="w-full">
      <div className="w-full h-20 bg-neutral-300 p-5 flex">
        <div className="text-white font-bold ">
          Dresses <span className="text-sm font-normal">(358 Products)</span>
        </div>
        <div className="flex-1" />
        <div className="flex justify-center items-center -mt-2 text-slate-900 lg:hidden">
          <TbFilterFilled color="gray" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
