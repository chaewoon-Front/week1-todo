// src/App.js

import React from "react";

function App() {
  function onClickHandler() {
    console.log("hello, button");
  }

  return (
    <div>
      <button onClick={onClickHandler}>버튼</button>
    </div>
  );
}

export default App;
