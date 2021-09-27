import React, { useState } from "react";

function App() {
  const [input, setInput] = useState({
    password: ""
  });
  var length = input.password.length; // for acessingthe digits in password

  var allCase = Math.floor(Math.pow(74, length) / 15e9);
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>CHECK YOUR PASSWORD STRENGTH HERE !!!</h1>

      <input
        onChange={handleChange}
        name="password"
        value={input.password}
        placeholder="Enter Your Password"
        type="password"
      />
      <h3>It will Take </h3>
      <div>
        {allCase <= 0 ? (
          <h1 style={{ color: "#ff0000" }}>Instantly</h1>
        ) : allCase <= 60 ? (
          <h1 style={{ color: "#ff0000" }}>{allCase} Sec</h1>
        ) : allCase <= 3600 ? (
          <h1 style={{ color: "#ff0000" }}>
            {Math.round(allCase / 60)} Minutes
          </h1>
        ) : allCase <= 86400 ? (
          <h1 style={{ color: "#ff0000" }}>
            {Math.round(allCase / 3600)}Hours
          </h1>
        ) : allCase <= 604800 ? (
          <h1 style={{ color: "#ff3d0d" }}>
            {Math.round(allCase / (3600 * 24))} Days
          </h1>
        ) : allCase <= 2419200 ? (
          <h1 style={{ color: "#ffcc00" }}>
            {Math.round(allCase / (3600 * 24 * 4))} Weeks
          </h1>
        ) : allCase <= 29030400 ? (
          <h1 style={{ color: "#ccff33" }}>
            {Math.round(allCase / (3600 * 24 * 4 * 12))} Months
          </h1>
        ) : allCase <= 1500304000 ? (
          <h1 style={{ color: "#00ff00" }}>
            {Math.round(allCase / (3600 * 24 * 4 * 12 * 12))} Years
          </h1>
        ) : allCase > 29e8 ? (
          <h1 style={{ color: "#00cc00" }}>
            {Math.floor(allCase / 4.14e8)} Hundred Years
          </h1>
        ) : null}
      </div>

      <h3> To Crack Your Password</h3>
    </div>
  );
}

export default App;
