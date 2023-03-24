import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { AdminContext } from "../context/AdminContext";
import { LoginContext } from "../context/LoginContext";

function Menu() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const { isLogin } = useContext(LoginContext);

  return (
    <Nav>
      <Logo>
        <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
          Intranet
        </Link>
      </Logo>
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
        <Link to="/profile">
          <img
            className="menu-image"
            src={JSON.parse(localStorage.getItem("user")).photo}
            alt="user"
          />
        </Link>
      )}
      {isLogin && (
        <LoginButton>
          <FontAwesomeIcon style={{ color: "black" }} icon={faRightToBracket} />
          {isLogin && (
            <Link
              style={{ color: "black", textDecoration: "inherit" }}
              to="/logout"
            >
              Déconnexion
            </Link>
          )}
        </LoginButton>
      )}
    </Nav>
  );
}

export default Menu;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f04b4b;
  height: 50px;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

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
