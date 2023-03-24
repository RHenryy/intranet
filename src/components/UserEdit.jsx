import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../js/userSlice";

const UserEdit = (props) => {
  const dispatch = useDispatch();
  const [userData, setUserProfile] = useState({
    id: props.id,
    age: props.age,
    birthdate: props.birthdate,
    gender: props.civilite,
    category: props.category,
    lastname: props.nom,
    firstname: props.prenom,
    email: props.email,
    password: props.password,
    phone: props.phone,
    birthday: props.birthday,
    city: props.ville,
    country: props.pays,
    photo: props.photoUrl,
  });
  useEffect(() => {
    setUserProfile({
      id: props.id,
      age: props.age,
      birthdate: props.birthdate,
      gender: props.civilite,
      category: props.category,
      lastname: props.nom,
      firstname: props.prenom,
      email: props.email,
      password: props.password,
      phone: props.phone,
      birthday: props.birthday,
      city: props.ville,
      country: props.pays,
      photo: props.photoUrl,
    });
  }, [props]);
  const genderOptions = ["Homme", "Femme"];
  const categoryOptions = ["Marketing", "Technique", "Client"];

  const handleSubmit = (event) => {
    event.preventDefault();
    // const emptyFields = checkEmptyFields();
    // setErrors(emptyFields);
    // if (Object.keys(emptyFields).length === 0) {
    //   // Soumettre le formulaire

    // }
    dispatch(updateUser(userData));
  };
  const handleDate = (event) => {
    let birthdate = new Date(event.target.value).getTime();
    let dateToday = new Date();
    let diff = dateToday.getTime() - birthdate;
    let diff_days = diff / (1000 * 3600 * 24);
    let diff_years = diff_days / 365;
    setUserProfile((prevState) => ({
      ...prevState,
      age: Math.round(diff_years) - 1,
      birthday: new Date(event.target.value).toLocaleDateString("fr-FR", {
        month: "long",
        day: "numeric",
      }),
      birthdate: event.target.value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Modifier mon profile</h1>
      <div className="formGroup">
        <label className="form-label">Civilité :</label>
        <select
          className="form-select"
          defaultValue={props.civilite}
          placeholder="Homme"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              gender: event.target.value,
            }))
          }
        >
          {genderOptions.map((civilite) => (
            <option key={civilite} value={civilite}>
              {civilite}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Catégorie :</label>
        <select
          className="form-select"
          defaultValue={props.category}
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              category: event.target.value,
            }))
          }
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Nom :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.nom}
          placeholder="Wick"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              lastname: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Prénom :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.prenom}
          placeholder="John"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              firstname: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Email :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.email}
          placeholder="John.wick@outlook.com"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Mot de passe :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.password}
          placeholder="(min. 8 caractères)"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              password: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Téléphone :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.phone}
          placeholder="07 89 01 23 45"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              phone: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Date de Naissance :</label>
        <input
          className="form-input"
          type="date"
          defaultValue={props.birthdate}
          onChange={handleDate}
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Ville :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.ville}
          placeholder="Los angeles"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              city: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Pays :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.pays}
          placeholder="Etats-Unis"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              country: event.target.value,
            }))
          }
        />
      </div>
      <br />
      <div className="formGroup">
        <label className="form-label">Photo URL :</label>
        <input
          className="form-input"
          type="text"
          defaultValue={props.photoUrl}
          placeholder="Https://"
          onChange={(event) =>
            setUserProfile((prevState) => ({
              ...prevState,
              photo: event.target.value,
            }))
          }
        />
      </div>
      {/* {Object.keys(errors).length > 0 && (
        <div className="errorMessage">
          {Object.values(errors).map((error) => (
            <p>{error}</p>
          ))}
        </div>
      )} */}
      <button className="buttonSubmit" type="submit">
        Modifier
      </button>
    </form>
  );
};
export default UserEdit;

// const input = styled.input`
//   padding: 8px 10px;
//   border-radius: 3px;
//   border: 1px solid #ccc;
//   width: auto;
//   flex: 2;
// `;

// const Select = styled.select`
//   padding: 8px 10px;
//   border-radius: 3px;
//   border: 1px solid #ccc;
//   width: auto;
//   flex: 2;
// `;

// const Button = styled.button`
//   width: 200px;
//   padding: 10px 15px;
//   margin: 8px;
//   border-radius: 3px;
//   border: none;
//   background-color: #f04b4b;
//   color: #fff;
//   cursor: pointer;

//   &:hover {
//     background-color: #f95e5e;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red;
// `;
