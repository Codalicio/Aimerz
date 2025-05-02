import { useState } from "react";
import Header from "./components/header/Header";
import Info from "./components/info/info";
import Nav from "./components/nav/Nav";

function App() {
  const [activeTab, setActiveTab] = useState("pizzas");
  return (
    <>
      <div className="w-[1200px] mx-auto p-5">
        <Header />
        <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="w-[1200px] mx-auto p-5 flex flex-col justify-center">
        <Info activeTab={activeTab} />
      </div>
    </>
  );
}

export default App;
