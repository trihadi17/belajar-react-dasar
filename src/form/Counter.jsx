// STATE
// Menyimpan perubahan pada Component disebut STATE
// Local variabel biasa di Component tidak bisa digunakan sebagai State, karena di React melakukan render Component untuk kedua klinya atau seterusnya, maka semua kode Component akan di eksekusi ulang, oleh karena itu local variable akan kembali ke nilai awal
// Ketika statenya berubah, maka component tersebut akan dirender ulang. Maka dari itu untuk local variabel biasa tidak bisa digunakan sebagai State

// useState
// Untuk membuat State, kita bisa menggunakan function useState(initial)
// https://react.dev/reference/react/useState
// Function useState akan mengambalikan array dengan dua nilai, pertama adalah Statenya dan kedua ada function untuk mengubah value di State tersebut
// Component yang menggunakan State tersebut, secara otomatis akan di render ulang

// NOTED : State merupakan data yang terisolasi dan private secara local terhadap Component yang menggunakan, artinya jika kita merender atau menggunakan Component yang sama berkali-kali, maka State dari Component tersebut akan terpisah/tidak terjadi error satu sama lain

import { useState } from "react";

export default function Counter() {
  // Inisialisasi state
  let [counter, setCounter] = useState(0); // counter -> state, setCounter -> set Function, useState(0) -> inisial nilai awal

  function handleClick() {
    setCounter(counter + 1); // Ketika diklik, bertambah 1
    console.log(counter);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increament</button>
      </div>

      <h1>Counter : {counter}</h1>
    </div>
  );
}
