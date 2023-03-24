import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import UserEdit from "./UserEdit";
import { useSelector } from "react-redux";
import { userData } from "../js/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function userProfile() {
  const { user } = useSelector((state) => state.allUsers);
  let currentuser = localStorage.getItem("current-user");
  let localData = JSON.parse(localStorage.getItem("user-" + currentuser));

  const dispatch = useDispatch();

  useEffect(() => {
    if (localData) {
      dispatch(userData(localData));
    }
  }, []);
  return (
    <div className="card-container-profile">
      <div className="category">
        {user.category === "Marketing" && (
          <p className="bg-solid-pink category">{user.category}</p>
        )}
        {user.category === "Client" && (
          <p className="bg-solid-green category">{user.category}</p>
        )}
        {user.category === "Technique" && (
          <p className="bg-solid-blue category">{user.category}</p>
        )}
      </div>
      <div className="custom-card">
        <div className="card-image">
          <img src={user.photo} alt={user.lastname} />
        </div>
        <div className="card-text">
          <p className="name">
            <span className="bold">
              {user.firstname} {user.lastname}
            </span>{" "}
            ({user.age} ans)
          </p>
          <p className="smaller">
            {user.city}, {user.country}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faEnvelope} /> {user.email}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faPhone} /> {user.phone}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faCakeCandles} /> Anniversaire :{" "}
            {user.birthday}
          </p>
        </div>
      </div>
      <UserEdit
        id={user.id}
        age={user.age}
        birthday={user.birthday}
        civilite={user.gender}
        category={user.category}
        nom={user.lastname}
        prenom={user.firstname}
        password={user.password}
        email={user.email}
        phone={user.phone}
        birthdate={user.birthdate}
        ville={user.city}
        pays={user.country}
        photoUrl={user.photo}
      />
    </div>
  );
}

export default userProfile;
