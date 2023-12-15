import { Modal } from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiRuler } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { ItemFetch } from "../../libs/shoppingitem";
import { useColor } from "../../context/ColorContext";
import { useRef } from "react";

const ItemAddModel = ({ open, handleClose }) => {
  const [filterColor, setFilterColor] = useColor();

  const ImgMiddleData = useRef();
  const ImgSlideData = useRef([]);

  console.log("ImgSlideData", ImgSlideData);

  const ImageChange = (id) => {
    console.log("Clicked ID", id);
  };
  return (
    <div>
      <Modal open={open.open} onClose={handleClose}>
        <div className="flex items-center justify-center mt-10 rounded-md">
          <div
            style={{ style: `${(window.innerHeight * 90) / 100}px` }}
            className="p-10 w-[70%] flex flex-col items-center justify-center bg-white "
          >
            <div className="w-full flex flex-col  ">
              <div className="w-full flex justify-end">
                <IoIosCloseCircleOutline
                  onClick={handleClose}
                  className="cursor-pointer hover:shadow-md text-2xl"
                />
              </div>

              <div className="w-full grid grid-cols-[20%_40%_40%]">
                {/* side image */}
                <div
                  style={{ height: `${(window.innerHeight * 70) / 100}px` }}
                  className="pl-4 pr-4 w-full  flex  flex-col overflow-y-auto overflow-x-hidden  bg-white"
                >
                  {ItemFetch.map((ele, index) => {
                    if (ele.productId == open.itemId) {
                      return (
                        <SlideImage
                          key={index}
                          Referance={ImgSlideData}
                          Middle={ImgMiddleData}
                          Image={ele.productcolor}
                          ImageChange={ImageChange}
                        />
                      );
                    }
                  })}
                </div>
                {/* Middle Image */}
                <div>
                  <div className="w-full h-full">
                    {ItemFetch.map((ele, index) => {
                      if (ele.productId == open.itemId) {
                        return (
                          <div
                            key={index}
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundImage: `url(${ele.productImage})`,
                              backgroundSize: "cover",
                            }}
                            className="bg-no-repeat bg-cover bg-top"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
                {/* Item details */}
                <div className="pl-4 ">
                  <div className="w-full flex flex-col">
                    {ItemFetch.map((ele, index) => {
                      if (ele.productId == open.itemId) {
                        return (
                          <div key={index}>
                            <p className="text-3xl">{ele.productDescription}</p>
                            <p className="text-lg">{ele.productDescription}</p>
                            <p className="text-2xl font-semibold mt-4">
                              LKR {ele.productPrice}
                            </p>
                          </div>
                        );
                      }
                    })}

                    <p>Color: Yellow</p>
                    <div className="mt-2 flex flex-row  gap-2">
                      <div className="cursor-pointer flex items-center justify-center w-6 h-6 p-[1px] rounded-full border-[0.5px] border-gray-500">
                        <div className="w-5 h-5 rounded-full bg-yellow-300" />
                      </div>

                      <div className="cursor-pointer flex items-center justify-center w-6 h-6 p-[1px] rounded-full border-[0.5px] border-gray-500">
                        <div className="w-5 h-5 rounded-full bg-red-600" />
                      </div>

                      <div className="cursor-pointer flex items-center justify-center w-6 h-6 p-[1px] rounded-full border-[0.5px] border-gray-500">
                        <div className="w-5 h-5 rounded-full bg-green-600" />
                      </div>
                    </div>
                    <div className="flex w-full gap-8 mt-4 ">
                      <p className="text-2xl">Size</p>
                      <div className="gap-1 flex text-lg">
                        <span className="">
                          <CiRuler />
                        </span>
                        <div className="font-semibold">Size Guide</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {/* {filterColor.Size.map((ele, index) => {
                        if (ele.ID == open.itemId) {
                          return (
                            <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                              <p>{ele.name}</p>
                            </div>
                          );
                        }
                      })} */}

                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>UK 2</p>
                      </div>
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>UK 5</p>
                      </div>
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>UK 8</p>
                      </div>
                    </div>

                    <div className="flex mt-6 gap-4">
                      <button className="bg-black text-white  px-10 py-2">
                        ADD TO BAG
                      </button>

                      <div className="cursor-pointer w-12 h-12 flex items-center justify-center bg-white border-[1px] border-black">
                        <CiHeart className="text-3xl text-black" />
                      </div>
                    </div>
                    <div className="cursor-pointer w-full mt-32 text-base font-semibold">
                      + View Full Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ItemAddModel;

const SlideImage = ({ Image, ImageChange, Referance, Middle }) => {
  console.log("sImage", Image.id);
  return (
    <>
      {Image.map((ele, index) => {
        return (
          <div
            key={ele.id}
            // onClick={() => ImageChange(ele.id)}
            style={{ backgroundImage: `url(${ele.image})` }}
            className="m-2 w-36 h-40 bg-cover bg-no-repeat bg-top cursor-pointer flex items-center justify-center p-1 hover:border-2 border-gray-500 "
          />
        );
      })}
    </>
  );
};
