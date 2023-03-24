import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../js/userSlice";
import Users from "./Users";
import FilterUsers from "./FilterUsers";
import React from "react";
import { AdminContext } from "../context/AdminContext";

export default function UsersList() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const dispatch = useDispatch();
  const { data, filteredData } = useSelector((state) => state.allUsers);
  const allusers = JSON.parse(localStorage.getItem("users"));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <FilterUsers />
      <div className="wrapper">
        {filteredData.length > 0 &&
          filteredData.map((item, index) => {
            return (
              <React.Fragment key={item.id}>
                <Users
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
                  isAdmin={item.isAdmin}
                />
              </React.Fragment>
            );
          })}
      </div>
    </div>
    //   <CreateNewUserForm />
  );
}
