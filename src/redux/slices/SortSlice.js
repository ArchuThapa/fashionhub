import { createSlice } from "@reduxjs/toolkit"
import { fetchSortData } from "../../services/AllProduct";
const initialState = {
    loading: false,
    data: [],
  error: null,

};
const  SortSlice = createSlice({
    name: 'sortdata',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchSortData.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchSortData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchSortData.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default SortSlice.reducer;
