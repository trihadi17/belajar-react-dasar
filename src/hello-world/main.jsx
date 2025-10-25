import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";

createRoot(document.getElementById("root")).render(
  // NOTED : STRICT MODE berfungsi untuk menampilkan semua komponen di root, ini mmebantu dalam mencari masalah saat development. Boleh tidak digunakan
  <StrictMode>
    <HelloWorld />
  </StrictMode>
);
