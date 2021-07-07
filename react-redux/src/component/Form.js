const Form = ({ toDo, onChange, onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Input To Do."
          value={toDo}
          onChange={onChange}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default Form;
