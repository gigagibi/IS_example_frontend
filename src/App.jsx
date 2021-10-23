import React, { useState, useRef, useEffect } from "react";

import "./styles/App.css";
import { HeaderBar } from "./components/HeaderBar";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

// const [posts, setPosts] = useState('')

function App() {
  const [offices, setOffices] = useState([]);

  async function fetchOf() {
    const response = await axios.get("http://localhost:88/api/office/");
    setOffices(response.data);
    // console.log(response.data);
    console.log(offices);
  }

  useEffect(() => {
    fetchOf();
  }, []);

  const [auth, setAuth] = useState(false)
  return (
    <BrowserRouter>
      <Route path="/login">
        auth
        ?
        <Autho
        </Route>
      <Route path="/home">Home</Route>
      <Route path="/departments">departments</Route>
      <Route path="/find_employers">find_employers</Route>
      <Route path="/find_employers/result">founded</Route>
      <Route path="/tabel">tabel</Route>
      <Route path="/tasks">tasks</Route>
      <Route path="/offices">
        <ul>
          {offices.map((office) => {
            return <li key={office.officeId}>{office.officeId} : {office.address}</li>;
          })}
        </ul>
      </Route>
    </BrowserRouter>
  );
}
export default App;
