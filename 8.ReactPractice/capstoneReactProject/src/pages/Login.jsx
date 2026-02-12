import React, { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handelChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFrom((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (form.email === "" || form.password === "") {
      alert("All fields are necessary");
    }

    console.log("before the login called");
    try {
     
      await login(form);

      
      navigate("/dashboard");
    } catch (error) {
      console.error("Login navigation failed", error);
    }

    // const response = await authService.login(form);
    // if (response.success) {
    //   console.log(response.success);
    //   localStorage.setItem("isAuthenticated", "true");
    // }
    // console.log(response);
  };

  return (
    <>
      <div className="flex w-full h-screen justify-center items-center">
        <div className="border w-fit flex flex-col gap-2 rounded-xl p-8 items-center">
          <h2 className="font-bold tracking-tighter text-2xl">Login</h2>
          <form action="" onSubmit={handelSubmit}>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={form.email}
                name="email"
                onChange={handelChange}
                className="border border-gray-400"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handelChange}
                className="border border-gray-400"
              />

              <input
                className="bg-amber-800 text-white hover:bg-amber-700 px-5 py-1 rounded-full"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
