import { configureStore } from "@reduxjs/toolkit";
import { fetchUsersApi } from "./userSlice";


export default configureStore({
    reducer: {
        allUsers: fetchUsersApi.reducer
        } // passe le state pour lecture dans useSelector
});