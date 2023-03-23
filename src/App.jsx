import { useState, useEffect, useContext } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import CreateNewUserForm from "./components/CreateNewUserForm";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLogin } = useContext(LoginContext);
  return (
    <div className="App">
      {!isLogin && <LoginPage />}
      {isLogin && <HomePage />}
    </div>
  );
}

export default App;
