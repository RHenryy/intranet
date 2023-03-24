import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const response = await fetch("http://localhost:5173/src/data/users.json");
  return response.json();
});

export const fetchUsersApi = createSlice({
  name: "fetchUsersApi",
  initialState: {
    data: [],
    filteredData: [],
    deletedUsers: [],
    age: [],
    birthday: [],
    user: [],
    editingUser: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
      state.filteredData.push(action.payload);
      console.log(action.payload);
    },

    editUser: (state, action) => {
      state.editingUser = action.payload;
      console.log(action.payload);
    },
    userData: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(
        "user-" + action.payload.id,
        JSON.stringify(action.payload)
      );
      // state.filteredData[0] = action.payload;
    },

    deleteUsers: (state, action) => {
      state.filteredData = state.filteredData.filter(
        (user) => user.id !== action.payload
      );
    },
    filterName: (state, { payload }) => {
      if (payload.filter === "name") {
        state.filteredData = state.data.filter(
          (user) =>
            user.lastname
              .toLowerCase()
              .includes(payload.input.toLowerCase().replace(/\s+/g, "")) ||
            user.firstname
              .toLowerCase()
              .includes(payload.input.toLowerCase().replace(/\s+/g, ""))
        );
      }
      if (payload.filter === "city") {
        state.filteredData = state.data.filter((user) =>
          user.city.toLowerCase().includes(payload.input.toLowerCase())
        );
      }
    },
    filterCategory: (state, { payload }) => {
      if (payload.filter === "name") {
        state.filteredData = state.data.filter(
          (user) =>
            user.lastname
              .toLowerCase()
              .includes(payload.input.toLowerCase().replace(/\s+/g, "")) ||
            user.firstname
              .toLowerCase()
              .includes(payload.input.toLowerCase().replace(/\s+/g, ""))
        );
      }
      if (payload.filter === "city") {
        state.filteredData = state.data.filter((user) =>
          user.city.toLowerCase().includes(payload.input.toLowerCase())
        );
      }
      state.filteredData = state.filteredData.filter((user) =>
        user.category.toLowerCase().includes(payload.category.toLowerCase())
      );
    },
    filterCategoryOnly: (state, action) => {
      state.filteredData = state.data.filter((user) =>
        user.category.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {});
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      for (let i = 0; i < state.data.length; i++) {
        let birthdate = new Date(state.data[i].birthdate).getTime();
        let dateToday = new Date();
        let diff = dateToday.getTime() - birthdate;
        let diff_days = diff / (1000 * 3600 * 24);
        let diff_years = diff_days / 365;
        state.data[i].age = Math.round(diff_years) - 1;
        state.data[i].birthday = new Date(
          state.data[i].birthdate
        ).toLocaleDateString("fr-FR", { month: "long", day: "numeric" });
      }
      state.filteredData = state.data;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {});
  },
});
export const {
  filterName,
  filterCategory,
  filterCategoryOnly,
  deleteUsers,
  updateUser,
  userData,
  editUser,
  addUser,
} = fetchUsersApi.actions;
