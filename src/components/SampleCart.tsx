import produce from "immer";
import { useState } from "react";

const SampleCart = (props: any) => {
  let items = props.items;
  let onAddItemsToCart = props.onAddItemsToCart;

  return (
    <>
      <button onClick={() => onAddItemsToCart({ id: 5, name: "Product 5" })}>
        Add
      </button>
      <ul>
        {items.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default SampleCart;
