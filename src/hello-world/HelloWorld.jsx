function HelloWorld() {
  return (
    // NOTED : Gunakan tag <> </> (fragment) atau tag <div></div> untuk diawal
    <>
      {/* Multiple Component */}
      <HeaderHelloWorld text="Hello World" />
      {/* text="Hello World" -> Props (Mengirim data antar komponen) */}
      <ParagraphHelloWorld />
    </>
  );
}

export default HelloWorld;

// {text = "blabla"} -> text adalah destructing props, sedangkan "blabla" merupakan default value ketika propsnya kosong atau tidak terisi
function HeaderHelloWorld({ text = "Ups, lupa kasih text" }) {
  // const text = "Hello World";
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
