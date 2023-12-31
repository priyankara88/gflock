import { useRef, useState } from "react";
import useFilter from "../hooks/useFilter";

const FilterSectionUnit = ({ Dataset, title, limit, isMobile }) => {
  const [filter, setFilter] = useFilter();
  const [initialData, setinitialData] = useState(Dataset.slice(0, limit));
  const GetColorRef = useRef();
  console.log("valuerrrrrrrrrrr", isMobile);
  const SelectedData = (value) => {
    setFilter((pre) => {
      const temp = { ...pre };
      temp[title] = value;
      return temp;
    });
  };
  //test
  const HandleClickEvent = () => {
    if (GetColorRef.current.innerText === "+ View more") {
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
        GetColorRef.current.innerText = "+ View more";
        return Less;
      });
    }
  };
  return (
    <div>
      <div className="w-full p-2">
        <h1
          className={`${
            isMobile == true ? "hidden" : "text-left text-lg font-semibold mb-4"
          }`}
        >
          {title}
        </h1>
        <div
          className={`${
            title == "category"
              ? "w-full grid grid-cols-1 lg:grid-cols-1 mt-2"
              : `${
                  isMobile == true
                    ? "w-full grid grid-cols-2 lg:grid-cols-[50%_50%] mt-2"
                    : "w-full grid grid-cols-1 lg:grid-cols-[50%_50%] mt-2"
                }`
          }`}
        >
          {initialData.map((uniqData, index) => {
            return (
              <div
                key={index}
                id={uniqData.id}
                className="flex w-full gap-2 mt-2 cursor-pointer"
                onClick={(e) => SelectedData(e.target.id)}
              >
                <CommanFilter
                  uniqData={uniqData}
                  filterData={filter}
                  title={title}
                  mobile={isMobile}
                />
              </div>
            );
          })}
        </div>
        <p
          ref={GetColorRef}
          onClick={HandleClickEvent}
          className="text-base font-bold cursor-pointer mt-2 text-[10px]"
        >
          + View more
        </p>
      </div>
    </div>
  );
};

export default FilterSectionUnit;

const CommanFilter = ({ uniqData, filterData, title, mobile }) => {
  console.log("filterData.size", filterData.size);
  console.log("uniqData[1].name", uniqData[1].name);
  return (
    <>
      <div
        id={uniqData[1].name}
        className={`${
          filterData.color == uniqData[1].name
            ? "w-fit h-fit border-[2px] border-blue-700 rounded-full p-1"
            : "w-fit h-fit border-[0.5px] border-gray-600 rounded-full p-1"
        }`}
      >
        {title === "color" ? (
          <div
            className={`${uniqData[1].code}  w-[17px] h-[17px] border-[0.5px]  rounded-full`}
            id={uniqData[1].name}
          />
        ) : title === "size" ? (
          <div
            className={`${
              filterData.size === uniqData[1].name
                ? "w-[17px] h-[17px] border-[0.5px] rounded-full bg-slate-500 opacity-80 "
                : "w-[17px] h-[17px]   rounded-full "
            }  `}
            id={uniqData[1].name}
          />
        ) : title === "category" ? (
          <div
            className={`${
              filterData.category === uniqData[1].name
                ? "w-[17px] h-[17px] border-[0.5px]  rounded-full bg-slate-500"
                : "w-[17px] h-[17px]   rounded-full "
            }  `}
            id={uniqData[1].name}
          />
        ) : (
          ""
        )}
      </div>

      <p id={uniqData[1].name} className="hover:text-gray-400">
        {uniqData[1].name}
      </p>
    </>
  );
};
