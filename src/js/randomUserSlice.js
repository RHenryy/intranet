import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsersRandom = createAsyncThunk(
    'fetchUsers',
    async () => {
        const response  = await fetch("http://localhost:5173/src/data/users.json");
        return response.json();
    
    }
);

export const randomUser = createSlice({
    name: 'randomUser',
    initialState : { random : [] },
    reducers: {
        deleteUsers: (state, action) => {
        state.random = state.random.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchUsersRandom.pending, (state, action) => {
      });
      builder.addCase(fetchUsersRandom.fulfilled, (state, action) => {
        const random = Math.floor(Math.random() * action.payload.length);
        state.random = action.payload[random];
        // state.random.forEach((user) => {
        //     user.birthdate = new Date(user.birthdate).toLocaleDateString();
        //     state.randomAge.push(new Date().toLocaleDateString() - user.birthdate);
        //     state.random.hello = "salut";
        // });
      });
      builder.addCase(fetchUsersRandom.rejected, (state, action) => {

      })
    },
  })