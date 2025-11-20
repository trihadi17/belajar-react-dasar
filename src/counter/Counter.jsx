import { useState } from "react";

// MEPERTAHANKAN STATE
// State disimpan di React bukan Component, ketika kita menggunakan component yang sama itu tidak mempengaruhi nilai keduanya/tabrakan, dia berjalan sendiri sendiri
// React akan menyimpan state tersebut berdasarkan posisi Component nya
// Apabila posisi Component berubah, misal hilang dari layar makan State nya akan dihapus dari React dan ketika muncul lagi, nilai nya akan diulang dari awal

// NOTED : Jika posisi component dan jenis component nya sama, secara otomatis React akan mempertahankan State tersebut alias nilai nya sama, tidak sendiri sendiri lagi. Kecuali posisi nya berubah atau component nya berbeda

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
