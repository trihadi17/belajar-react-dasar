// SIDE EFFECT
// Apakah Component boleh memiliki Side Effect (efek samping) ?
// Tentu saja boleh, namun biasanya Side Effect terjadi dikarenakan adanya interaksi dari pengguna melalui Event Handler
// Misal, kita akan membuat Form Say Hello, dimana ketika Button di klik, kita ingin menampilkan Hello + nama pada Text

export default function SayHelloForm() {
  // Event Handler
  function handleClick(e) {
    e.preventDefault();
    const name = document.getElementById("input_name").value;
    document.getElementById("text_hello").innerText = `Hello ${name}`;
  }

  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hello</button>

        <h1 id="text_hello">Hello World</h1>
      </form>
    </div>
  );
}

// NOTED : Koding diatas merupakan contoh dari Side Effect, namun penerapan nya masih menggunakan DOM Manipulation dan itu tidak disarankan. Di React ada namanya "STATE", state ini berfungsi untuk memicu perubahan Element di Component dari berbagai Event Handler
