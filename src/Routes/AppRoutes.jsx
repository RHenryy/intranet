import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Menu from "../components/Menu";
import UsersList from "../components/UsersList";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

export function AppRoutes() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="listUsers" element={<UsersList />} />
          <Route path="addUser" element={<CreateNewUserForm />} />
        </Routes>
      </AdminContext.Provider>
    </LoginContext.Provider>
  );
}
