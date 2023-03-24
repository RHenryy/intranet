import React, { useState } from "react";

const AddUser = () => {
  const [errors, setErrors] = useState({});
  const [inputValue, setInputValue] = useState({
    civility: "",
    category: "",
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    city: "",
    country: "",
    photoUrl: "",
  });

  const checkEmptyFields = () => {
    const emptyFields = {};
    if (!inputValue.civility)
      emptyFields.civility = "Veuillez choisir une civilité";
    if (!inputValue.lastName)
      emptyFields.category = "Veuillez choisir une catégorie";
    if (!inputValue.category)
      emptyFields.lastName = "Veuillez saisir votre nom";
    if (!inputValue.firstName)
      emptyFields.firstName = "Veuillez saisir votre prénom";
    if (!inputValue.email) emptyFields.email = "Veuillez saisir votre email";
    if (!inputValue.password)
      emptyFields.password = "Veuillez saisir votre mot de passe";
    if (!inputValue.phone)
      emptyFields.phone = "Veuillez saisir votre téléphone";
    if (!inputValue.dateOfBirth)
      emptyFields.dateOfBirth = "Veuillez saisir votre date de naissance";
    if (!inputValue.city) emptyFields.city = "Veuillez saisir votre ville";
    if (!inputValue.country) emptyFields.country = "Veuillez saisir votre pays";
    if (!inputValue.photoUrl) emptyFields.photoUrl = "Veuillez ajouter une URL";
    return emptyFields;
  };

  const genderOptions = ["Homme", "Femme"];
  const categoryOptions = ["Marketing", "Technique", "Client"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyFields = checkEmptyFields();
    setErrors(emptyFields);
    if (Object.keys(emptyFields).length === 0) {
      // Soumettre le formulaire
    }
  };

  const pattern = new RegExp(
    "^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})([/\\w .-]*)*/?$"
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="addUserTitle">Créer un utilisateur</h2>
      <span className="formGroup">
        <label className="labelAddUser">* Civilité :</label>
        <select
          className="selectAddUser"
          value={inputValue.civility}
          placeholder="Homme"
          onChange={(e) =>
            setInputValue({ ...inputValue, civility: e.target.value })
          }
        >
          {genderOptions.map((civility, i) => (
            <option key={i} value={civility}>
              {civility}
            </option>
          ))}
        </select>
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Catégorie :</label>
        <select
          className="selectAddUser"
          value={inputValue.category}
          onChange={(e) =>
            setInputValue({ ...inputValue, category: e.target.value })
          }
        >
          {categoryOptions.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Nom :</label>
        <input
          className="inputAddUser"
          type="text"
          value={inputValue.lastName}
          placeholder="Wick"
          onChange={(e) =>
            setInputValue({ ...inputValue, lastName: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Prénom :</label>
        <input
          className="inputAddUser"
          type="text"
          value={inputValue.firstName}
          placeholder="John"
          onChange={(e) =>
            setInputValue({ ...inputValue, firstName: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Email :</label>
        <input
          className="inputAddUser"
          type="email"
          value={inputValue.email}
          placeholder="John.wick@outlook.com"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={(e) =>
            setInputValue({ ...inputValue, email: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Mot de passe :</label>
        <input
          className="inputAddUser"
          type="password"
          value={inputValue.password}
          placeholder="(min. 8 caractères)"
          onChange={(e) =>
            setInputValue({ ...inputValue, password: e.target.value })
          }
          pattern=".{8,}"
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Téléphone :</label>
        <input
          className="inputAddUser"
          type="text"
          value={inputValue.phone}
          placeholder="07 89 01 23 45"
          onChange={(e) =>
            setInputValue({ ...inputValue, phone: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Date d'anniversaire :</label>
        <input
          className="inputAddUser"
          type="date"
          value={inputValue.dateOfBirth}
          onChange={(e) =>
            setInputValue({ ...inputValue, dateOfBirth: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Ville :</label>
        <input
          className="inputAddUser"
          type="text"
          value={inputValue.city}
          placeholder="Los angeles"
          onChange={(e) =>
            setInputValue({ ...inputValue, city: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Pays :</label>
        <input
          className="inputAddUser"
          type="text"
          value={inputValue.country}
          placeholder="Etats-Unis"
          onChange={(e) =>
            setInputValue({ ...inputValue, country: e.target.value })
          }
        />
      </span>
      <br />
      <span className="formGroup">
        <label className="labelAddUser">* Photo URL :</label>
        <input
          className="inputAddUser"
          type="url"
          value={inputValue.photoUrl}
          placeholder="Https://"
          onChange={(e) =>
            setInputValue({ ...inputValue, photoUrl: e.target.value })
          }
          required
          pattern="https?://[^\s/$.?#].[^\s]*$"
        />
      </span>
      {Object.keys(errors).length > 0 && (
        <div className="errorMessage">
          {Object.values(errors).map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
      )}
      <button className="buttonSubmit" type="submit">
        Ajouter
      </button>
    </form>
  );
};
export default AddUser;
