function App() {
  const myNames = ["Amit", "Raj", "Sonu", "Prabhu"];
  const summary = () => {
    for (let i = 0; i < myNames.length; i++) {
      return `My name is ${myNames[myNames.length - 1]}.`;
    }
  };
  return (
    <>
      <div>
        <h1>Conditional rendering using loop : </h1>
        <ul>
          {myNames.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <ol>
          <li>{summary()}</li>
          <li>{summary()}</li>
        </ol>
      </div>
    </>
  );
}

export default App;
