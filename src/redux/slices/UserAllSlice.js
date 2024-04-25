import { createSlice } from "@reduxjs/toolkit"
import { fetchAllUser } from "../../services/AllProduct";

const initialState = {
    loading: false,
    data: [],
  error: null,

};
const UserAllSlice = createSlice({
    name: 'userdata',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchAllUser.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchAllUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchAllUser.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default UserAllSlice.reducer;
