import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

export default function Logout() {
  const { setIsAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  const { setIsLogin } = useContext(LoginContext);

  useEffect(() => {
    localStorage.removeItem("login");
    localStorage.removeItem("admin");
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  });
  return <div>...Logout</div>;
}
