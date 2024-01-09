import { Fragment, useReducer, useState } from "react";
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
import CustomerFormUsingState from "./components/CustomerFormUsingState";
import CustomerFormUsingRHF from "./components/CustomerFormUsingRHF";

import Sample from "./components/Sample";
import SampleCounter from "./components/SampleCounter";
import Person from "./components/Person";
import Products from "./components/Products";
import SampleCart from "./components/SampleCart";
import SampleNavBar from "./components/SampleNavBar";
import Modal from "./components/Modal";

import "./App.css";
import SampleIcon from "./components/SampleIcon";
import RegisterFormUsingRef from "./components/Register/RegisterFormUsingRef";
import RegisterFormUsingState from "./components/Register/RegisterFormUsingState";
import RegisterFormUsingRHF from "./components/Register/RegisterFormUsingRHF";
import RegisterFormUsingZod from "./components/Register/RegisterFormUsingZod";
import PostList from "./components/PostList";
import ToDoListUsingAPI from "./components/ToDoListUsingAPI";
import ToDoSearch from "./components/ToDoSearch";
import { Link } from "react-router-dom";
import CounterUsingReducer from "./state-management/CounterUsingReducer";
import TaskWithoutReducer from "./state-management/TaskWithoutReducer";
import TaskUsingReducer from "./state-management/TaskUsingReducer";
import TaskContext from "./state-management/task-context";
import taskReducer from "./state-management/task-reducer";
import HeaderUsingContext from "./state-management/HeaderUsingContext";
import counterReducer from "./state-management/counter-reducer";
import CounterContext from "./state-management/counter-context";

function App() {
  const [items, setItems] = useState(["Product 1", "Product 2"]);
  const [todoStatus, setToDoStatus] = useState("");

  const handleStatusChanged = (status: string) => {
    setToDoStatus(status);
  };

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  const handleAddItemsToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  const addToCart = () => {
    setItems([...items, "Product 3"]);
  };

  const handleItemSelected = (item: string) => {
    console.log(item);
  };

  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [count, dispatchCount] = useReducer(counterReducer, 0);

  return (
    <>
      {/* <nav>
        <Link to="/">App</Link> <br></br>
        <Link to="/todos">To Dos</Link>
      </nav> */}
      <h2 className="my-modal">App Component</h2>
      {/* <ToDoSearch onStatusChanged={handleStatusChanged}></ToDoSearch>
      <hr></hr>
      <ToDoListUsingAPI status={todoStatus}></ToDoListUsingAPI> */}
      {/* <PostList></PostList> */}
      {/* <CustomerForm></CustomerForm> */}
      {/* <RegisterFormUsingRef></RegisterFormUsingRef> */}
      {/* <RegisterFormUsingState></RegisterFormUsingState> */}
      {/* <RegisterFormUsingRHF></RegisterFormUsingRHF> */}
      {/* <RegisterFormUsingZod></RegisterFormUsingZod> */}

      {/* <SampleIcon></SampleIcon> */}
      {/* <Modal>
        <h2>Sample Content</h2>
        <SampleCart
          items={cartItems}
          onAddItemsToCart={handleAddItemsToCart}
        ></SampleCart>
      </Modal> */}

      {/* <SampleNavBar cartItemCount={cartItems.length}></SampleNavBar>
      <hr></hr>
      <SampleCart
        items={cartItems}
        onAddItemsToCart={handleAddItemsToCart}
      ></SampleCart> */}

      {/* <Products /> */}
      {/* <Person></Person> */}
      {/* <SampleCounter></SampleCounter> */}
      {/* <SampleCounter></SampleCounter> */}
      {/* <Sample
        msg="hi"
        count={100}
        onItemClick={() => console.log("item click")}
      /> */}
      {/* <CustomerFormUsingRHF></CustomerFormUsingRHF> */}
      {/* <CustomerFormUsingState></CustomerFormUsingState> */}
      {/* <CustomerForm></CustomerForm> */}

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

      <TaskContext.Provider value={{ tasks, dispatch }}>
        <CounterContext.Provider value={{ count, dispatchCount }}>
          <HeaderUsingContext></HeaderUsingContext>
          <h2>State Management</h2>
          <CounterUsingReducer></CounterUsingReducer>
          {/* <TaskWithoutReducer></TaskWithoutReducer> */}
          <TaskUsingReducer></TaskUsingReducer>
        </CounterContext.Provider>
      </TaskContext.Provider>
    </>
  );
}

export default App;
