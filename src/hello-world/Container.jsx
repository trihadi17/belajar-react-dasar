// Nested Component
// JSX mendukung pembuatan Nested Component
// Hal ini memungkinkan kita bisa mmebuat Component yang di dalamnya bisa ditambahkan Component lain secara dinamis
// Agar component bisa memiliki Component lain didalamnya, kita bisa menggunakan attribute children pada "Props"
// Misal sekarang kita akan mmebuat Component bernama "Container" dan didalamnya kita bisa berisi Component lainnya

// {children} itu merupakan props, penamaan nya harus emang "children" tidak bisa yang lain, kebtulan Container ini Parent Component dan Nanti memiliki Child/Nested Component yaitu HelloWorld
export default function Container({ children }) {
  return (
    <div>
      <h1>Programmer Zaman Now</h1>
      {children}
      <footer>
        <p>2025 Programmer Zaman Now</p>
      </footer>
    </div>
  );
}
