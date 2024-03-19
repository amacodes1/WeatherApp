import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar container">
      <div className="navlogo font-aldrich">
        <a href="/">Weatherly</a>
      </div>
      <div className={`${"navitems font-aldrich"} ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/download">Download App</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className={`${"navitems"} ${isOpen && "open"}`}>
        <a
          href="/signup"
          className="border rounded-md py-2 px-3 bg-blue-900 font-aldrich"
        >
          Sign Up
        </a>
      </div>
      <div
        className={`${"navtoggle"} ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
