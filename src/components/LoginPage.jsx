import { hashSync } from "bcrypt";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { LoginContext } from "../context/LoginContext";
// import bcrypt from "bcrypt";

export default function LoginPage() {
  const { islogin, setIsLogin } = useContext(LoginContext);
  const { data } = useSelector((state) => state.allUsers);
  const [infosConnexion, setInfosConnexion] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    // test des infos de connexions
    // const password = hashSync(infosConnexion.password);
    // console.log(password);
    data.forEach((item) => {
      if (
        item.password == infosConnexion.password &&
        item.email == infosConnexion.email
      ) {
        setIsLogin(true);
      } else {
        throw new Error("falsy information");
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
