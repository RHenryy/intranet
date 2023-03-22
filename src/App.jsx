import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Users from "./components/Users";
import RandomUsers from "./components/RandomUsers";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./js/userSlice";
import { fetchUsersRandom } from "./js/randomUserSlice";
import LoginPage from "./components/LoginPage";

function App() {
  const { data } = useSelector((state) => state.allUsers);
  const { random } = useSelector((state) => state.randomUser);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers()), dispatch(fetchUsersRandom());
  }, []);
  console.log(random.idrandom);
  return (
    <div className="App">
      {!isLogin && <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}
      {isLogin && random && (
        <>
          <h2>Random User</h2>
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
            Change Random user
          </button>
        </>
      )}

      {isLogin && data.length > 0 && (
        <div>
          <h2>Liste des utilisateurs</h2>
          {data.map((item, index) => {
            return (
              <>
                <Users
                  key={item.index}
                  id={item.id}
                  lastname={item.lastname}
                  firstname={item.firstname}
                  photo={item.photo}
                  birthdate={item.age}
                  email={item.email}
                  city={item.city}
                  country={item.country}
                  phone={item.phone}
                  category={item.category}
                  birthday={item.birthday}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
