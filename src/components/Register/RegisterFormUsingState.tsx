import { useState } from "react";
const RegisterFormUsingState = () => {
  const [user, setUser] = useState({ firstName: "gandhi", lastName: "g" });

  const handleChange = (e: any) => {
    let newUser: any = { ...user };

    // let id = e.target.id;
    // let value = e.target.value;

    // if(id === "firstName")
    //     newUser.firstName = value;
    // else if(e.target.id == "lastName")
    //     newUser.lastName = value;

    newUser[e.target.id] = e.target.value;

    setUser(newUser);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    //alert("Form Submit Handled");
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
          value={user.firstName}
          onChange={handleChange}
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
          value={user.lastName}
          onChange={handleChange}
        ></input>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterFormUsingState;
