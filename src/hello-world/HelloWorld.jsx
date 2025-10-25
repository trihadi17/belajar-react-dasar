function HelloWorld() {
  return (
    // NOTED : Gunakan tag <> </> (fragment) atau tag <div></div> untuk diawal
    <>
      {/* Multiple Component */}
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </>
  );
}

export default HelloWorld;

function HeaderHelloWorld() {
  const text = "Hello World";
  return (
    <h1
      // Style Inline
      style={{
        color: "red",
        backgroundColor: "aqua",
      }}
    >
      {text.toUpperCase()}
    </h1>
  );
}

function ParagraphHelloWorld() {
  const text = "Selamat Belajar ReactJS dari Programmer Zaman Now";
  // Style Melalui JS
  const style = {
    color: "blue",
    backgroundColor: "yellow",
  };
  return <p style={style}> {text.toLowerCase()} </p>;
}
