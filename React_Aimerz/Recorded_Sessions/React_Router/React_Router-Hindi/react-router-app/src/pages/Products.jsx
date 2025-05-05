import { useParams, Link, useSearchParams, useNavigate } from "react-router";

const Products = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();
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
      <div className="p-5">
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
        <br />
        <button
          onClick={() => {
            navigate("./mobile");
          }}
          className="bg-red-900 text-white text-center rounded border-3 border-black p-2 cursor-pointer"
        >
          Go To Mobiles
        </button>
        <br />
        <br />
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-900 text-white text-center rounded border-3 border-black p-2 cursor-pointer"
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default Products;
