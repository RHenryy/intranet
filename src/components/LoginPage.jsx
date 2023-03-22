import { useState } from "react";

export default function LoginPage({ isLogin, setIsLogin }) {
  const [infosConnexion, setInfosConnexion] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }

  function handleChange(event) {
    console.log(infosConnexion);
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
