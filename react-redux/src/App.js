import ToDoList from "./component/ToDoList";
import Form from "./component/Form";
import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setToDo(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setToDoList([...toDoList, toDo]);
    setToDo("");
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit} onChange={onChange} toDo={toDo} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
};

export default App;
