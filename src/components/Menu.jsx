import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../context/LoginContext";
import { AdminContext } from "../context/AdminContext";

function Menu() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  return (
    <Nav>
      <Logo>Intranet</Logo>
      {isLogin && <Link to="/listUsers">Liste</Link>}
      {isAdmin && <Link to="/addUser">Nouvelle Utilisateur</Link>}
      {!isLogin && (
        <LoginButton>
          <FontAwesomeIcon icon={faRightToBracket} />
          Connexion
        </LoginButton>
      )}
      {isLogin && <Link to="">Déconnexion</Link>}
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
