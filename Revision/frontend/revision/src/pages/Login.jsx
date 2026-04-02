import useAuth from "../store/authStore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    login(data);
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              className="border border-gray-200 w-fit"
            />

            <label htmlFor="password">Password</label>
            <input
              type="text"
              {...register("password")}
              className="border border-gray-200 w-fit"
            />
            <input
              type="submit"
              name="submit"
              id="submit"
              className="w-fit bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-2xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
}