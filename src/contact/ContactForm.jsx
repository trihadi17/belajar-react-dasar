// OBJECT DI STATE
// State bisa menyimpan jenis data JavaScript apapun, termasuk Object
// Tapi "TIDAK DISARANKAN" untuk mengubah object yang terdapat di State
// Jika kita ingin mengubab object di State, kita disarankan "MEMBUAT OBJECT BARU" lalu mengubah data di State tersebut dengan object baru

// IMMUTABLE DATA
// Saat kita membuat data di State, kita harus memperlakukan data di State sebagai Immutable data (tidak bisa berubah)
// Artinya data di State hany digunakan untuk dibacar (read only)
// Jika kita ingin mengubah data di State, maka kita harus ubah menggunakan data baru, yang artinya data lama tidak dimodifikasi
// Ini adalah praktek yang biasa dilakukan di React. Walaupun, pada kenyataannya object di JavaScript tidak immutable
// Hal ini direkomendasikan agar kita idak salah mengubah data langsung, padahal kita tahu bahwa mengubah data tidak akan memicu proses render ulang
// Untungnya di JS kita bisa menggunakan Spread Syntax untuk membantu mengcopy attribute di Object

// IMMER LIBRAY
// Salah satu libray yang sering diugnakan ketika develop aplikasi menggunakan React adalah "IMMER"
// Immer adalah library yang diguanakn untuk membuat "immutable" object dari object saat ini
// Menggunakan Immer akan lebih mudah dibandingkan menggunakan "Spread Syntax", terutama untuk Object yang kompleks dan Nested
// Cara Kerja IMMER : Current Data -> Draft/Salinan (Edit disni) -> Next
// https://github.com/immerjs/immer

// USE IMMER LIBRARY
// Library Immer juga bisa diintegrasikan dengan "React State" dengan mudah
// Kita bisa mengguankan library "use-immer"
// Kita cukup mengganti useState() menjadi useImmer()
// Dan untuk mengupdate Object di State, kita bisa menggunakan Function sebagai parameter di Update Methodnya
// https://github.com/immerjs/use-immer

// import { useState } from "react";
import { useImmer } from "use-immer";

// Inisialisasi data (Object Awal)
const inisialData = {
  name: "",
  message: "",
};

function ContactForm() {
  // contact -> object diambil dari inisialData
  // const [contact, setContact] = useState(inisialData); // Penggunaan State
  const [contact, setContact] = useImmer(inisialData); // Penggunaan Use Immer

  // Salin object ke bbject baru menggunakan Spread Syntax (Manual)
  function handleNameChange(e) {
    setContact({ ...contact, name: e.target.value });
  }

  // Salin Object ke Object baru menggunakan Use Immer (disarankan jika object kompleks/nested)
  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <h1>Contact Detail</h1>
      <p>Name : {contact.name}</p>
      <p>Message : {contact.message}</p>
    </div>
  );
}

export default ContactForm;
