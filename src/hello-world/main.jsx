import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  // NOTED : STRICT MODE berfungsi untuk menampilkan semua komponen di root, ini mmebantu dalam mencari masalah saat development. Boleh tidak digunakan
  <StrictMode>
    {/* Nested Component */}
    <Container>
      <HelloWorld />
      <AlertButton text="Click Me" message={"You click me"} />
      <MyButton text="Smash me" onSmash={() => alert("You smash me")} />

      <Toolbar
        onClick={(e) => {
          e.stopPropagation(); // ini mencegah triggger onClick lainnya, yang di click yang ditrigger
          alert("You click toolbar");
        }}
      />

      <SearchForm />

      <SayHelloForm />

      <Counter />
    </Container>
  </StrictMode>
);
