import { Link, useParams } from "react-router";

function Products() {
  const params = useParams();

  const productHeading = () => {
    return params.category ? `Products-${params.category}` : "Products";
  };
  console.log(`check: ${params.category}`);

  return (
    <>
      <div className="p-5">
        <h1>{productHeading()}</h1>
        <Link to={"/products/mobile"} className="underline text-blue-700">
          Go to Mobiles
        </Link>
        <br />
        <Link to={"/products/laptop"} className="underline text-blue-700">
          Go to Laptops
        </Link>
        <br />
        <Link to={"/products/tv"} className="underline text-blue-700">
          Go to TVs
        </Link>
        <br />
        {params.category === "mobile" && (
          <Link
            to={"/products/mobile/details?device=iphone"}
            className="text-green-700 underline"
          >
            Go to Iphones
          </Link>
        )}
      </div>
    </>
  );
}

export default Products;
