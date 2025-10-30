// PREVENT DEFAULT
// Prevent Default digunakan untuk mengentikan default action
// Misalnya kita membuat Form, ketika dipicu Event onClick, kita ingin hentikan default action Form Submit
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

export default function SearchForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault(); // ini mengehntikan action "Submit" pada form, sangat disarankan
          alert("You search");
        }}
      >
        Search
      </button>
    </form>
  );
}
