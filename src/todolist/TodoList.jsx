import Todo from "./Todo";

function TodoList() {
  return (
    <ul>
      <Todo isCompleted={true} text={"Learn HTML"} isDeleted={false}></Todo>
      <Todo isCompleted={true} text={"Learn CSS"}></Todo>
      <Todo isCompleted={false} text={"Learn JavaScript"}></Todo>
      <Todo isCompleted={false} text={"Learn ReactJS"}></Todo>
    </ul>
  );
}

export default TodoList;
