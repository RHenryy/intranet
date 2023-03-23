import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../js/userSlice";
import Users from "./Users";
import FilterUsers from "./FilterUsers";
import React from "react";

export default function UsersList() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(fetchUsers);
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <FilterUsers data={data} />
      <div className="wrapper">
        {data.length > 0 &&
          data.map((item, index) => {
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
                />
              </React.Fragment>
            );
          })}
      </div>
    </div>
    //   <CreateNewUserForm />
  );
}
