// ARRAY DI STATE
// Sama seperti Object, Array di State juga harus kita perlakukan sebagai Immutable data (Data yang tidak berubah hanya sebagai read only), jika mau mengubah nya kita harus membuat Array baru dengan cara disalin/draft menggunakan Spread Syntax atau Immer
// Artinya operasi menambah data, mengubah/menghapus data di Array, kita harus buat Array baru untuk di update ke State
// Hal ini memang agak menyulitkan, oleh karena itu dengan bantuan library seperti Immer, hal ini jadi lebih mudah

import { useState } from "react";
import { useImmer } from "use-immer";

// NOTED : JIKA TIDAK MENGGUNAKAN IMMER, HANYA MENGGUNAKAN SPREAD SYNTAX (MANUAL)
// Mengubah Array (HINDARI)
// Menambah -> push, unshift
// Menghapus ->  pop, shif, splice
// Mengubah ->  splice, arr[i] = ..
// Mengurutkan -> reverse, sort

// Mengubah Array (GUNAKAN)
// Menambah ->  concat, [...arr] spread syntax
// Menghapus ->  filter, slice
// Mengubah ->  map
// Mengurutkan -> Array baru

export default function Task() {
  const [item, setItem] = useState(""); // Untuk menyimpan data input
  const [items, setItems] = useImmer([]); // Menyimpan data array baru

  function handleChange(e) {
    setItem(e.target.value); // Menerima nilai inputan
  }

  function handleClick(e) {
    e.preventDefault();

    // Masukkan data input ke array
    setItems((draft) => {
      draft.push(item); // draft == items, bebas penamaan nya, samakan juga boleh
    });

    setItem(""); // kosongkan nilai state di item
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      <h1>List Task</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// NOTED : JIKA INGIN TAU CARA SHARING STATE ANTAR COMPONENT, LIHAT DI SLIDE "SHARING STATE"
