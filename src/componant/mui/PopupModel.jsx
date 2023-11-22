import { Modal } from "@mui/material";
import HomeCard from "../homecomponant/HomeCard";
import FilterSectionUnit from "../FilterSectionUnit";
import { useColor } from "../../context/ColorContext";
import { useState } from "react";

const mTab = ["color", "size", "category", "price"];

const PopupModel = ({ open, handleClose }) => {
  const [filterColor, setFilterColor] = useColor();
  const [selectTab, setSelecTab] = useState(mTab);

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
              {selectTab === "color" ? (
                <div>
                  <FilterSectionUnit
                    Dataset={Object.entries(filterColor.Color)}
                    title={"color"}
                    limit={10}
                    isMobile={true}
                  />
                </div>
              ) : selectTab == "size" ? (
                <div>
                  <FilterSectionUnit
                    Dataset={Object.entries(filterColor.Size)}
                    title={"size"}
                    limit={8}
                    isMobile={true}
                  />
                </div>
              ) : selectTab == "category" ? (
                <div>test3</div>
              ) : selectTab == "price" ? (
                <div>test4</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PopupModel;
