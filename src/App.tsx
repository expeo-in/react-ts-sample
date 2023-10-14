import { Fragment } from "react";
import HelloWorld from "./components/HelloWorld";
import HelloWorldStyled from "./components/HelloWorld/HelloWorldStyled";
//import { ListGroup, name  } from "./components/ListGroup";
import ListGroup from "./components/ListGroup";
import Counter from "./components/Counter";
import Alert from "./components/Alert";

function App() {
  const handleItemSelected = (item: string) => {
    console.log(item);
  };
  return (
    <>
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
      ></Counter>
    </>
  );
}

export default App;
