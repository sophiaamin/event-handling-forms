import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [hoverState, setHoverState] = useState(false);

  function handleMouseOver() {
    setHoverState(true);
  }

  function handleMouseOut() {
    setHoverState(false);
  }

  function handleSubmit(event) {
    setName(text);
    event.preventDefault();
  }

  function handleText(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div className="container">
      <form>
        <h1>Hello {name}</h1>
        <input
          onChange={handleText}
          type="text"
          placeholder="What's your name?"
          value={text}
        />
        <button
          style={{ backgroundColor: hoverState ? "black" : "white" }}
          onClick={handleSubmit}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
