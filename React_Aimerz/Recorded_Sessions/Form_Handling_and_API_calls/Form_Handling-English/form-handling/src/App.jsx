import { useRef, useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ ...userData, phone: inputRef.current.value });
    setUserData({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  const inputRef = useRef();
  return (
    <>
      <div>
        <h1>Form Handling - Forms</h1>
        <form
          onSubmit={onSubmit}
          className="flex flex-col bg-red-900 text-white my-10 w-[1000px]"
        >
          <div className="m-5">
            <label htmlFor="name">Username : </label>
            <input
              className="p-2 border-2 border-gray-300 rounded w-[400px] mx-5"
              type="text"
              name="userName"
              id="name"
              placeholder="Enter your username"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
          </div>
          <div className="m-5">
            <label htmlFor="email">Email : </label>
            <input
              className="p-2 border-2 border-gray-300 rounded w-[400px] mx-13"
              type="email"
              name="userEmail"
              id="email"
              placeholder="Enter your email"
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="m-5">
            <label htmlFor="password">Password : </label>
            <input
              className="p-2 border-2 border-gray-300 rounded w-[400px] mx-5"
              type="password"
              name="userPassword"
              id="password"
              placeholder="Enter your password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div className="m-5">
            <label htmlFor="phone">Phone : </label>
            <input
              type="tel"
              name="userPhone"
              id="phone"
              className="p-2 border-2 border-gray-300 rounded w-[400px] mx-10"
              placeholder="Enter your phone number"
              ref={inputRef}
            />
          </div>
          <div className="m-5">
            <button
              className="bg-green-500 mx-24 p-2 w-[400px] rounded hover:bg-green-600 hover:font-bold cursor-pointer"
              // onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
