import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRandom } from "../js/randomUserSlice";
import RandomUsers from "./RandomUsers";

export default function HomePage() {
  const dispatch = useDispatch();
  const { random } = useSelector((state) => state.randomUser);

  useEffect(() => {
    dispatch(fetchUsersRandom());
  }, []);

  return (
    <div>
      <h1>Bienvenue sur l'intranet</h1>
      <hr />
      <p>
        La plateforme de l'entreprise qui vous permet de retrouver vos
        collaborateurs.
      </p>

      <div className="randomUser">
        <p>Avez-vous dit bonjour à :</p>
        <RandomUsers
          key={random.index}
          id={random.id}
          lastname={random.lastname}
          firstname={random.firstname}
          photo={random.photo}
          birthdate={random.age}
          email={random.email}
          city={random.city}
          country={random.country}
          phone={random.phone}
          category={random.category}
          birthday={random.birthday}
        />
        <button onClick={() => dispatch(fetchUsersRandom())}>
          Dire Bonjour à Quelqu'un d'autre
        </button>
      </div>
    </div>
  );
}
