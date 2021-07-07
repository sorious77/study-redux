const ToDoList = ({ toDoList }) => {
  return (
    <>
      <h2>To Do List</h2>
      <ul>
        {toDoList.map((toDo) => (
          <li key={toDo}>{toDo}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
