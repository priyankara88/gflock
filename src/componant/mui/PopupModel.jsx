import { Modal } from "@mui/material";
import { IoMdCloseCircleOutline } from "react-icons/io";
import HomeCard from "../homecomponant/HomeCard";

const PopupModel = ({ open, handleClose }) => {
  return (
    <div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <div className="w-full h-fit flex items-center justify-center  outline-none border-0 ">
            <div className="w-full  m-5  bg-white rounded-md">
              <div className="w-full flex justify-end mt-2 pr-3">
                <IoMdCloseCircleOutline className="text-2xl text-gray-700" />
                <HomeCard />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PopupModel;
