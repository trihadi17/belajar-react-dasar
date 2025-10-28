import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";

createRoot(document.getElementById("root")).render(
  // NOTED : STRICT MODE berfungsi untuk menampilkan semua komponen di root, ini mmebantu dalam mencari masalah saat development. Boleh tidak digunakan
  <StrictMode>
    {/* Nested Component */}
    <Container>
      <HelloWorld />
    </Container>
  </StrictMode>
);
