import { Fragment } from "react";
import HelloWorld from "./components/HelloWorld";
//import { ListGroup, name  } from "./components/ListGroup";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <hr></hr>
      <ListGroup
        heading="City"
        items={["Chennai", "Bangalore"]}
        onItemSelected={(city) => console.log("city selected", city)}
      ></ListGroup>
      <ListGroup
        heading="States"
        items={["Tamilnadu", "Andhra", "Kerala"]}
        onItemSelected={(state) => console.log("state selected", state)}
      ></ListGroup>
    </>
  );
}

export default App;
