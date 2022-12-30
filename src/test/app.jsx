import React from "react";
import Component from "..";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h2 style={{ margin: "12px 4px" }}>React Component</h2>
      </header>
      <main>
        <Component />
      </main>
    </div>
  );
};

export default App;
