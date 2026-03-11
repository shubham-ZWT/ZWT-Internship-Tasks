import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import toast from "react-hot-toast";

export default function Login() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);
      toast.success("Login Successful!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Check your email/password.");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="border p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 w-64">
            <div className="flex flex-col">
              <label className="text-sm font-medium">Email</label>
              <input
                className="border p-2 rounded-md"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                className="border p-2 rounded-md"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="bg-purple-500 text-white p-2 rounded-full disabled:bg-purple-300"
              type="submit"
            >
              {isSubmitting ? "Authenticating..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
