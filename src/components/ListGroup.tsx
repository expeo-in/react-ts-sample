import { Fragment } from "react";
import { useState } from "react";

interface ComponentProps {
  items: string[];
  heading: string;
  onItemSelected: (item: string) => void;
}

const ListGroup = ({ items, heading, onItemSelected }: ComponentProps) => {
  // const items: any[] = props.items;
  // const heading = props.heading;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onItemSelected(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Data from Function</p>}
      <ul className="list-group">
        {items.map((item, index) => (
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
    </>
  );
};

export default ListGroup;
