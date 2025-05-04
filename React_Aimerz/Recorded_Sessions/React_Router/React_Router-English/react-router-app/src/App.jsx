import { Link } from "react-router";

function App() {
  return (
    <>
      <div className="p-5">
        <h1>App</h1>
        <Link to={"/home"} className="text-blue-700 underline">
          Go to Home
        </Link>
      </div>
    </>
  );
}

export default App;
