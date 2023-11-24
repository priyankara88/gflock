import { Modal } from "@mui/material";
import { useState } from "react";
import { useCurrence } from "../../context/Currancycontext";

const ShoppingCartModal = ({ open, handleClose }) => {
  const [Qty, setQty] = useState(1);
  const [CurrancyRate, setCurrancyRate, slectedCurrancy, setSlectedCurrancy] =
    useCurrence();

  const QtyIncrese = () => {
    setQty((pre) => {
      const temp = pre + 1;
      if (temp > 10) {
        setQty(1);
      } else {
        setQty(temp);
      }

      return temp;
    });
  };

  const QtyDecrese = () => {
    setQty((pre) => {
      const temp = pre - 1;
      if (temp >= 1) {
        setQty(temp);
      } else {
        setQty(1);
      }

      return temp;
    });
  };

  return (
    <div>
      <Modal className="w-full p-10 " open={open} onClose={handleClose}>
        <div className="w-full grid p-2 grid-cols-1 md:grid-cols-[70%_30%] outline-0 rounded-sm bg-slate-400/80">
          {/* left side */}
          <div className="w-full flex flex-col   backdrop-blur-sm ">
            <div className="w-full flex flex-col mt-4   ui-shadow  bg-white/90 rounded-md">
              <div className="w-full flex flex-row">
                <div className="w-[120px] h-[150px] p-1">
                  <img
                    src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/gallery/713728ff78c61b87d83e46953a5347668b828e5d.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full flex flex-col p-4">
                  <p className="text-xl">Rolling Hills WW Dress</p>
                  <p className="text-lg">SKU : 23631200</p>
                  <div className="w-full flex flex-row ">
                    <p>
                      {slectedCurrancy}
                      {(CurrancyRate[slectedCurrancy] * 27 * Qty).toFixed(2)}
                    </p>
                    <p className="line-through">
                      {slectedCurrancy}
                      {(CurrancyRate[slectedCurrancy] * 28 * Qty).toFixed(2)}
                    </p>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <div>
                      <div className="w-full flex flex-row gap-2">
                        <p>Quntity</p>
                        <div
                          onClick={QtyIncrese}
                          className="shadow-sm cursor-pointer w-[25px] h-[25px] flex items-center justify-center rounded-md bg-slate-400"
                        >
                          +
                        </div>
                        <p>{Qty}</p>
                        <div
                          onClick={QtyDecrese}
                          className="shadow-sm cursor-pointer w-[25px] h-[25px] flex items-center justify-center rounded-md bg-slate-400"
                        >
                          -
                        </div>
                      </div>
                    </div>
                    <div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>Total</div>
        </div>
      </Modal>
    </div>
  );
};

export default ShoppingCartModal;
