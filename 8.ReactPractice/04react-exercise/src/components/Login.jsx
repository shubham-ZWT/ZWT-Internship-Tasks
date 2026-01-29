import React, { useState } from "react";
import authService from "../services/authService";

export default function Login() {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });

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

    const response = await authService.login(form);
    if (response.success) {
      console.log(response.success);
      localStorage.setItem("isAuthenticated", "true");
    }
    console.log(response);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handelSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            id="email"
            value={form.email}
            name="email"
            onChange={handelChange}
          />
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handelChange}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
}
