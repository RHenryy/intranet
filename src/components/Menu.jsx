import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

function Menu() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { isLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="logo">
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          Intranet
        </Link>
      </div>
      {isLogin && (
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/listUsers"
        >
          Liste
        </Link>
      )}
      {isAdmin && (
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/addUser"
        >
          Nouvel Utilisateur
        </Link>
      )}
      {isLogin && (
        <img
          onClick={() => navigate("/profile")}
          className="menu-image"
          src={JSON.parse(localStorage.getItem("user")).photo}
          alt="user"
        />
      )}
      {isLogin && (
        <div className="loginButton">
          <FontAwesomeIcon style={{ color: "black" }} icon={faRightToBracket} />
          {isLogin && (
            <Link
              style={{ color: "black", textDecoration: "inherit" }}
              to="/logout"
            >
              {" "}
              Déconnexion
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: #ffff;
  font-size: 1rem;
  padding: 8px 16px;

  &:hover {
    background-color: #f95e5e;
    border-radius: 3px;
  }

  & > svg {
    margin-right: 8px;
  }
`;
