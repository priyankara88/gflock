import { Modal } from "@mui/material";
import HomeCard from "../homecomponant/HomeCard";
import FilterSectionUnit from "../FilterSectionUnit";
import { useColor } from "../../context/ColorContext";
import { useState } from "react";

const mTab = ["color", "size", "category", "price"];

const PopupModel = ({ open, handleClose }) => {
  const [filterColor, setFilterColor] = useColor();
  const [selectTab, setSelecTab] = useState(mTab[0]);

  const tabHandler = (value) => {
    setSelecTab(value.innerHTML);
  };

  return (
    <div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <div className="w-full h-fit flex items-center justify-center  outline-none border-0 ">
            <div className="w-full  m-5  bg-white rounded-md">
              <HomeCard mobileFIlter={true} />
              <div className="w-full flex flex-row  ">
                {mTab.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      onClick={(e) => tabHandler(e.target)}
                      className={`${
                        selectTab == ele
                          ? "w-full flex items-center justify-center border-b-2 border-blue-500 text-blue-500 cursor-pointer bg-white py-2"
                          : "w-full flex items-center justify-center cursor-pointer bg-white py-2"
                      } `}
                    >
                      {ele}
                    </div>
                  );
                })}
              </div>

              <div
                className={`${
                  selectTab == mTab[0] ? "block bg-slate-300" : "hidden"
                }`}
              >
                <FilterSectionUnit
                  Dataset={Object.entries(filterColor.Color)}
                  title={"color"}
                  limit={10}
                  isMobile={true}
                />
              </div>

              <div
                className={`${
                  selectTab == mTab[1] ? "block bg-slate-300" : "hidden"
                }`}
              >
                <FilterSectionUnit
                  Dataset={Object.entries(filterColor.Size)}
                  title={"size"}
                  limit={8}
                  isMobile={true}
                />
              </div>

              <div
                className={`${
                  selectTab == mTab[2] ? "block bg-slate-300" : "hidden"
                }`}
              >
                <FilterSectionUnit
                  Dataset={Object.entries(filterColor.Category)}
                  title={"category"}
                  limit={6}
                  isMobile={true}
                />
              </div>
              {/*
              <div>test4</div> */}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PopupModel;
