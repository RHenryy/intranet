import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bcryptjs from "bcryptjs";
import { fetchUsers } from "../js/userSlice";
import { LoginContext } from "../context/LoginContext";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allUsers);
  const { setIsLogin } = useContext(LoginContext);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const [infosConnexion, setInfosConnexion] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // test des infos de connexions
    data.forEach((item) => {
      if (
        bcryptjs.compareSync(infosConnexion.password, item.password) &&
        item.email == infosConnexion.email
      ) {
        localStorage.setItem("login", true);
        setIsLogin(true);
        return;
      }
    });
  }

  function handleChange(event) {
    setInfosConnexion((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <h1>Connexion</h1>
      <hr />
      <p>
        Pour vous connecter à l'intranet, entrez votre identifiant et mot de
        passe.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={infosConnexion.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={infosConnexion.password}
        />
        <input type="submit" value="connexion" />
      </form>
    </div>
  );
}
