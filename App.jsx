import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    setHeading(name);
    // By default form refreshes again and again so our text vanishes check by commenting this below line
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
