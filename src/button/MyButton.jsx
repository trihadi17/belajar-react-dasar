// EVENT HANDLER SEBAGAI PROPS
// Seperti yang di materi Props dibahas, Props sebenarnya adalah JavaScript Object
// Kita tahu bahwa JavaScript Object bisa memiliki attribute dengan tipe Function
// Oleh karean itu, kita juga bisa membuat Event Handler di Props
// Saat membuat attribute di Props yang berisikan Event Handler, biasanya nama attribute nya akan diawali dengan "on", misal "onSmash", "onHit" dll

export default function MyButton({ text, onSmash }) {
  // onSmash itu Event Handler yang berbentuk Function
  return <button onClick={onSmash}>{text}</button>;
}
