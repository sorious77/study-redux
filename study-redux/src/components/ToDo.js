import { connect } from "react-redux";
import { del } from "../store";
import { Link } from "react-router-dom";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      dispatch(del(parseInt(ownProps.id)));
    },
  };
};

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default connect(null, mapDispatchToProps)(ToDo);
