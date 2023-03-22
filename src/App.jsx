import { useEffect } from "react";
import "./App.css";
import Users from "./users";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./js/userSlice";
import Menu from "./component/Menu";

function App() {
  const { data } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div className="App">
      <Menu />
      {data.length > 0 &&
        data.map((item, index) => {
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
      <button style={{ margin: "1rem" }} onClick={() => dispatch(fetchUsers())}>
        Fetch Users
      </button>
    </div>
  );
}

export default App;
