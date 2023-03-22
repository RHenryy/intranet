import React, { useState } from "react";
import styled from "styled-components";

const CreateNewUserForm = () => {
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

  const genderOptions = ["Homme", "Femme"];
  const categoryOptions = ["Marketing", "Technique", "Client"];

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Créer un utilisateur</h2>
      <div>
        <Label>Civilité :</Label>
        <Select
          value={civilite}
          placeholder="Homme"
          onChange={(event) => setCivilite(event.target.value)}
        >
          {genderOptions.map((civilite) => (
            <option key={civilite} value={civilite}>
              {civilite}
            </option>
          ))}
        </Select>
      </div>
      <br />
      <div>
        <Label>Catégorie :</Label>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
      <br />
      <div>
        <Label>Nom :</Label>
        <Input
          type="text"
          value={nom}
          placeholder="Wick"
          onChange={(event) => setNom(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Prénom :</Label>
        <Input
          type="text"
          value={prenom}
          placeholder="John"
          onChange={(event) => setPrenom(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Email :</Label>
        <Input
          type="text"
          value={email}
          placeholder="John.wick@outlook.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Mot de passe :</Label>
        <Input
          type="text"
          value={password}
          placeholder="(min. 8 caractères)"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Téléphone :</Label>
        <Input
          type="text"
          value={phone}
          placeholder="07 89 01 23 45"
          onChange={(event) => setPhone(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Date d'anniversaire :</Label>
        <Input
          type="date"
          value={dateOfBirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Ville :</Label>
        <Input
          type="text"
          value={ville}
          placeholder="Los angeles"
          onChange={(event) => setVille(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Pays :</Label>
        <Input
          type="text"
          value={pays}
          placeholder="Etats-Unis"
          onChange={(event) => setPays(event.target.value)}
        />
      </div>
      <br />
      <div>
        <Label>Photo URL :</Label>
        <Input
          type="text"
          value={photoUrl}
          placeholder="Https://"
          onChange={(event) => setPhotoUrl(event.target.value)}
        />
      </div>
      <Button type="submit">Ajouter</Button>
    </form>
  );
};
export default CreateNewUserForm;

// const FormWrapper = styled.div`
//   max-width: 500px;
//   margin: 0 auto;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 1rem;
// `;

const Label = styled.label`
  display: flex;
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
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
