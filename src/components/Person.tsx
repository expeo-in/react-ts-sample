import { useState } from "react";

const Person = () => {
  // const [name, setName] = useState("siva");
  // const [age, setAge] = useState("30");

  const [person, setPerson] = useState({
    name: "siva",
    age: 30,
    address: {
      street: "1 street",
      city: "chennai",
      country: "india",
      location: {
        x: 100,
        y: 200,
      },
    },
  });

  const handleClick = () => {
    //mutating
    //person.name = "siva kumar";

    // let newPerson = { ...person };
    // newPerson.name = "siva kumar";

    //let newPerson = {...person, name: "siva kumar"};

    setPerson({
      ...person,
      name: "siva kumar",
      address: { ...person.address, street: "2 street" },
    });
  };

  return (
    <>
      <h2>State</h2>
      <button onClick={handleClick}>Update</button>
      <p>Value is {person.name}</p>
      <p>Stree is {person.address.street}</p>
    </>
  );
};

export default Person;
