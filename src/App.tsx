import { Fragment, useState } from "react";
import HelloWorld from "./components/HelloWorld";
import HelloWorldStyled from "./components/HelloWorld/HelloWorldStyled";
//import { ListGroup, name  } from "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import Alert from "./components/Alert";
import Like from "./components/Like";
import ImpureComponent from "./components/ImpureComponent";
import ToDoList from "./components/ToDoList";
import CustomerComponent from "./components/CustomerComponent";
import BugsList from "./components/BugsList";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import CustomerForm from "./components/CustomerForm";

function App() {
  const [items, setItems] = useState(["Product 1", "Product 2"]);

  const addToCart = () => {
    setItems([...items, "Product 3"]);
  };

  const handleItemSelected = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <CustomerForm></CustomerForm>

      {/* <NavBar itemCount={items.length}></NavBar>
      <Cart items={items} onAdd={addToCart}></Cart> */}
      {/* <BugsList></BugsList>
      <CustomerComponent></CustomerComponent>
      <hr></hr> */}
      {/* <ToDoList></ToDoList> */}
      {/* 
      <ImpureComponent value={1}></ImpureComponent>
      <ImpureComponent value={1}></ImpureComponent>
      <ImpureComponent value={1}></ImpureComponent>
      <Like></Like>
      <h1 className="txtprimary">React</h1>
      <HelloWorldStyled></HelloWorldStyled>

      <HelloWorld />

      <Alert>
        <b>Record saved successfully</b>
      </Alert>

      <hr></hr>

      <ListGroup
        heading="City"
        items={["Chennai", "Bangalore"]}
        onItemSelected={handleItemSelected}
      ></ListGroup>

      <ListGroup
        heading="States"
        items={["Tamilnadu", "Andhra", "Kerala"]}
        onItemSelected={(state) => console.log("state selected", state)}
      ></ListGroup>

      <hr></hr>

      <Counter
        initialvalue={5}
        onIncremented={(value) => console.log("counter1", value)}
      ></Counter>
      <Counter
        initialvalue={10}
        onIncremented={(value) => console.log("countr2", value)}
      ></Counter> */}
    </>
  );
}

export default App;
