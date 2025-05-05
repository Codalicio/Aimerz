import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    document.body.classList.add("bg-gray-900", "text-white");
    return () => {
      // Cleanup if component unmounts
      document.body.classList.remove("bg-gray-900", "text-white");
    };
  }, []);
  return (
    <>
      <div className="p-5">
        <h1>About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border-3 border-gray-500 w-[600px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border-3 border-gray-500 w-[600px]"
        />
        <br />
        <br />
        <button
          className=" w-[600px] p-2 bg-blue-800 text-white text-center rounded cursor-pointer"
          onClick={() => {
            localStorage.setItem("username", `${name}`);
            localStorage.setItem("email", `${email}`);
            setName("");
            setEmail("");
          }}
        >
          Submit
        </button>
        <br />
        <br />
        <h1
          className={`w-[600px] p-2 text-white font-black text-center rounded cursor-pointer ${
            isActive ? "bg-red-900" : "bg-gray-900"
          }`}
          onClick={handleClick}
        >
          {localStorage.getItem("username")} - {localStorage.getItem("email")}
        </h1>
        <br />
        <button
          onClick={() => navigate("/products")}
          className="w-[600px] p-2 text-white font-black text-center rounded cursor-pointer bg-pink-900"
        >
          Go To Products
        </button>
      </div>
    </>
  );
};

export default About;
