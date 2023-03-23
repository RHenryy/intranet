import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import UserEdit from "./UserEdit";

function UserProfile() {
  const userProfile = JSON.parse(localStorage.getItem("user"));
  if (userProfile.gender === "female") {
    userProfile.gender = "Femme";
  } else {
    userProfile.gender = "Homme";
  }
  return (
    <div className="card-container-profile">
      {/* <div className="category">
        {userProfile.category === "Marketing" && (
          <p className="bg-solid-pink category">{userProfile.category}</p>
        )}
        {userProfile.category === "Client" && (
          <p className="bg-solid-green category">{userProfile.category}</p>
        )}
        {userProfile.category === "Technique" && (
          <p className="bg-solid-blue category">{userProfile.category}</p>
        )}
      </div> */}
      <div className="custom-card">
        <div className="card-image">
          <img src={userProfile.photo} alt={userProfile.lastname} />
        </div>
        <div className="card-text">
          <p className="name">
            <span className="bold">
              {userProfile.firstname} {userProfile.lastname}
            </span>{" "}
            ({userProfile.age} ans)
          </p>
          <p className="smaller">
            {userProfile.city}, {userProfile.country}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faEnvelope} /> {userProfile.email}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faPhone} /> {userProfile.phone}
          </p>
          <p className="smaller">
            <FontAwesomeIcon icon={faCakeCandles} /> Anniversaire :{" "}
            {userProfile.birthday}
          </p>
        </div>
      </div>
      <UserEdit
        civilite={userProfile.gender}
        category={userProfile.category}
        nom={userProfile.lastname}
        prenom={userProfile.firstname}
        email={userProfile.email}
        phone={userProfile.phone}
        dateOfBirth={userProfile.birthdate}
        ville={userProfile.city}
        pays={userProfile.country}
        photoUrl={userProfile.photo}
      />
    </div>
  );
}

export default UserProfile;
