function App() {
  const status = "";

  const Status = () => {
    switch (status) {
      case "loading":
        return <p>The webpage is loading...</p>;
      case "error":
        return <p>Error. Error message!</p>;
      case "success":
        return <p>Success</p>;
      default:
        return <p>Internal Error!</p>;
    }
  };

  const age = 30;

  const Profile = ({ name }) => {
    if (age % 2 === 0) {
      return <p>{name} your age is an even number.</p>;
    } else {
      return <p>{name} Your age is an odd number.</p>;
    }
  };
  return (
    <>
      <div>
        <h1>Conditional Rendering using switch statement : </h1>
        <Status />
        <h2>Conditional Rendering using if/else statement :</h2>
        <Profile name="Raj" />
      </div>
    </>
  );
}

export default App;
