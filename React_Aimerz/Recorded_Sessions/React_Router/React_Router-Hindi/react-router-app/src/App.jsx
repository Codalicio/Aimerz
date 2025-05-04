import { Link } from "react-router";

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <Link to={"/home"} className="text-blue-700 underline">
          Go to Home
        </Link>
        <br />
        <Link to={"/about"} className="text-blue-700 underline">
          Go to About
        </Link>
        <br />
        <Link to={"/products"} className="text-blue-700 underline">
          Go to Products
        </Link>
      </div>
    </>
  );
}

export default App;
