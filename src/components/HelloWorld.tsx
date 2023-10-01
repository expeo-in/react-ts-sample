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
      <h1>Hello World Component</h1>
      {name != null && <h2>Hello World {name}</h2>}

      <ul>
        {countries.map((item) => (
          <li key={item.id}>{item.id + " - " + item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HelloWorld;
