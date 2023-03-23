import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

export default function Logout() {
  const { setIsLogin } = useContext(LoginContext);
  const { setIsAdmin } = useContext(AdminContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  });
  return <div>...Logout</div>;
}
