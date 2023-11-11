import { FormEvent, useState } from "react";

const CustomerFormUsingState = () => {
  const [customer, setCustomer] = useState({ fname: "kumar", age: "20" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(customer);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCustomer = { ...customer };

    if (e.target.id == "fname") newCustomer.fname = e.target.value;
    else if (e.target.id == "age") newCustomer.age = e.target.value;

    setCustomer(newCustomer);
  };

  return (
    <>
      <h2>Form Using State</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="form-control"
            value={customer.fname}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            name="age"
            className="form-control"
            value={customer.age}
            onChange={handleChange}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default CustomerFormUsingState;
