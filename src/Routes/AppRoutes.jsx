import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import CreateNewUserForm from "../components/CreateNewUserForm";
import Logout from "../components/Logout";
import Menu from "../components/Menu";
import UsersList from "../components/UsersList";
import UserProfile from "../components/UserProfile";
import AdminUserEdit from "../components/AdminUserEdit";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

export function AppRoutes() {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("login"));
    setIsAdmin(localStorage.getItem("admin"));
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          {isLogin && <Route path="listUsers" element={<UsersList />} />}
          {/* <Route path="listUsers" element={<UsersList />} /> */}
          {isLogin && <Route path="addUser" element={<CreateNewUserForm />} />}
          {isLogin && <Route path="profile" element={<UserProfile />} />}
          {isLogin && isAdmin && (
            <Route path="editUser" element={<AdminUserEdit />} />
          )}
          {isLogin && <Route path="logout" element={<Logout />} />}
        </Routes>
      </AdminContext.Provider>
    </LoginContext.Provider>
  );
}
