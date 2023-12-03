import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterFormUsingZod = () => {
  const schema = z.object({
    firstName: z
      .string()
      .min(3, { message: "firstName should be min 3 chars" }),
    lastName: z.string().min(5, { message: "lastName should be min 5 chars" }),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const formSubmit = (data: FieldValues) => {
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
          {...register("firstName")}
        ></input>
        {errors.firstName && (
          <p className="text-danger">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          id="lastName"
          className="form-control"
          {...register("lastName")}
        ></input>
        {errors.lastName && (
          <p className="text-danger">{errors.lastName.message}</p>
        )}
      </div>
      <button className="btn btn-primary" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default RegisterFormUsingZod;
