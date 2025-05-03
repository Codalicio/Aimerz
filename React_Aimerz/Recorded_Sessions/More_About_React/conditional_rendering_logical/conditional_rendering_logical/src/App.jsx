function App() {
  const showTitle = false;
  return (
    <>
      <div>{showTitle && <p>Title shown.</p>}</div>
      <div>{showTitle || <p>Title visible.</p>}</div>
    </>
  );
}

export default App;
