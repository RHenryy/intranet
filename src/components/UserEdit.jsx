import React, { useState } from "react";
import styled from "styled-components";

const UserEdit = (props) => {
  const [civilite, setCivilite] = useState("");
  const [category, setCategory] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errors, setErrors] = useState({});

  const checkEmptyFields = () => {
    const emptyFields = {};
    if (!nom) emptyFields.nom = "Veuillez saisir votre nom";
    if (!prenom) emptyFields.prenom = "Veuillez saisir votre prénom";
    if (!email) emptyFields.email = "Veuillez saisir votre email";
    if (!password) emptyFields.password = "Veuillez saisir votre mot de passe";
    if (!phone) emptyFields.phone = "Veuillez saisir votre téléphone";
    if (!dateOfBirth)
      emptyFields.dateOfBirth = "Veuillez saisir votre date de naissance";
    if (!ville) emptyFields.ville = "Veuillez saisir votre ville";
    if (!pays) emptyFields.pays = "Veuillez saisir votre pays";
    if (!photoUrl) emptyFields.photoUrl = "Veuillez ajouter une URL";
    return emptyFields;
  };

  const genderOptions = ["Homme", "Femme"];
  const categoryOptions = ["Marketing", "Technique", "Client"];

  const handleSubmit = (event) => {
    event.preventDefault();
    const emptyFields = checkEmptyFields();
    setErrors(emptyFields);
    if (Object.keys(emptyFields).length === 0) {
      // Soumettre le formulaire
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Modifier mon profile</Title>
      <FormGroup>
        <Label>Civilité :</Label>
        <Select
          defaultValue={props.civilite}
          placeholder="Homme"
          onChange={(event) => setCivilite(event.target.value)}
        >
          {genderOptions.map((civilite) => (
            <option key={civilite} value={civilite}>
              {civilite}
            </option>
          ))}
        </Select>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Catégorie :</Label>
        <Select
          defaultValue={props.category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Nom :</Label>
        <Input
          type="text"
          defaultValue={props.nom}
          placeholder="Wick"
          onChange={(event) => setNom(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Prénom :</Label>
        <Input
          type="text"
          defaultValue={props.prenom}
          placeholder="John"
          onChange={(event) => setPrenom(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Email :</Label>
        <Input
          type="text"
          defaultValue={props.email}
          placeholder="John.wick@outlook.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Mot de passe :</Label>
        <Input
          type="text"
          defaultValue={password}
          placeholder="(min. 8 caractères)"
          onChange={(event) => setPassword(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Téléphone :</Label>
        <Input
          type="text"
          defaultValue={props.phone}
          placeholder="07 89 01 23 45"
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Date d'anniversaire :</Label>
        <Input
          type="date"
          defaultValue={props.dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Ville :</Label>
        <Input
          type="text"
          defaultValue={props.ville}
          placeholder="Los angeles"
          onChange={(event) => setVille(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Pays :</Label>
        <Input
          type="text"
          defaultValue={props.pays}
          placeholder="Etats-Unis"
          onChange={(event) => setPays(event.target.value)}
        />
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Photo URL :</Label>
        <Input
          type="text"
          defaultValue={props.photoUrl}
          placeholder="Https://"
          onChange={(event) => setPhotoUrl(event.target.value)}
        />
      </FormGroup>
      {Object.keys(errors).length > 0 && (
        <ErrorMessage>
          {Object.values(errors).map((error) => (
            <p>{error}</p>
          ))}
        </ErrorMessage>
      )}
      <Button type="submit">Modifier</Button>
    </form>
  );
};
export default UserEdit;

const Title = styled.h2`
  font-size: 50px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
  text-align: right;
  flex: 1;
`;

const Input = styled.input`
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: auto;
  flex: 2;
`;

const Select = styled.select`
  padding: 8px 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: auto;
  flex: 2;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 8px;
  border-radius: 3px;
  border: none;
  background-color: #f04b4b;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f95e5e;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;
