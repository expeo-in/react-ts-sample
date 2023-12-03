import { FormEvent, useEffect, useRef, useState } from "react";

const CustomerForm = () => {
  const [count, setCount] = useState(0);
  const fnameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let customer = {
      fname: "",
      age: "",
    };

    if (fnameRef.current) customer.fname = fnameRef.current.value;

    if (ageRef.current) customer.age = ageRef.current.value;

    console.log(customer);
  };

  useEffect(() => {
    if (fnameRef.current) fnameRef.current.focus();
  });

  return (
    <>
      <h2>Form Using Ref</h2>
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
            ref={fnameRef}
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
            ref={ageRef}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default CustomerForm;
