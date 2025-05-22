const Nav = () => {
  return (
    <>
      <div className=" my-5 flex border-1 border-gray-300">
        <div className="border-1 border-gray-300 w-[20%] text-center border-t-0 border-l-0 border-b-0 p-3">
          <h2 className="text-l font-semibold">Pizza</h2>
        </div>
        <div className="border-1 border-gray-300 w-[20%] text-center border-l-0 border-t-0 border-b-0 p-3">
          <h2 className="text-l font-semibold">Sides</h2>
        </div>
        <div className="border-1 border-gray-300 w-[20%] text-center border-l-0 border-t-0 border-b-0 p-3">
          <h2 className="text-l font-semibold">Desserts</h2>
        </div>
        <div className="border-1 border-gray-300 w-[20%] text-center border-l-0 border-t-0 border-b-0 p-3">
          <h2 className="text-l font-semibold">Drinks</h2>
        </div>
        <div className="border-1 border-gray-300 w-[20%] text-center border-l-0 border-t-0 border-r-0 border-b-0 p-3">
          <h2 className="text-l font-semibold">Deals</h2>
        </div>
      </div>
    </>
  );
};

export default Nav;
