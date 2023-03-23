import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterName,
  filterCategory,
  filterCategoryOnly,
} from "../js/userSlice";

export default function FilterUsers(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("name");
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearchQuery(e.target.value);
    if (value) {
      dispatch(
        filterCategory({
          input: e.target.value,
          filter: filter,
          category: value,
        })
      );
    } else dispatch(filterName({ input: e.target.value, filter: filter }));
  }
  function handleCategory(e) {
    setValue(e.target.value);
    dispatch(filterCategoryOnly(e.target.value));
  }
  function handleFilters(e) {
    setFilter(e.target.value);
  }

  return (
    <form className="filterForm" action="">
      <input
        type="text"
        name="searchField"
        onChange={handleChange}
        placeholder="Rechercher un utilisateur"
        value={searchQuery}
      />
      <select onChange={handleFilters} name={filter} id="">
        <option value="name">Nom</option>
        <option value="city">Localisation</option>
      </select>
      <select onChange={handleCategory} name="category" id="">
        <option value="">- Aucun -</option>
        <option value="Marketing">Marketing</option>
        <option value="Technique">Technique</option>
        <option value="Client">Client</option>
      </select>
    </form>
  );
}
