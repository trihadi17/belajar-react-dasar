// REDUCER (https://react.dev/reference/react/useReducer)
// Pada kasus kita membaut Componet yang memiliki banyak proses update State, kadang menyulitkan untuk maintain, karena terlalu banyak Event Handler yang harus dibuat untuk mengubah data State-nya
// Reducer bisa mengkonsolidasi semua logic untuk update State di sebuah Function diluar Component
// Reducer Fucntion adlaah kode dimana kita menyimpan logic kita
// Reducer Function memiliki dua parameter. Yaitu State saat ini dan Action obejct

// NOTED : BISA MENGGUNAKAN LIBRARY IMMER, dengan cara useImmerReducer()

import React, { useReducer } from "react";

const inisialData = {
  color: "blue",
  shape: "circle",
};

// Logic Pengubahan State menggunakan reducer
function shapeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.warnaBaru }; // warnaBaru -> sesuaikan nanti di dispacth nya, penamaan bebas

    case "CHANGE_SHAPE":
      return { ...state, shape: action.bentukBaru }; // bentukBaru -> sesuaikan di dispatch
    default:
      return state;
  }
}

export default function NoteForm() {
  const [state, dispatch] = useReducer(shapeReducer, inisialData);

  const boxStyle = {
    width: "120px",
    height: "120px",
    backgroundColor: state.color,
    borderRadius: state.shape === "circle" ? "50%" : "0",
    marginTop: "20px",
    transition: "0.3s",
  };

  // Perubahan warna
  function handleColor() {
    dispatch({
      type: "CHANGE_COLOR",
      warnaBaru: "red",
    });
  }

  // Perubahan bentuk
  function handleShape(shape) {
    dispatch({
      type: "CHANGE_SHAPE",
      bentukBaru: shape,
    });
  }

  return (
    <div>
      <h2>Mengubah Warna dan Bentuk</h2>

      <button onClick={handleColor}>Ubah Warna ke Merah</button>
      <button onClick={() => handleShape("square")}>Ubah Menjadi Kotak</button>
      <button onClick={() => handleShape("circle")}>
        Ubah Menjadi Lingkaran
      </button>

      <div style={boxStyle}></div>
    </div>
  );
}
