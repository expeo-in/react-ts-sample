const ToDoSearch = (props: any) => {
  return (
    <>
      <h2>Search ToDo</h2>
      <select onChange={(e) => props.onStatusChanged(e.target.value)}>
        <option value="">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>
    </>
  );
};

export default ToDoSearch;
