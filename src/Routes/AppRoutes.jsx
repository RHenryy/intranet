import { Route, Routes } from "react-router-dom";
import App from "../App";
import UsersList from "../components/UsersList";

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/addUser" element={<AddUser />} />
      <Route path="/updateUser" element={<UpdateUser />} /> */}
      <Route path="/listUsers" element={<UsersList />} />
      <Route path="/" element={<App />} />
      {/* <Route
        path="/"
        render={() => (isLogin ? <Redirect to="/homepage" /> : null)}
      /> */}
    </Routes>
  );
}
