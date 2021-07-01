import { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setText(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    addToDo(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch) => {
  return { addToDo: (text) => dispatch(actionCreators.addToDo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
