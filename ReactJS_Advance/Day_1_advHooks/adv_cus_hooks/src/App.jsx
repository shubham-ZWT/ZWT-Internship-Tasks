import "./App.css";
import TextArea from "./components/TextArea";
import ParentForModal from "./components/ParentForModal";
import useToggle from "./hooks/useToggle";
import useLocalStorage from "./hooks/useLocalStorage";
import useDebounce from "./hooks/useDebounce";
import { useState } from "react";
import { AccordionDemo } from "./components/AccordionDemo";
import Dashboard from "./components/Dashboard";
import ToastProvider from "./context/ToastProvider";
import List from "./components/List";

function App() {
  const [value, toggle] = useToggle(false);
  const [username, setUsername] = useLocalStorage("username", "Guest");
  const [searchterm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchterm, 1000);

  const handelUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  console.log("Parent rendered! (This only happens ONCE on load)");
  return (
    <>
      {/* <TextArea />
      <ParentForModal /> */}
      {/* UseToggle custom hook */}
      <button onClick={() => toggle()} className="border border-gray-300">
        Use Toggle
      </button>
      <p>{value}</p>
      {/* useLocalStorage custom Hook */}
      <p>Welcome {username}</p>
      <label>Set the new UserName where in the Local Storage : </label>
      <input
        type="text"
        onChange={handelUsernameChange}
        value={username}
        className="border border-gray-400"
      />

      {/* UseDebounde */}
      <br />
      <label htmlFor="searchTerm">Use Debounce Search :</label>
      <input
        className="border border-gray-400"
        type="text"
        name=""
        id="searchTerm"
        value={searchterm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p>Debounced Value : {debouncedSearch}</p>

      {/* use InfiniteScroll hook */}
      <List />

      {/* Compound Component */}
      <AccordionDemo />

      {/* HOC and Portal Component */}
      <ToastProvider>
        <Dashboard />
      </ToastProvider>
    </>
  );
}

export default App;
