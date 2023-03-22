import { Route, Routes } from "react-router-dom";
import App from "../App";

export function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/addUser" element={<AddUser />} />
      <Route path="/updateUser" element={<UpdateUser />} /> */}
      {/* <Route path="/listUsers" element={<ListUsers />} /> */}
      <Route path="/" element={<App />} />
      {/* <Route
        path="/"
        render={() => (isLogin ? <Redirect to="/homepage" /> : null)}
      /> */}
    </Routes>
  );
}
