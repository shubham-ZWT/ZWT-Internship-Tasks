import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Notification() {
  const [counter, setCounter] = useState(0);
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    document.title = `Count${counter} | ${notifications}`;

    return () => {
      document.title = "React App";
    };
  }, [counter, notifications]);

  return (
    <>
      <div>Document Title sync</div>

      <button onClick={() => setCounter((prev) => prev + 1)}>
        Increment Count
      </button>
      <button onClick={() => setNotifications((prev) => prev + 1)}>
        Add Notification
      </button>

      <button onClick={() => setNotifications(0)}>Clear Notifications</button>
    </>
  );
}
