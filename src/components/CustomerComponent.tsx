import { useState } from "react";

const CustomerComponent = () => {
  const [customer, setCustomer] = useState({
    name: "siva",
    age: 20,
    address: {
      street: "first street",
      city: "chennai",
      state: "TN",
      country: "India",
    },
  });

  const updateCustomer = () => {
    //customer.age = 30;
    //console.log(customer);

    //let newCustomer = { name: "siva", age: 30 };
    //newCustomer.age = 30;
    let newCustomer = {
      ...customer,
      name: "siva kumar",
      address: { ...customer.address, street: "second street" },
    };

    setCustomer(newCustomer);
  };

  return (
    <>
      <h2>Customer</h2>
      <div>
        <p>Name: {customer.name}</p>
        <p>Age: {customer.age}</p>
        <p>
          Address: {customer.address.street} - {customer.address.city}
        </p>
      </div>
      <button className="btn btn-primary" onClick={updateCustomer}>
        Update
      </button>
    </>
  );
};

export default CustomerComponent;
