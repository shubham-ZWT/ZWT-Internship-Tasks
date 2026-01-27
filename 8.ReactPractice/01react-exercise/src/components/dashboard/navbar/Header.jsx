import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <div className="header" style={{display:"flex",alignItems:"center", justifyContent:"center"}}>
      <Logo />
      <span>
        <Navigation />
      </span>
    </div>
  );
}
