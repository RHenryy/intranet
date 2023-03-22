import { configureStore } from "@reduxjs/toolkit";
import { fetchUsersApi } from "./userSlice";
import { randomUser } from "./randomUserSlice";


export default configureStore({
    reducer: {
        allUsers: fetchUsersApi.reducer,
        randomUser: randomUser.reducer,
        } // passe le state pour lecture dans useSelector
});