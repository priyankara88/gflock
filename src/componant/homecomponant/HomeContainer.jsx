import { useColor } from "../../context/ColorContext";
import useFilter from "../../hooks/useFilter";

const HomeContainer = () => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();
  const ColorChange = (event) => {
    setFilter((pre) => {
      const temp = { ...pre };
      if (event.target.id != "") {
        temp["color"] = event.target.id;
      }
      return temp;
    });
  };

  return (
    <div className="w-full">
      {/* container break into two parts  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[20%_80%] ">
        <div className="w-full">
          <ColorFilter onclick={ColorChange} />
        </div>
        <div className="w-full">container</div>
      </div>
    </div>
  );
};

export default HomeContainer;

const ColorFilter = ({ onclick }) => {
  const [filter, setFilter] = useFilter();
  const [filterColor, setFilterColor] = useColor();

  return (
    <div className="w-full p-2">
      <h1 className="text-left text-lg font-semibold">Color</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2">
        {/* left color */}
        {filterColor.map((iColor, index) => {
          return (
            <div
              key={index}
              className="flex w-full gap-1 mt-1"
              onClick={onclick}
            >
              <div className="flex w-fit  h-fit p-1 border-2 border-indigo-500 rounded-full items-center justify-center">
                <div
                  className={`${iColor.code} w-[20px] h-[20px] border-2  rounded-full`}
                  id={iColor.name}
                />
              </div>

              <p>{iColor.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
