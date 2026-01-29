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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <div>
            {" "}
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>Random User Data</h2>
            <div
              style={{
                backgroundColor: "#ACBAC4",
                color: "#30364F",
              
                borderRadius: "20px",
                padding:"10px"
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <img
                  src={userData.picture}
                  alt="User Profile Picture"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                  }}
                />
                <div>
                  <p>Name : {userData.name}</p>
                  <p>Email : {userData.email}</p>
                </div>
              </div>
            </div>
            <button
              onClick={fetchUser}
              style={{
                backgroundColor: "#E5D9B6",
                borderRadius: "10px",
                padding: "5px",
                marginTop: "10px",
                borderColor:"#30364F"
              }}
            >
              Get new User
            </button>
            <p>{error}</p>
          </div>
        )}
      </div>
    </>
  );
}
