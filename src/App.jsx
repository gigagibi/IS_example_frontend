import React, { useState, useEffect } from "react";

// import "./styles/App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import { Router } from "./components/Router";
import axios from "axios";


// const [posts, setPosts] = useState('')

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState('')

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setAuth(true)
      setToken(localStorage.getItem('token'))
      setRole(localStorage.getItem('role'))
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      login, setLogin, auth, setAuth, token, setToken, role, setRole
    }}>
      <BrowserRouter>
        <NavBar/>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}
export default App;
