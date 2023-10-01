import { Fragment } from "react";
import { useState } from "react";

const ListGroup = () => {
  const cities = ["Chennai", "Bangalore", "Delhi", "Mumbai"];
  //let selectedIndex = 1;

  //let array = useState(-1);
  //const selectedIndex = array[0];
  //const setSelectedIndex = array[1];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [name, setName] = useState("siva");

  //const cities: string[] = [];

  const getContent = () => {
    return cities.length === 0 && <p>No Data from Function</p>;
  };

  // const handleClick = (event: React.MouseEvent, item: string) => {
  //   console.log("handle clicked", item, event);
  // };

  const handleClick = (item: string, index: number) => {
    console.log("handle clicked", item, index);
    //selectedIndex = index;
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>List Group</h1>
      {getContent()}
      <ul className="list-group">
        {cities.map((item, index) => (
          <li
            key={item}
            className={
              "list-group-item " + (selectedIndex == index ? " active" : "")
            }
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>{name}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setName("siva kumar");
          console.log(name);
        }}
      >
        Update Name
      </button>
    </>
  );
};

export default ListGroup;
