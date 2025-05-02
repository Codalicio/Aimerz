import { useState } from "react";

const Nav = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="my-3 flex border-2 border-gray-300">
        <div
          className={`w-[20%] text-center py-2 border-2 border-t-0 border-l-0 border-b-0 border-gray-200 cursor-pointer ${
            activeTab === "pizzas" ? "bg-red-500" : null
          }`}
          onClick={() => setActiveTab("pizzas")}
        >
          Pizzas
        </div>
        <div
          className={`w-[20%] text-center py-2 border-2 border-t-0 border-l-0 border-b-0 border-gray-200 cursor-pointer ${
            activeTab === "sides" ? "bg-red-500" : null
          }`}
          onClick={() => setActiveTab("sides")}
        >
          Sides
        </div>
        <div
          className={`w-[20%] text-center py-2 border-2 border-t-0 border-l-0 border-b-0 border-gray-200 cursor-pointer ${
            activeTab === "desserts" ? "bg-red-500" : null
          }`}
          onClick={() => setActiveTab("desserts")}
        >
          Desserts
        </div>
        <div
          className={`w-[20%] text-center py-2 border-2 border-t-0 border-l-0 border-b-0 border-gray-200 cursor-pointer ${
            activeTab === "drinks" ? "bg-red-500" : null
          }`}
          onClick={() => setActiveTab("drinks")}
        >
          Drinks
        </div>
        <div
          className={`w-[20%] text-center py-2 border-2 border-t-0 border-l-0 border-b-0 border-gray-200 cursor-pointer ${
            activeTab === "deals" ? "bg-red-500" : null
          }`}
          onClick={() => setActiveTab("deals")}
        >
          Deals
        </div>
      </div>
    </>
  );
};

export default Nav;
