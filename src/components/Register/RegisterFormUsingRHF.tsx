import { useForm } from "react-hook-form";

interface FormData {
  firstName: string;
  lastName: string;
}

const RegisterFormUsingRHF = () => {
  const hookForm = useForm<FormData>();
  //console.log(hookForm);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm;

  //const fname = hookForm.register("firstName");
  //console.log("form", hookForm);
  //console.log("firstname", fname);

  const formSubmit = (data: FormData) => {
    //console.log(hookForm);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          id="firstName"
          className="form-control"
          {...register("firstName", {
            required: true,
            minLength: 3,
            pattern: /^[a-zA-Z]+$/,
          })}
        ></input>

        {errors?.firstName?.type === "required" && (
          <p className="text-danger">First Name is required.</p>
        )}
        {errors?.firstName?.type === "minLength" && (
          <p className="text-danger">Minimum 3 chars.</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p className="text-danger">Only chars.</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          className="form-control"
          {...register("lastName", { required: true, minLength: 5 })}
        ></input>
        {errors?.lastName?.type === "required" && (
          <p className="text-danger">Last Name is required.</p>
        )}
        {errors?.lastName?.type === "minLength" && (
          <p className="text-danger">Minimum 5 chars.</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterFormUsingRHF;
