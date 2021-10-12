import React, { useState, useEffect } from "react";

function App() {
  const [post, setPost] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [post2, setPost2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python 2", body: "Description" },
    { id: 3, title: "Python 3", body: "Description" },
  ]);

  const [state, setState] = useState({ offices: [], isLoaded: false });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/").then((data) =>
      data
        .json()
        .then((d) => {
          setState({ offices: d, isLoaded: true });
          console.log({ d });
        })
        .catch(() => console.log("error!"))
    );
  }, []);

  console.log(state.isLoaded);
  console.log(state.offices.length);

  return (
    <div>
      <ul>
        {state.offices.map((office) => {
          return <li>
            <ul>
              <li key={office.id}>
                {office.body}
              </li>
              <li>
                {office.userId}
              </li>
            </ul>
          </li>
        })}
      </ul>
    </div>
  );
}

export default App;
