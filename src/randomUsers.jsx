import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./js/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Randomusers(props) {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const handleChange = (e) => {
    setDisplay(!display);
  };
  return (
    <div className="App">
      {props.category === "Marketing" && (
        <p className="bg-solid-blue">{props.category}</p>
      )}
      {props.category === "Client" && (
        <p className="bg-solid-green">{props.category}</p>
      )}
      {props.category === "Technique" && (
        <p className="bg-solid-pink">{props.category}</p>
      )}

      <p>
        {props.firstname} {props.lastname} ({props.birthdate} ans)
      </p>
      <img src={props.photo} alt={props.lastname} />
      <p id={props.id} style={display ? {} : { display: "none" }}></p>
      <p>
        {props.city}, {props.country}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> {props.email}
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} /> {props.phone}
      </p>
      <p>
        <FontAwesomeIcon icon={faCakeCandles} /> Anniversaire : {props.birthday}
      </p>
    </div>
  );
}

export default Randomusers;
