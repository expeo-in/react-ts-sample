import { Fragment } from "react";
import { useState } from "react";

import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  color: red;
  background-color: ${(props) => (props.active ? "navy" : "lightblue")};
`;

interface ComponentProps {
  items: string[];
  heading: string;
  onItemSelected: (item: string) => void;
}

const ListGroup = ({ items, heading, onItemSelected }: ComponentProps) => {
  // const items: any[] = props.items;
  // const heading = props.heading;
  // const onItemSelected = props.onItemSelected;

  //const array = useState(-1);
  //const selectedIndex = array[0];
  //const setSelectedIndex = array[1];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onItemSelected(item);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Data from Function</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={selectedIndex == index}
            className={
              "list-group-item " + (selectedIndex == index ? " active" : "")
            }
            onClick={() => handleClick(item, index)}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
