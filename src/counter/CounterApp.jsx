import { useState } from "react";
import Counter from "./Counter";

// INI ADALAH SYNTAX UNTUK PROSES PERUBAHAN COMPONENT (MISAL DIHILANGKAN)
export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  // Handler untuk mengubah status checked melalui checkbox
  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      <Counter />
      {/* Counter kedua ini muncul jika hanya kondisi nya checked */}
      {show2 && <Counter />}
      <input type="checkbox" checked={show2} onChange={handleChange} />{" "}
      Tampilkan Counter 2
    </div>
  );
}
