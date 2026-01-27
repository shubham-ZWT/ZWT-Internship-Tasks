import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function WindowResize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handelResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handelResize);

    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, [size]);

  let device = "Desktop";
  if (size.width < 768) {
    device = "Mobile";
  } else if (size.width < 1024) {
    device = "Tablet";
  }
  return (
    <>
      <p> Size if for :{device}</p>
    </>
  );
}

// Exercise 3.3: Window Resize Listener
// Create component that tracks window width and height
// Use useEffect to add resize event listener
// Update state when window is resized
// Display current window dimensions
// Implement proper cleanup to remove listener
// Categorize screen size: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
// Show different UI based on screen size
// Add debouncing to reduce update frequency (bonus)
