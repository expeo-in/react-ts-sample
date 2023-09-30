import { Fragment } from "react";

const ListGroup = () => {
  //const cities = ["Chennai", "Bangalore", "Delhi", "Mumbai"];
  const cities: string[] = [];

  const getContent = () => {
    return cities.length === 0 && <p>No Data from Function</p>;
  };

  return (
    <>
      <h1>List Group</h1>
      {getContent()}
      <ul className="list-group">
        {cities.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
