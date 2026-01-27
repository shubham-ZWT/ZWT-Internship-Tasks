import React from "react";
import { useState } from "react";
export default function EmployeeForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isValid = form.email !== "" && form.password !== "";
  const [isloading, setIsLoading] = useState(false);

  const handelOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((pres) => ({ ...pres, [name]: value }));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("All fields are necessary");
    }

    if (!form.email.includes("@")) {
      alert("Invalid email must include @");
    }
    if (form.password.length < 8) {
      alert("Password can not be smaller than 8 char");
    } else {
      setIsLoading(true);

      setTimeout(() => {
        setForm({ email: "", password: "" });
        setIsLoading(false);
      }, 2000);
    }
  };

  const handelRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };
  return (
    <>
      <div>
        <h2>Login Form</h2>
        <form action="" onSubmit={handelFormSubmit}>
          <label htmlFor="email">Email : </label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handelOnChange}
          />
          <br />
          <label htmlFor="password">Password : </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={form.password}
            onChange={handelOnChange}
          />

          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => {
              setShowPassword(e.target.checked);
            }}
          />

          <label htmlFor="showPassword">Show</label>
          <br />
          <label htmlFor="rememberMe">Remember Me ?</label>
          <input
            type="checkbox"
            name="rememberMe"
            value={rememberMe}
            onChange={handelRememberMe}
          />
          <br />
          <button type="submit" disabled={!isValid}>
            Submit Form
          </button>
        </form>
        <p style={isloading ? { display: "block" } : { display: "none" }}>
          Loading ...{" "}
        </p>
      </div>
    </>
  );
}
