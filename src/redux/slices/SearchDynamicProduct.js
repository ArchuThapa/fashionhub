import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchDynamicData } from "../../services/AllProduct"

const initialState = {
    loading: false,
    data: [],
  error: null,

};
const  SearchDynamicProduct = createSlice({
    name: 'searchdynamicproduct',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        //login user
        builder
        .addCase(fetchSearchDynamicData.pending, (state) => {
            state.loading = true;
            // state.error = null;

        })
        .addCase(fetchSearchDynamicData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })

        .addCase(fetchSearchDynamicData.rejected, (state, action) => {

            state.loading = false;
            state.error = action.error.message;

        });

    },

});
export default SearchDynamicProduct.reducer;
