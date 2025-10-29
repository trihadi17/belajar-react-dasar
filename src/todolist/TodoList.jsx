// COLLECTION COMPONENT
// ita pasti akan sering menampilkan Component yag sama berkali kali sesuai koleksi data. JSX sendiri tidak memiliki fitur perulangan
// Untuk menampilkan multiple Component, sama seperti "Conditional", kita akan memanfaatkan JavaScript
// Kita bisa menggunakan JavaScript Array untuk mengubah data Array menjadi Component, misal menggunakan method map() pada Array

// COMPONENT KEY
// Saat membuat Collection Component, tiap Compoennt diperlukan id(unique, string atau number) menggunakan attribute key
// Kenapa butuh Component Key? Hal ini agar React bisa mengenali Component ketika berubah, seperti posisinya diubah, dihapus atau ditambahkan pada Collection
// Biasanya, Component Key akan diambil dari data, sehingga lebih konsisten
// NOTED : Sangat disarankan menggunakan key ini

import Todo from "./Todo";

function TodoList() {
  // Contoh data, misal datanya banyak dalam bentuk array, nantinya akan dimasukkan ke Component
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Learn JavaScript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn ReactJS",
      isCompleted: false,
    },
  ];

  //   const todos = data.map((todo) => <Todo {...todo} />); // {...todo}  -> Spread Syntax (jika data nya array, jadi tidak perlu inisialisasi satu satu)

  return (
    <ul>
      {/* INI CARA MANUAL MEMASUKKAN COMPONENT BERKALI KALI, SANGAT TIDAK DISARANKAN JIKA DIGUNAKAN BERKALI KALI TAPI MEMILIKI BANYAK DATA */}
      {/* <Todo isCompleted={true} text={"Learn HTML"} isDeleted={false}></Todo>
      <Todo isCompleted={true} text={"Learn CSS"}></Todo>
      <Todo isCompleted={false} text={"Learn JavaScript"}></Todo>
      <Todo isCompleted={false} text={"Learn ReactJS"}></Todo> */}

      {/* INISIALISASI COMPONENT DENGAN METHOD MAP() dan SREAD SYNTAX (MENAMPUNG DATA) */}
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
