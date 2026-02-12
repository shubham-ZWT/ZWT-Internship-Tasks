import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counter";
import { login, logout } from "./redux/slices/auth";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handelLogin = () => {
    const userData = { name: "John Doe", email: "john@example.com" };
    dispatch(login(userData));
  };

  return (
    <>
      <h2>Count:{count}</h2>
      <div className="btns">
        <button onClick={() => dispatch(increment())}>Increment Counter</button>
        <button onClick={() => dispatch(decrement())}>Derement Counter</button>
      </div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>UnAuthenticated</h1>
          <button onClick={handelLogin}>Login</button>
        </div>
      )}
    </>
  );
}

export default App;
