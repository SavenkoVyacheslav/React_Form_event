import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function onChangeHandler(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello{headingText} </h1>
      <form>
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
