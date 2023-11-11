import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const CustomerFormUsingRHF = (param) => {
  const { register, handleSubmit } = useForm();

  //const fnameObj = rhfObject.register("fname");
  //console.log(rhfObject);
  //console.log(fnameObj);

  const onFormSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <h2>Form Using Reack Hook Form</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="form-control"
            {...register("fname")}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            className="form-control"
            {...register("age")}
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default CustomerFormUsingRHF;
