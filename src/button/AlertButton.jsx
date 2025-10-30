// EVENT HANDLER
// Seperti yang sudah kita tahu bahwa di HTML Element, kita bisa menambahkan "Event Handler"
// Sama juga dengan React Component, kita bisa menambahkan Event Handler pada Element di React Component
// Ada banyak sekali jenis Event Handler yang bisa kita tambahkan, kita bisa lihat di halaman Reference React Component
// https://react.dev/reference/react-dom/components/common

// MENAMBAH EVENT HANDLER
// Untuk menambah Event Handler, biasanya kita akan tambahkan "Function" sebagai Handlernya
// Bisa dalam bentuk "Anonymous Function", "Arrow Function" atau membuat "Function" terlebih dahulu didalam scope Componentnya
// Nama Function untuk Handler biasanya diawali dengan nama "handle" dan diikuti dengan jenis Event Handler, misal handleClick(), hadlerMouseEnter(), dll. Ini bersifat saran aja dan kbiasaan programmer React

// MEMBACA PROPS DI EVENT HANDLER
//  Salah satu keuntungan membuat Function Event Handler di dalam Component adalah kit abisa membaca Props yang diugnakan oleh Component Tersebut

export default function AlertButton({ text, message }) {
  // Event Handler
  function handleClick(e) {
    // e -> event object (informasi mengenai event apa yang sedang dilakukan misal click dll)
    console.log(e.type); // Event handler type "click"
    alert(message);
  }

  return (
    // Menggunakan event handler
    <button onClick={handleClick}>{text}</button>
  );
}
