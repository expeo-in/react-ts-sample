import { useState } from "react";

const Cart = (props: any) => {
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {props.items.map((i: any) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={props.onAdd}>
        Add
      </button>
    </>
  );
};

export default Cart;
