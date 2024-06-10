import produce from "immer";
import { useState } from "react";
import useAuth from "../auth";
import { Navigate, useNavigate } from "react-router-dom";

const Products = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  const addProduct = () => {
    //mutating
    //items.push({ id: 4, name: "Product 4" });

    // let newItems = [...items];
    // newItems.push({ id: 4, name: "Product 4" });

    setItems([{ id: 4, name: "Product 4" }, ...items]);
  };

  const updateProduct = (item: any) => {
    //mutating
    // item.name += "Changed";
    // setItems(items);

    // let newItems = items.map((i) => {
    //   //i.id == item.id ? { ...i, name: i.name + " changed" } : i
    //   if (i.id == item.id) return { ...i, name: i.name + " changed" };
    //   else return i;
    // });
    // setItems(newItems);

    setItems(
      produce((draft) => {
        let product = draft.find((i: any) => i.id == item.id);
        if (product) product.name += " changed";
      })
    );
  };

  const deleteProduct = (item: any) => {
    //mutating
    // let index = items.indexOf(item);
    // items.splice(index, 1);
    // setItems(items);
    // console.log(items);

    // let newItems = [...items];
    // let index = items.indexOf(item);
    // items.splice(index, 1);

    let newItems = items.filter((i) => i.id != item.id);
    setItems(newItems);
  };

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <>
      <button onClick={addProduct}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => updateProduct(item)}>Update</button>
            <button onClick={() => deleteProduct(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
