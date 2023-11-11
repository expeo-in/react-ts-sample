import { useState } from "react";

const SampleCounter = () => {
  //let count = 0;
  let [count, setCount] = useState(0); //0
  let [name, setName] = useState("gandhi"); //1
  console.log("count", count);
  console.log("name", name);

  //   let ageState: any[] = [];
  //   let cityState: any[] = [];
  //   if (count == 0) {
  //     ageState = useState(30);
  //   } else {
  //     cityState = useState("chennai");
  //   }
  //   console.log("age", ageState[0]);
  //   console.log("city", cityState[0]);

  const handleClick = () => {
    count = count + 1;
    console.log(count);
    setCount(count);
    setName(name + " changed");
  };

  [0, "gandhi", 30];

  return (
    <>
      <h2>State</h2>
      <button onClick={handleClick}>Increment</button>
      <p>Value is {count}</p>
    </>
  );
};

export default SampleCounter;
