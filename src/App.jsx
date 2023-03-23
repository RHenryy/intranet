import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import CreateNewUserForm from "./components/CreateNewUserForm";

function App() {
  // const { data } = useSelector((state) => state.allUsers);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <Menu />
      {!isLogin && <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}
      {isLogin && <HomePage />}
    </div>
  );
}

export default App;
