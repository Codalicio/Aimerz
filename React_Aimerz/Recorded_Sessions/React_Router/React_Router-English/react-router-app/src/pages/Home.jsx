import { Link } from "react-router";

function Home() {
  return (
    <>
      <div className="p-5">
        <h1>Home</h1>
        <Link to={"/about"} className="text-blue-700 underline">
          Go to About
        </Link>
        <br />
        <Link to={"/products"} className="text-blue-700 underline">
          Go to Products
        </Link>
        <br />
        <Link to={"/"} className="text-blue-700 underline">
          Go to App
        </Link>
      </div>
    </>
  );
}

export default Home;
