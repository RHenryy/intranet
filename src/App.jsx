import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Users from "./components/Users";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./js/userSlice";
import LoginPage from "./components/LoginPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const { data } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {!isLogin && <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}

      {isLogin &&
        data.length > 0 &&
        data.map((item) => {
          return (
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
          );
        })}
    </div>
  );
}

export default App;
