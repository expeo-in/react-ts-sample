import { useSelector } from "react-redux";

const HeaderUsingRedux = () => {
  const count = useSelector((state: any) => state.counter);

  return (
    <>
      <h2>Header USing Redux</h2>
      <p>Count: {count}</p>
    </>
  );
};

export default HeaderUsingRedux;
