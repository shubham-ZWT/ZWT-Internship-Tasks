import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function RandomUserApi() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    picture: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let retries = 3;
  const fetchUser = async () => {
    try {
      setIsLoading(true);
      if (retries > 0) {
        await axios
          .get("https://randomuser.me/api/")
          .then((res) => {
            console.log(res.data.results[0]);
            setUserData({
              name: res.data.results[0].name.first,
              email: res.data.results[0].email,
              picture: res.data.results[0].picture.large,
            });
            setIsLoading(false);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        setError(true);
      }
    } catch (error) {
      retries = retries - 1;
      fetchUser();
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <div>
            {" "}
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <h2>Random User Data</h2>
            <p>Name : {userData.name}</p>
            <p>Email : {userData.email}</p>
            <label htmlFor="profile"></label>
            <img src={userData.picture} alt="User Profile Picture" />

            <button onClick={fetchUser}>Get new User</button>
          </div>
        )}
        <p>{error}</p>
      </div>
    </>
  );
}
