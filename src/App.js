import React, { useState, useEffect } from "react";
import "./styles/App.css";

import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

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
    fetch("http://localhost:54/api/office/")
    .then((data) => data.json()
    .then(d => setState({ offices: d, isLoaded: true })))
  })

  return (
    <div>
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={post} title="Javascript" />
      <PostList posts={post2} title="Python" />
      <ul>
        {state.offices.map(office => {
          <li key={office.officeId}>{office}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
