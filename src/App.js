import React, { useState } from "react";
import List from "./component/List";
import data from "./data/data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h4>{people.length} birthdays today</h4>

        <List people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
