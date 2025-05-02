import Card from "../card/Card";
import { basicDetails } from "../../db/DB";
import { useState } from "react";

const Info = ({ activeTab }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = basicDetails[activeTab].products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1 className="text-4xl text-center my-5">
        Our {basicDetails[activeTab].title}
      </h1>
      <p className="text-center text-md">
        {basicDetails[activeTab].description}
      </p>
      <div className="flex justify-center my-10">
        <input
          className="p-5 border-2 border-gray-300 w-[80%]"
          type="text"
          name="search"
          id="search"
          placeholder="Search Pizza by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="my-5 flex flex-wrap gap-5 w-[100%] justify-center">
        {filteredProducts.map((data, index) => (
          <Card
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
};

export default Info;
