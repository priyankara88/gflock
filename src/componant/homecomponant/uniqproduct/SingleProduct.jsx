const SingleProduct = () => {
  return (
    <div className="w-full flex flex-col px-[50px] mt-2 lg:flex-row border-2 border-blue-700">
      <div className="w-full grid  grid-cols-[20%_80%]">
        <div className="w-[120px] h-auto border-2 border-red-500 hidden lg:flex">
          aaa
        </div>

        <div className="w-[80%] h-[auto] border-2 border-red-500">b</div>
      </div>
      <div className="w-full flex border-2 border-green-700">
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  );
};

export default SingleProduct;
