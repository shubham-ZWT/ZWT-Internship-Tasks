import React from "react";
import { useReducer } from "react";

const initialState = {
  values: {
    name: "",
    email: "",
    salary: "",
  },
  errors: {},
  isValid: false,
};

const ACTIONS = {
  UPDATE_FORM: "update-form",
  RESET_FORM: "reset-form",
  SET_ERRORS: "set-errors",
};

const validateForm = (values) => {
  console.log(values);
  const errors = {};

  if (!values.name.trim() || !values.email || !values.salary) {
    errors.all = "All fields are required";
  }

  if (values.name.length < 2) {
    errors.name = "Name must be greater than 2 char";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Invalid email format";
  } else if (Number(values.salary) <= 20000) {
    errors.salary = "Salary must be Greater than 20000";
  }

  return errors;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "reset-form":
      return initialState;
    case "update-form": {
      //   console.log("inside update form");
      //   console.log(action.field, action.field_value);

      const updatedValues = {
        ...state.values,
        [action.field]: action.field_value,
      };

      const errors = validateForm(updatedValues);
      return {
        values: updatedValues,
        errors,
        isValid: Object.keys(errors).length === 0,
      };
    }
    default:
      return state;
  }
};

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    dispatch({ type: ACTIONS.UPDATE_FORM, field: name, field_value: value });
    // console.log(initialState);
  };

  const handelFormSubmimt = (e) => {
    console.log("inside submit");
    e.preventDefault();
    console.log(state);
    if (!state.isValid) {
      return;
    }
    console.log("Form Submitted !!");
  };

  const handelReset = () => {
    dispatch({ type: ACTIONS.RESET_FORM });
  };

  return (
    <>
      <div className="form">
        <form action="" onSubmit={handelFormSubmimt}>
          <label htmlFor="name" id="name" name="name">
            Name :{" "}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={state.values.name}
            onChange={handelChange}
          />

          <label htmlFor="email" name="email" id="email">
            Email :{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={state.values.email}
            onChange={handelChange}
          />

          <label htmlFor="salary" id="salary" name="salary">
            Salary :{" "}
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={state.values.salary}
            onChange={handelChange}
          />
          <input type="submit" />
        </form>
        <button onClick={handelReset}>Reset Form</button>
      </div>
    </>
  );
}
