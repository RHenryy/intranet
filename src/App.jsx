import { useState, useEffect, useContext } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import AddUser from "./components/AddUser";
import { LoginContext } from "./context/LoginContext";

function App() {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="App">
      {!isLogin && <LoginPage />}
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
      <AddUser />
        </div> 
        )}*/}
    </div>
  );
}

export default App;
