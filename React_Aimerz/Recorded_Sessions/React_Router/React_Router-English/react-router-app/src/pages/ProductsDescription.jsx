import { Link, useParams, useSearchParams } from "react-router";

const ProductsDescription = () => {
  const params = useParams();
  console.log(params);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("device");
  console.log(name);
  return (
    <>
      <div className="p-5">
        <h1>Product description</h1>
        <h2>
          Products - {params.category} - {searchParams.get("device")}
        </h2>
        <Link to={"/products"} className="text-blue-700 underline">
          Go to Products
        </Link>
      </div>
    </>
  );
};

export default ProductsDescription;
