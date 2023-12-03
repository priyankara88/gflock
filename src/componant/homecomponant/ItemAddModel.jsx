import { Modal } from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiRuler } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { ItemFetch } from "../../libs/shoppingitem";

const ItemAddModel = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open.open} onClose={handleClose}>
        <div className="flex items-center justify-center mt-10 rounded-md">
          <div className="p-10 w-[70%] h-[90%] flex flex-col items-center justify-center bg-white ">
            <div className="w-full flex flex-col  ">
              <div className="w-full flex justify-end">
                <IoIosCloseCircleOutline
                  onClick={handleClose}
                  className="cursor-pointer hover:shadow-md text-2xl"
                />
              </div>

              <div className="w-full grid grid-cols-[20%_40%_40%]">
                {/* side image */}
                <div className="pl-4 pr-4 max-h-[500px] flex  flex-col overflow-y-auto bg-white">
                  <SlideImage />
                  <SlideImage />
                  <SlideImage />
                  <SlideImage />
                </div>
                {/* Middle Image */}
                <div>
                  <div className="w-full h-fit">
                    <img
                      src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/gallery/bcab2fffa72fe636de6a21639dc098ce2f567780.jpg"
                      alt="test"
                    />
                  </div>
                </div>
                {/* Item details */}
                <div className="pl-4 ">
                  <div className="w-full flex flex-col">
                    <p className="text-3xl">Boho Nora Dress</p>
                    <p className="text-lg">SKU : 23320500</p>
                    <p className="text-2xl font-semibold mt-4">LKR 5690.00</p>
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
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="cursor-pointer mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
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

const SlideImage = () => {
  return (
    <div className="cursor-pointer flex items-center justify-center p-1 hover:border-2 border-gray-500 ">
      <img
        src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/gallery/a08194d2f332919354cca0d9e9f15783afa66737.jpg"
        alt="image"
        className="w-36 h-40"
      />
    </div>
  );
};
