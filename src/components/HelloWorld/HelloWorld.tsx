//import "./HelloWorld.css";
import { BsFillBellFill } from "react-icons/bs";
import styles from "./HelloWorld.module.css";

function HelloWorld() {
  const name = null;

  const countries = [
    { id: 1, name: "India" },
    { id: 2, name: "US" },
  ];

  // if (name) return <h1>Hello World {name}</h1>;
  // else return <h1>Hello World Unknown</h1>;

  //return <h1>Hello World {name ? name : "unknown"}</h1>;

  return (
    <div>
      <h1
        className={[styles.padXL, styles.txtprimary].join(" ")}
        style={{ fontSize: "150px", backgroundColor: "red" }}
      >
        Hello World Component
      </h1>
      {name != null && <h2>Hello World {name}</h2>}

      <ul>
        {countries.map((item) => (
          <li key={item.id}>{item.id + " - " + item.name}</li>
        ))}
      </ul>

      <button
        style={{
          backgroundColor: "navy",
          color: "white",
        }}
      >
        Button 1
      </button>
      <br></br>
      <br></br>

      <BsFillBellFill color="green" size={50}></BsFillBellFill>
    </div>
  );
}

export default HelloWorld;
