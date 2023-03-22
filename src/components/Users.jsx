import { useState, useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../js/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Users(props) {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const handleChange = (e) => {
    setDisplay(!display);
  };
  return (
    <div className="card-container">
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
        </div>
      </div>
    </div>
  );
}

export default Users;
