import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const submit = () => {
    console.log(
      `User's name is ${user.name} and user's email is ${user.email}.`
    );
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <>
      <div>
        <h1>React event handling : </h1>
        <input
          type="text"
          placeholder="Enter your name : "
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          placeholder="Enter your email : "
        />
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default App;
