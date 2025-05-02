function App() {
  const showTitle = false;
  return (
    <>
      <div>
        <p>
          {showTitle ? "I will show the title." : "I will not show the title."}
        </p>
      </div>
    </>
  );
}

export default App;
