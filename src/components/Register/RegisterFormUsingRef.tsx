import { useRef } from "react";

const RegisterFormUsingRef = () => {
  const fnameRef = useRef<HTMLInputElement>(null);
  const lnameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //alert("Form Submit Handled");

    let user = { firstName: "", lastName: "" };

    console.log(fnameRef);

    if (fnameRef.current?.value) user.firstName = fnameRef.current?.value;

    if (lnameRef.current?.value) user.lastName = lnameRef.current?.value;

    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          ref={fnameRef}
          type="number"
          required
          minLength={10}
          pattern=""
        ></input>
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          className="form-control"
          ref={lnameRef}
        ></input>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterFormUsingRef;
