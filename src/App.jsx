import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import CreateNewUserForm from "./components/CreateNewUserForm";


function App() {
  // const { data } = useSelector((state) => state.allUsers);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <Menu />
      {!isLogin && <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}
      {isLogin && <HomePage />}

      {/* {isLogin && data.length > 0 && (
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
      <CreateNewUserForm />
        </div> 
        )}*/}
    </div>
  );
}

export default App;
