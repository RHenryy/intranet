import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bcryptjs from "bcryptjs";
import { fetchUsers } from "../js/userSlice";
import { LoginContext } from "../context/LoginContext";
import { AdminContext } from "../context/AdminContext";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allUsers);
  const { setIsLogin } = useContext(LoginContext);
  const { setIsAdmin } = useContext(AdminContext);
  const [error, setError] = useState("");

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
    // data.forEach((item) => {
    //   if (item.isAdmin === true) {
    //     localStorage.setItem("admin", true);
    //     setIsAdmin(true);
    //   }
    //   if (
    //     bcryptjs.compareSync(infosConnexion.password, item.password) &&
    //     item.email == infosConnexion.email
    //   ) {
    //     localStorage.setItem("login", true);
    //     setIsLogin(true);
    //     return;
    //   }
    // });
    let checkEmail = data.filter((user) =>
      user.email.toLowerCase().includes(infosConnexion.email.toLowerCase())
    );
    let checkPassword = bcryptjs.compareSync(
      infosConnexion.password,
      checkEmail[0].password
    );
    if (checkEmail.length > 0 && checkPassword) {
      localStorage.setItem("login", true);
      localStorage.setItem("user", JSON.stringify(checkEmail[0]));
      setIsLogin(true);
      if (checkEmail[0].isAdmin) {
        localStorage.setItem("admin", true);
        setIsAdmin(true);
      }
    } else setError("Email ou mot de passe incorrect");
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
      {error && <p style={{ color: "red" }}>{error}</p>}

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
