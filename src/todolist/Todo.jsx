// CONDITIONAL
// Saat kita mmebuat halaman Web, sering kali kita menampilkan tampilan berbeda pada kondisi tertentu
// Hal ni juga bisa dilakukan di JSX
// Kita bisa menambahkan kondisi menggunakan JavaScript dan mengembalikan Component yang berbeda berdasarkan kondisi yang diinginkan
// Contoh kita akan membuat halam TodoList dan jika TOdo nya sudah selesai, kita akan coret element teksnya

// NULL Component
// Pada kasus tertentu, mungkin ada kondisi dimana kita ingin mengembalikan Component atau tidak ingin mengambalikan Component apapun
// Kita bisa mengembalikan "null" untuk menandai bahwa tidak ada Component yang kita kembalikan

// TERNARY OPERATOR
// Kadang pada kasus yang lebih sederhana, kita bisa menggunakan Ternary Operator JavaScript di JSX

// LOGICAL AND
// Di beberapa kasus yang lebih sederhana, kadang di JSC sering memanfaatkan Logical AND di JavaScript
// Misal jika kondisi terpenuhi maka akan menampilkan, jika tidak maka tidak menampikan

// {text, isCompleted} adalah Props
function Todo({ text, isCompleted, isDeleted = false }) {
  if (isDeleted) {
    return null; // return null, penerapan Null Component, sehingga dia kosong atau tidak ditampilkan
  } else {
    // Penggunaan Ternary Operator
    // return <li>{isCompleted ? <del>{text}</del> : text}</li>;

    // Pengunaan LOGICAL AND
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}

export default Todo;
