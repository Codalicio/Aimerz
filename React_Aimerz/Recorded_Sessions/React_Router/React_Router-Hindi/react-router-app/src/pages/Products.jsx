import { useParams, Link, useSearchParams } from "react-router";

const Products = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const display = () => {
    if (params.category && searchParams.get("device")) {
      return (
        <h1>
          Products - {params.category} - {searchParams.get("device")}
        </h1>
      );
    } else if (params.category) {
      return <h1>Products - {params.category}</h1>;
    } else {
      return <h1>Products</h1>;
    }
  };
  return (
    <>
      <div>
        {display()}
        <Link to={"/products/mobile"} className="text-blue-700 underline">
          Go to Mobiles
        </Link>
        <br />
        <Link to={"/products/laptop"} className="text-blue-700 underline">
          Go to Laptops
        </Link>
        <br />
        <Link to={"/products/tv"} className="text-blue-700 underline">
          Go to TVs
        </Link>
        <br />
        {params.category === "mobile" && (
          <Link
            to={"/products/mobile?device=iphone"}
            className="text-blue-700 underline"
          >
            Go to Iphones
          </Link>
        )}
      </div>
    </>
  );
};

export default Products;
