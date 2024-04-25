import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchData } from "../../services/AllProduct";
const initialState = {
    loading: false,
    data: [],
  error: null,

};
const  SearchSlice = createSlice({
    name: 'searchproduct',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchSearchData.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchSearchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchSearchData.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default SearchSlice.reducer;
