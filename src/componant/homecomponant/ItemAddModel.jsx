import { Modal } from "@mui/material";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ItemAddModel = ({ open, handleClose }) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className="flex items-center justify-center">
          <div className="m-10 w-[70%] h-[90%] flex flex-col items-center justify-center bg-white ">
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
                <div className="pl-4">
                  <div className="w-full flex flex-col">
                    <p>Boho Nora Dress</p>
                    <p>SKU : 23320500</p>
                    <p>LKR 5690.00</p>
                    <p>Color: Yellow</p>
                    <p>Size</p>
                    <div className="flex gap-2">
                      <div className="mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
                      <div className="mt-2 flex items-center justify-center w-14 h-8 border-[0.5px] border-gray-600">
                        <p>uk2</p>
                      </div>
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
