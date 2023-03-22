import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchUsers = createAsyncThunk(
    'fetchUsers',
    async () => {
        const response = await fetch("http://localhost:5173/src/data/users.json");
        return response.json();
    }
);

export const fetchUsersApi = createSlice({
    name: 'fetchUsersApi',
    initialState: { data: [], age: [], birthday: [] },
    reducers: {
        deleteUsers: (state, action) => {

            state.data = state.data.filter((user) => user.id !== action.payload);

        },
        showSum: (state, action) => {
            let id = state.data[action.payload].id;
            action.payload = action.payload + 1;
            const index = (id) => id === action.payload;
            // if(index!== -1)
            // {
            //     state.sum[action.payload+1] = null;
            // }
            // if(index === -1)
            // {
            //     state.sum[action.payload+1] = state.data[action.payload].username.length + state.data[action.payload].name.length;
            // }



            // state.sum = state.sum.filter((sum) => sum !== state.data[action.payload].username.length + state.data[action.payload].name.length);
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state, action) => {
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            console.log(state.data);
            console.log(new Date().getTime())
            for (let i = 0; i < state.data.length; i++) {
                let birthdate = new Date(state.data[i].birthdate).getTime();
                let dateToday = new Date();
                let diff = dateToday.getTime() - birthdate;
                let diff_days = diff / (1000 * 3600 * 24);
                let diff_years = diff_days / 365;
                state.data[i].age = Math.round(diff_years) - 1;
                state.data[i].birthday = new Date(state.data[i].birthdate).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric' });

            }
            // state.data.forEach((user) => {
            //     user.birthdate = new Date(user.birthdate).toLocaleDateString();
            //     state.age.push(new Date().toLocaleDateString() - user.birthdate);
            //     state.data.hello = "salut";
            // // });
            // console.log(state.data);


        });
        builder.addCase(fetchUsers.rejected, (state, action) => {


        })
    },
})