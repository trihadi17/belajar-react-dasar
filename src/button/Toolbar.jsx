// EVENT PROPRAGATION
// Event di React Component akan selalu disebarkan ke Component yang ada diatasnya (Event Propagation)
// Misal kita memiliki Div dengan Event onClick, lalu didalamnya kita memiliki Button dengan Event onClick
// Ketika Button di Klik, maka onClick di Button akan dipicu dan selanjutnya onClick pada Div juga akan dipicu
// Kadang mungkin kita tidak ingin hal itu terjadi, maka bisa dihentikan proses Event Propagation tersebut menggunakan "stopPropagation()"
// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
// NOTED : Intinya ketika ada onClick dalam satu lingkup misalnya Button dan Div tadi, supaya tidak ke trigger keduanya, gunakan "stopPropagation()"

export default function Toolbar({ onClick }) {
  return (
    <div onClick={onClick} style={{ backgroundColor: "yellow" }}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
}
