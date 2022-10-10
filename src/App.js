import React, { useState } from "react";
import List from "./component/List";

const App = () => {
  const [clearAll, setClearAll] = useState(true);

  const clearHandler = () => {
    setClearAll(clearAll.length - clearAll.length);
  };

  return (
    <main>
      <section className="container">
        <h4>5 birthdays today</h4>

        <List />
        <button onClick={clearHandler}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
