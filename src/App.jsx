import { useState, useEffect, useContext } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import AddUser from "./components/AddUser";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLogin } = useContext(LoginContext);
  // localStorage.clear();
  return (
    <div>
      {!isLogin && <LoginPage />}
      {isLogin && <HomePage />}

    </div>
  );
}

export default App;
