import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { del } from "../store";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      const {
        match: {
          params: { id },
        },
      } = ownProps;
      dispatch(del(parseInt(id)));
    },
  };
};

const Detail = ({ toDo, onBtnClick }) => {
  return (
    <>
      <h1>Detail</h1>
      <h3>{toDo?.text}</h3>
      <h5>created at : {toDo?.id}</h5>
      <Link to="/">
        <button onClick={onBtnClick}>Delete</button>
        <button>Go Home</button>
      </Link>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
