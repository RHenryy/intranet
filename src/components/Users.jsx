import { useState, useContext } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { AdminContext } from "../context/AdminContext";
import { deleteUsers } from "../js/userSlice";
import { useDispatch } from "react-redux";

function Users(props) {
  const { isAdmin } = useContext(AdminContext);
  const dispatch = useDispatch();
  return (
    <div key={props.id} className="card-container">
      <div className="category">
        {props.category === "Marketing" && (
          <p className="bg-solid-pink category">{props.category}</p>
        )}
        {props.category === "Client" && (
          <p className="bg-solid-green category">{props.category}</p>
        )}
        {props.category === "Technique" && (
          <p className="bg-solid-blue category">{props.category}</p>
        )}
      </div>
      <div className="custom-card">
        <div className="card-image">
          <img src={props.photo} alt={props.lastname} />
        </div>
        <div className="card-text">
          <p className="name">
            <span className="bold">
              {props.firstname} {props.lastname}
            </span>{" "}
            ({props.birthdate} ans)
          </p>
          <p className="smaller">
            {props.city}, {props.country}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faEnvelope} /> {props.email}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faPhone} /> {props.phone}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faCakeCandles} /> Anniversaire :{" "}
            {props.birthday}
          </p>
          {isAdmin && (
            <div>
              <button
                className="button-change"
                onClick={() => dispatch(deleteUsers(props.id))}
              >
                Delete User
              </button>
              <button className="button-change">Edit User</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
