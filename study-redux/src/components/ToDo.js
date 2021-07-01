import { connect } from "react-redux";
import { actionCreators } from "../store";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      dispatch(actionCreators.delToDo(parseInt(ownProps.id)));
    },
  };
};

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(ToDo);
