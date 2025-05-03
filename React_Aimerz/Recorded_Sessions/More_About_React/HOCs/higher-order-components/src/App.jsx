function App() {
  const Paragraph = () => {
    return <p>I am a Paragraph.</p>;
  };

  const Span = () => {
    return <span>My name is Amit</span>;
  };

  const addTitle = (Comp) => {
    return function CompWithTitle() {
      return (
        <>
          <h1>Title</h1>
          <Comp />
        </>
      );
    };
  };

  const ParagraphWithTitle = addTitle(Paragraph);
  const SpanWithTitle = addTitle(Span);
  return (
    <>
      <div>
        <h1>Higher Order Components : </h1>
        <ParagraphWithTitle />
        <SpanWithTitle />
      </div>
    </>
  );
}

export default App;
