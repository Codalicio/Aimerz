import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const goToForm = () => {
    navigate("/form");
  };
  return (
    <>
      <div>
        <h1>App</h1>
        <button
          className="w-[200px] border-2 border-gray-300 bg-gray-700 text-white rounded p-2"
          onClick={goToForm}
        >
          Go To Form
        </button>
      </div>
    </>
  );
}

export default App;
