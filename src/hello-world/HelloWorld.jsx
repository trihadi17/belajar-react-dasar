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
  return <h1>Hello World</h1>;
}

function ParagraphHelloWorld() {
  return <p>Selamat Belajar ReactJS dari Programmer Zaman Now</p>;
}
