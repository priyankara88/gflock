import { useColor } from "../../context/ColorContext";
import useFilter from "../../hooks/useFilter";

const HomeContainer = () => {
  return (
    <div className="w-full">
      {/* container break into two parts  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[20%_80%] ">
        <div className="w-full">
          <ColorFilter />
        </div>
        <div className="w-full">container</div>
      </div>
    </div>
  );
};

export default HomeContainer;

const ColorFilter = () => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  console.log("filterColor", filterColor);
  const ColorChange = () => {
    setFilter((pre) => {
      const temp = { ...pre };

      return temp;
    });
  };

  return (
    <div className="w-full p-2">
      <h1 className="text-left text-lg font-semibold">Color</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2">
        {/* left color */}
        <div className="flex w-full gap-1 mt-1" onClick={() => ColorChange}>
          <div className="flex w-[20px]  h-[20px] border-2 border-indigo-500 rounded-full items-center justify-center">
            <div className="w-[15px] h-[15px] border-2 border-white rounded-full bg-red-700" />
          </div>
          <p className="items-center">Red</p>
        </div>
        {/* right color */}
        <div className="flex w-full gap-1 mt-1">
          <div className="flex w-[20px]  h-[20px] border-2 border-indigo-500 rounded-full items-center justify-center">
            <div className="w-[15px] h-[15px] border-2 border-white rounded-full bg-red-700" />
          </div>
          <p className="items-center">Red</p>
        </div>
      </div>
    </div>
  );
};
