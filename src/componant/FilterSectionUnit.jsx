import { useRef, useState } from "react";
import useFilter from "../hooks/useFilter";

const FilterSectionUnit = ({ Dataset, title, limit }) => {
  const [filter, setFilter] = useFilter();
  const [initialData, setinitialData] = useState(Dataset.slice(0, limit));
  const GetColorRef = useRef();

  const SelectedData = (value) => {
    console.log("value", value);
    setFilter((pre) => {
      const temp = { ...pre };
      temp[title] = value;
      return temp;
    });
  };

  const HandleClickEvent = () => {
    if (GetColorRef.current.innerText === "+ More Color") {
      setinitialData((pre) => {
        const temp = [...pre];
        const newMoreColor = temp.concat(Dataset.slice(limit));
        GetColorRef.current.innerText = "- Less";
        return newMoreColor;
      });
    } else {
      setinitialData((pre) => {
        const temp = [...pre];
        const Less = temp.slice(0, limit);
        GetColorRef.current.innerText = "+ More Color";
        return Less;
      });
    }
  };
  return (
    <div>
      <div className="w-full p-2">
        <h1 className="text-left text-lg font-semibold">{title}</h1>
        <div
          className={`${
            title == "Category"
              ? "w-full grid grid-cols-1 lg:grid-cols-1 mt-2"
              : "w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2"
          }`}
        >
          {initialData.map((uniqData, index) => {
            return (
              <div
                key={index}
                className="flex w-full gap-1 mt-1 cursor-pointer"
                onClick={(e) => SelectedData(e.target.id)}
              >
                <CommanFilter
                  uniqData={uniqData}
                  filterData={filter}
                  title={title}
                />
              </div>
            );
          })}
        </div>
        <p
          ref={GetColorRef}
          onClick={HandleClickEvent}
          className="text-base font-bold cursor-pointer mt-2"
        >
          + More Color
        </p>
      </div>
    </div>
  );
};

export default FilterSectionUnit;

const CommanFilter = ({ uniqData, filterData, title }) => {
  console.log("sadadadasd", filterData.color);
  console.log("cccc", uniqData[1].name);
  return (
    <>
      <div
        className={`${
          filterData.color == uniqData[1].name
            ? "w-fit h-fit border-[2px] border-gray-800 rounded-full p-1"
            : "w-fit h-fit border-[0.5px] border-gray-600 rounded-full p-1"
        }`}
      >
        {title === "color" ? (
          <div
            className={`${uniqData[1].code}  w-[17px] h-[17px] border-[0.5px]  rounded-full`}
            id={uniqData[1].name}
          />
        ) : (
          <div
            className={`filterData.color == uniqData[1].name w-[17px] h-[17px] border-[0.5px] border-white rounded-full`}
            id={uniqData[1].name}
          />
        )}
      </div>

      <p>{uniqData[1].name}</p>
    </>
  );
};
